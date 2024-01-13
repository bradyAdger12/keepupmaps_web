import {createContext} from 'react'
import { Auth } from './auth'
import { Contact } from './contact'
import { TerritoryStore } from './territories'
import { State } from './states'
import { MapboxMap } from './mapbox_map'
import { MapStore } from './maps'

export const authStore = new Auth()
export const AuthContext = createContext<Auth>(authStore)

export const contactStore = new Contact()
export const ContactContext = createContext<Contact>(contactStore)

export const territoryStore = new TerritoryStore()
export const TerritoryContext = createContext<TerritoryStore>(territoryStore)

export const stateStore = new State()
export const StateContext = createContext<State>(stateStore)

export const mapboxMapStore = new MapboxMap()
export const MapboxMapContext = createContext<MapboxMap>(mapboxMapStore)

export const mapStore = new MapStore()
export const MapContext = createContext<MapStore>(mapStore)
