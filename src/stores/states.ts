import { makeAutoObservable } from 'mobx'
import { States as State } from '../gql/graphql';
import { client } from '../graphql';
import { graphql } from '../gql';
export class StateStore {
  constructor() {
    makeAutoObservable(this)
  }

  async deleteState({ stateMapId, mapId }: { stateMapId: number, mapId: string }): Promise<State> {
    const response = await client.mutation(graphql(`
    mutation DeleteState ($stateMapId: Int!, $mapId: uuid!)  {
      delete_states_by_pk(state_map_id: $stateMapId, map_id: $mapId) {
        id
        name
        state_map_id
        territory_id
      }
    }
  `), { stateMapId, mapId })
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data?.delete_states_by_pk as State
  }

  async fetchStates({ mapId }: { mapId: string }): Promise<State[]> {
    const response = await client.query(graphql(`
      query FetchStates($mapId: uuid!) {
        states(where: { map_id: {_eq: $mapId }}) {
          id
          name
          state_map_id
          territory {
            id
            color
          }
        }
      }
    `), { mapId })
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data?.states as State[]
  }

  async addState({ name, stateMapId, territoryId, mapId, stateAbbr }: { name: string, stateMapId: number, territoryId: string, mapId: string, stateAbbr: string }): Promise<State> {
    const response = await client.mutation(graphql(`
    mutation CreateState ($name: String!, $stateMapId: Int!, $territoryId: uuid!, $mapId: uuid!, $stateAbbr: String!)  {
      insert_states_one(object: { name: $name, territory_id: $territoryId, state_map_id: $stateMapId, map_id: $mapId, name_abbreviation: $stateAbbr }) {
        id
        name
        state_map_id
        territory_id
      }
    }
  `), { name, stateMapId, territoryId, mapId, stateAbbr })
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data?.insert_states_one as State
  }
}
