import { makeAutoObservable, observe, runInAction } from 'mobx'
import { graphql } from '../gql'
import { client } from '../graphql'
import _ from 'lodash'
import axios from 'axios'

// TODO - when using capacitor, use the Preferences plugin instead of localStorage

export class Auth {
  token = localStorage.getItem('auth.token') || ''
  id = localStorage.getItem('auth.id') || ''
  user = localStorage.getItem('auth.user') ? JSON.parse(localStorage.getItem('auth.user') as string) : null
  // hasuraBaseUrl = import.meta.env.VITE_HASURA_BASE_URL || 'http://localhost:8080'
  filesBaseUrl = import.meta.env.VITE_NODE_BASE_URL || 'http://localhost:3000'

  constructor() {
    makeAutoObservable(this)
    observe(this, 'token', () => {
      console.log(this.token)
      localStorage.setItem('auth.token', this.token)
    })
    observe(this, 'user', () => {
      localStorage.setItem('auth.user', JSON.stringify(this.user))

    })
    observe(this, 'id', async () => {
      localStorage.setItem('auth.id', this.id)
      if (this.id) {
        await this.getUser()
      }
    })
  }

  async removeProfilePicture () : Promise<void> {
      if (this.token) {
        // Update avatar_file_key
        const result = await client.mutation(graphql(`mutation UpdateDisplayName($id: uuid!, $avatar_file_key: String) {
          update_users_by_pk(pk_columns: {id: $id}, _set: {avatar_file_key: $avatar_file_key}) {
            avatar_file_key
            email
            display_name
          }
        }`)
        , { id: this.id, avatar_file_key: null })
        if (!result.error) {
          this.syncUser()
        }
      } else {
        throw new Error('Authentication required.')
      }
  }

  async updateProfilePicture (photoFile: File) : Promise<void> {
    if (this.token) {
      // post multipart/form-data to /files/user-avatar
      const form = new FormData()
      form.append('avatar', photoFile)
      const response = await axios.post(this.filesBaseUrl + '/files/user-avatar', form, {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      })
      if (response?.data && this.user) {
        this.syncUser()
      }
    } else {
      throw new Error('Authentication required.')
    }
  }

  async syncUser () {
    if (this.id && this.token) {
      await this.getUser()
    } else {
      this.user = ''
    }
  }


  userAvatarKeyToUrl (key: string) : string {
    return this.filesBaseUrl + '/files/user-avatar/' + key
  }

  async destroyUser (password: string) : Promise<void> {
    const result = await client.mutation(graphql(`
    mutation DestroyUser($password: String!) {
      destroyUser(password: $password)
    }
    `), { password })
    if (result.error) {
      throw result.error
    } else {
      this.logout()
    }
  }

  async changePassword (oldPassword: string, newPassword: string) : Promise<void> {
    const result = await client.mutation(graphql(`
    mutation ChangePassword($oldPassword: String!, $newPassword: String!) {
      changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
    }
    `), { oldPassword, newPassword })
    if (result.error) {
      throw result.error
    } else {
      this.logout()
    }
  }

  async changeEmail (newEmail: string, password: string) : Promise<void> {
    const result = await client.mutation(graphql(`
    mutation ChangeEmail($newEmail: String!, $password: String!) {
      changeEmail(newEmail: $newEmail, password: $password)
    }
    `), { newEmail, password })
    if (result.error) {
      throw result.error
    }
  }

  async updateDisplayName (display_name: string) : Promise<void> {
    const result = await client.mutation(graphql(`
    mutation UpdateUser($display_name: String!, $id: uuid!) {
      update_users_by_pk(pk_columns: {id: $id}, _set: {display_name: $display_name}) {
        display_name
        avatar_file_key
        email
      }
    }
    `), { id: this.id, display_name })
    if (result.error) {
      throw result.error
    } else if (result?.data?.update_users_by_pk) {
      this.syncUser()
    }
  }

  async getUser() : Promise<void> {
    const result = await client.query(`
    query GetUser($id: uuid!) {
      users_by_pk(id: $id) {
        display_name
        email
        avatar_file_key
      }
    }
    `, { id: this.id })
    if (result.error) {
      throw result.error
    } else if (result?.data?.users_by_pk) {
      this.user = result?.data?.users_by_pk
    }
  }

  async register (email: string, password: string) : Promise<void> {
    const result = await client.mutation(graphql(`
    mutation register($email: String!, $password: String!) {
      register(email: $email, password: $password) {
        token
        id
      }
    }`), { email, password })
    if (result.error) {
      throw result.error
    }
    if (_.has(result, 'data.register.token') && _.has(result, 'data.register.id')) {
      runInAction(() => {
        this.token = result.data?.register?.token || ''
        this.id = result.data?.register?.id || ''
      })
    } else {
      throw new Error('Invalid response from server - missing token')
    }
  }

  async login (email: string, password: string) : Promise<void> {
    const result = await client.mutation(graphql(`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        id
      }
    }`), { email, password })
    if (result.error) {
      throw result.error
    }    
    if (_.has(result, 'data.login.token') && _.has(result, 'data.login.id')) {
      runInAction(() => {
        this.token = result.data?.login?.token || ''
        this.id = result.data?.login?.id || ''
      })
    } else {
      throw new Error('Invalid response from server - missing token')
    }
  }

  logout () {
    this.token = ''
    this.id = ''
    this.user = ''
  }

  async sendPasswordResetEmail (email: string) : Promise<void> {
    const result = await client.mutation(graphql(`
    mutation SendPasswordResetEmail($email: String!) {
      sendPasswordResetEmail(email: $email)
    }`), { email })
    if (result.error) {
      throw result.error
    }
  }

  async verifyEmail (code: string) : Promise<void> {
    if (!code) {
      throw new Error('Invalid code')
    }
    const result = await client.mutation(graphql(`
    mutation VerifyEmail($code: String!) {
      verifyEmail(code: $code)
    }`), { code })
    if (result.error) {
      throw result.error
    }
  }

  async resetPassword (code: string, email: string, newPassword: string) : Promise<void> {
    if (!code) {
      throw new Error('Invalid code')
    }
    const result = await client.mutation(graphql(`
    mutation ResetPassword($code: String!, $email: String!, $newPassword: String!) {
      resetPassword(code: $code, email: $email, newPassword: $newPassword)
    }`), { code, email, newPassword })
    if (result.error) {
      throw result.error
    }
  }

  get isAuthenticated() {
    return !!this.token
  }
}
