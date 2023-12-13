import { makeAutoObservable } from 'mobx'
import { graphql } from '../gql'
import { client } from '../graphql'

export class Contact {
  constructor() {
    makeAutoObservable(this)
  }

  async submitContactForm (name: string, email: string, message: string) : Promise<void> {
    const result = await client.mutation(graphql(`
    mutation SubmitContactForm($name: String!, $email: String!, $message: String!) {
      insert_contact_form_submissions(objects: {email: $email, message: $message, name: $name}) {
        affected_rows
      }
    }
    `), {name, email, message})
    if (result.error) {
      throw result.error
    }
  }
}
