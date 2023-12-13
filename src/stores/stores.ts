import {createContext} from 'react'
import { Auth } from './auth'
import { Contact } from './contact'

export const authStore = new Auth()
export const AuthContext = createContext<Auth>(authStore)

export const contactStore = new Contact()
export const ContactContext = createContext<Contact>(contactStore)
