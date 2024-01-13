import { useMutation, useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { AuthContext, MapContext } from "../../stores/stores";
import { Maps as Map } from "../../gql/graphql";
import DeleteModal from "../tools/DeleteModal";
import SpinningLoading from "../tools/SpinningLoading";
import { useNavigate } from "react-router-dom";

const MapsList = observer(() => {
  const mapStore = useContext(MapContext)
  const authStore = useContext(AuthContext)
  const navigate = useNavigate()
  const [modelToDelete, setModelToDelete] = useState<Map | null>(null)
  const deleteObjectModalID = 'delete_object_modal'
  const { data: maps, isLoading: loadingMaps, refetch: refetchMaps } = useQuery({
    queryKey: ['fetchMaps', authStore.id],
    queryFn: () => mapStore.fetchMaps()
  })
  const createMapMutation = useMutation({
    mutationKey: ['createMap'],
    mutationFn: () => mapStore.createMap({ map: { owner_id: authStore.id, name: 'New Map' } }),
    onSuccess: () => refetchMaps()
  })
  const deleteMapMutation = useMutation({
    mutationKey: ['deleteMap'],
    mutationFn: () => mapStore.deleteMap({ mapId: modelToDelete?.id }),
    onSuccess: () => refetchMaps()
  })
  return (
    <>
      {!loadingMaps &&
        <div>
          <div className="btn btn-primary mb-4" onClick={() => createMapMutation.mutate()}>Create New Map</div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {maps?.map((map: Map) => <tr key={map.id} className="cursor-pointer hover:bg-gray-100" onClick={() => navigate(`/map/${map.id}`)} >
                <td>{map.id}</td>
                <td>{map.name}</td>
                <td>{map.created_at}</td>
                <td><button className="btn btn-circle btn-sm bg-error border-none" onClick={(e) => { e.stopPropagation(); (document.getElementById(deleteObjectModalID) as HTMLDialogElement).showModal(); setModelToDelete({ ...map }) }}>{deleteMapMutation.isLoading ? <SpinningLoading /> : <span className="fa fa-trash text-white"></span>}</button></td>
              </tr>)}
            </tbody>
          </table>

        </div>
      }
      <DeleteModal element_id={deleteObjectModalID} onDelete={() => deleteMapMutation.mutate()} />
    </>
  )
})

export default MapsList