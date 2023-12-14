import {createContext} from 'react'
import { Auth } from './auth'
import { Contact } from './contact'
import { User } from './users'
import { State } from './states'

export const authStore = new Auth()
export const AuthContext = createContext<Auth>(authStore)

export const contactStore = new Contact()
export const ContactContext = createContext<Contact>(contactStore)

export const userStore = new User()
export const UserContext = createContext<User>(userStore)

export const stateStore = new State()
export const StateContext = createContext<State>(stateStore)
