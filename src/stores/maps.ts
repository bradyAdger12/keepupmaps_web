import { makeAutoObservable } from 'mobx'
import { client } from '../graphql';
import { graphql } from '../gql';
import { Maps as Map, Maps_Insert_Input } from '../gql/graphql';
export class MapStore {
  constructor() {
    makeAutoObservable(this)
  }
  async createMap({ map }: { map: Maps_Insert_Input}) {
    const response = await client.mutation(graphql(`
      mutation CreateMap($map: maps_insert_input!) {
        insert_maps_one(object: $map) {
          id
          name
          created_at
          updated_at
        }
      }
    `), { map })
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data?.insert_maps_one as Map
  }
  async deleteMap({ mapId }: { mapId: string }) {
    const response = await client.mutation(graphql(`
      mutation DeleteMap($mapId: uuid!) {
        delete_maps_by_pk(id: $mapId) {
          id
        }
      }
    `), { mapId })
    if (response.error) {
      throw new Error(response.error.message)
    }
    return true
  }
  async fetchMaps() {
    const response = await client.query(graphql(`
      query FetchMaps {
        maps {
         name
         id
         created_at
         updated_at
        }
      }
    `), {})
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data?.maps as Map[]
  }
}
