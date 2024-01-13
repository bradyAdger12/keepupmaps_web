import { makeAutoObservable } from 'mobx'
import { client } from '../graphql';
import { Territories_Set_Input, Territories as Territory } from '../gql/graphql';
import { graphql } from '../gql';
export class TerritoryStore {
  constructor() {
    makeAutoObservable(this)
  }

  saveTerritories() {
    // localStorage.setItem('territory', JSON.stringify(this.territories.map((territory) => { return { name: territory.name, color: territory.color, note: territory.note, id: territory.id }})))
  }

  clearTerritories() {
    // localStorage.removeItem(localStorageModelName)
    // this.territories = []
    // console.log(this.territories)
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

  async fetchTerritories(): Promise<Territory[]> {
    const response = await client.query(graphql(`
      query FetchTerritories {
        territories {
          id
          name
          color
          note
        }
      }
    `), {})
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
