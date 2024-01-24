import { useMutation, useQuery } from "@tanstack/react-query";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { AuthContext, MapContext } from "../../stores/stores";
import { Maps as Map } from "../../gql/graphql";
import DeleteModal from "../tools/DeleteModal";
import SpinningLoading from "../tools/SpinningLoading";
import { useNavigate } from "react-router-dom";
import { DateTime } from 'luxon'

const MapsList = observer(() => {
  const mapStore = useContext(MapContext)
  const authStore = useContext(AuthContext)
  const navigate = useNavigate()
  const [modelToDelete, setModelToDelete] = useState<Map | null>(null)
  const [mapName, setMapName] = useState('')
  const deleteObjectModalID = 'delete_object_modal'
  const createMapModalID = 'create_map_modal'
  const { data: maps, isLoading: loadingMaps, refetch: refetchMaps } = useQuery({
    queryKey: ['fetchMaps', authStore.id],
    queryFn: () => mapStore.fetchMaps()
  })
  const createMapMutation = useMutation({
    mutationKey: ['createMap'],
    mutationFn: () => mapStore.createMap({ map: { owner_id: authStore.id, name: mapName } }),
    onSuccess: () => { (document.getElementById(createMapModalID) as HTMLDialogElement).close(); refetchMaps(); setMapName('') }
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
          <div className="btn btn-primary mb-4" onClick={() => (document.getElementById(createMapModalID) as HTMLDialogElement).showModal()}>Create New Map</div>
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
                <td>{DateTime.fromISO(map.created_at).toFormat('DDD hh:mm a')}</td>
                <td><button className="btn btn-circle btn-sm bg-error border-none" onClick={(e) => { e.stopPropagation(); (document.getElementById(deleteObjectModalID) as HTMLDialogElement).showModal(); setModelToDelete({ ...map }) }}>{deleteMapMutation.isLoading ? <SpinningLoading /> : <span className="fa fa-trash text-white"></span>}</button></td>
              </tr>)}
            </tbody>
          </table>

        </div>
      }
      <dialog id={createMapModalID} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create a map</h3>
          <label className="label mt-4">Name</label>
          <input className="input" placeholder="Enter a name for your map..." value={mapName} onChange={e => setMapName(e.target.value)} onKeyUp={(e) => { if(e.key === 'Enter') createMapMutation.mutate() }} />
          <div className="modal-action">
            <button className="btn btn-primary text-white border-none" onClick={() => { createMapMutation.mutate() }} >
              Create { createMapMutation.isLoading && <SpinningLoading /> }
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop opacity-20">
          <button>close</button>
        </form>
      </dialog>
      <DeleteModal element_id={deleteObjectModalID} onDelete={() => deleteMapMutation.mutate()} />
    </>
  )
})

export default MapsList