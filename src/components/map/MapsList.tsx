import { useMutation, useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { MapContext, authStore } from "../../stores/stores";
import { Maps as Map } from "../../gql/graphql";

const MapsList = observer(() => {
  const mapStore = useContext(MapContext)
  const { data: maps, isLoading } = useQuery({
    queryKey: ['fetchMaps'],
    queryFn: () => mapStore.fetchMaps()
  })
  const createMapMutation = useMutation({
    mutationKey: ['createMap'],
    mutationFn: () => mapStore.createMap({ map: { owner_id: authStore.id, name: 'New Map' } })
  })
  return (
    <>
      {!isLoading &&
        <div>
          <div className="btn btn-primary" onClick={() => createMapMutation.mutate()}>Create Map</div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {maps?.map((map: Map) => <tr key={map.id}>
                <th>{map.id}</th>
                <td>{map.name}</td>
                <td>{map.created_at}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      }
    </>
  )
})

export default MapsList