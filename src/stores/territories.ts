import { makeAutoObservable } from 'mobx'
import { client } from '../graphql';
import { Territories_Set_Input, Territories as Territory } from '../gql/graphql';
import { graphql } from '../gql';
export class TerritoryStore {
  constructor() {
    makeAutoObservable(this)
  }

  async deleteTerritory ({ territoryId }: { territoryId: string }): Promise<Territory> {
    const response = await client.mutation(graphql(`
    mutation DeleteTerritory ($territoryId: uuid!) {
      delete_territories_by_pk(id: $territoryId) {
        id
        states {
          id
          state_map_id
        }
      }
    }
  `), { territoryId })
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data?.delete_territories_by_pk as Territory
  }

  async updateTerritory({ territoryId, updates }: { territoryId: string, updates: Territories_Set_Input }): Promise<Territory> {
    const response = await client.mutation(graphql(`
    mutation UpdateTerritory ($territoryId: uuid!, $updates: territories_set_input) {
      update_territories_by_pk(pk_columns: { id: $territoryId }, _set: $updates) {
        id
      }
    }
  `), { territoryId, updates })
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data?.update_territories_by_pk as Territory
  }

  async fetchTerritories({ mapId }: { mapId: string }): Promise<Territory[]> {
    const response = await client.query(graphql(`
      query FetchTerritories($mapId: uuid!) {
        territories(where: { map_id: { _eq: $mapId }}) {
          id
          name
          color
          note
          updated_at
          states {
            id
            name
            state_map_id
          }
        }
      }
    `), { mapId })
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data?.territories as Territory[]
  }

  async createTerritory({ name, color, mapId }: { name: string, color: string, mapId: string }): Promise<Territory> {
    const response = await client.mutation(graphql(`
      mutation CreateTerritory ($name: String!, $color: String!, $mapId: uuid!)  {
        insert_territories_one(object: { name: $name, color: $color, map_id: $mapId }) {
          id
        }
      }
    `), { mapId, name, color })
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data?.insert_territories_one as Territory
  }
}
