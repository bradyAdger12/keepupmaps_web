import { observer } from "mobx-react-lite";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useContext, useEffect, useState } from "react";
import { TerritoryContext } from "../../stores/stores";
import { Dropdown } from "primereact/dropdown";
import _ from 'lodash'
import { colors, stateAbbreviation } from "../../lib/Constants";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Territories as Territory } from "../../gql/graphql";
const TerritoryAdmin = observer(({ onTerritorySelected, downloadInProgress, map, stateSelectedTimestamp }: { onTerritorySelected: (arg0: Territory) => void, downloadInProgress: boolean, map?: mapboxgl.Map | null, stateSelectedTimestamp: number }) => {
  const territoryStore = useContext(TerritoryContext)
  const editTerritoryModalID = 'edit_territory_modal'
  const { map_id } = useParams() as { map_id: string }
  const [territoryInputText, setTerritoryInputText] = useState('')
  const [colorInput, setColorInput] = useState<string | null>()
  const [editColor, setEditColor] = useState<string | undefined>()
  const [selectedTerritory, setSelectedTerritory] = useState<Territory | null>(null)
  const [territoryToEdit, setTerritoryToEdit] = useState<Territory | null>()
  const [note, setNote] = useState('')
  const [name, setName] = useState('')
  const [skipFirst, setSkipFirst] = useState(true)
  const { data: territories, refetch: refetchTerritories } = useQuery({
    queryKey: ['fetchTerritories'],
    cacheTime: 0,
    staleTime: 0,
    queryFn: () => territoryStore.fetchTerritories({ mapId: map_id })
  })
  const updateTerritoryMutation = useMutation({
    mutationKey: ['updateTerritory'],
    mutationFn: () => territoryStore.updateTerritory({ updates: { color: editColor, name, note } as Territory, territoryId: territoryToEdit?.id }),
    onSuccess: () => {
      if (editColor && territoryToEdit?.color != editColor) {
        updateRegionColorsInMap(editColor)
      }
      setEditColor('')
      setName('')
      setNote('');
      (document.getElementById(editTerritoryModalID) as HTMLDialogElement).close()
      refetchTerritories()
    }
  })
  const deleteTerritoryMutation = useMutation({
    mutationKey: ['deleteTerritory'],
    mutationFn: () => territoryStore.deleteTerritory({ territoryId: territoryToEdit?.id }),
    onSuccess: () => { (document.getElementById(editTerritoryModalID) as HTMLDialogElement).close(); refetchTerritories() }

  })
  const createTerritoryMutation = useMutation({
    mutationKey: ['createTerritory'],
    mutationFn: () => territoryStore.createTerritory({ color: colorInput || 'default', name: territoryInputText, mapId: map_id }),
    onSuccess: () => { refetchTerritories(); setTerritoryInputText(''); setColorInput('') }
  })

  function updateRegionColorsInMap(color: string) {
    if (territoryToEdit) {
      for (const state of territoryToEdit.states) {
        map?.setFeatureState({
          source: 'composite',
          sourceLayer: 'albersusa',
          id: state.state_map_id?.toString()
        }, {
          stateColor: color || '#ff0000'
        });
      }
    }
  }

  function onEditTerritory(territory: Territory) {
    setEditColor(territory.color || 'default')
    setName(territory.name || '')
    setNote(territory.note || '')
    setTerritoryToEdit(territory);
    (document.getElementById(editTerritoryModalID) as HTMLDialogElement).show()
  }
  useEffect(() => {
    if (!skipFirst) {
      refetchTerritories()
    }
    setSkipFirst(false)
  }, [stateSelectedTimestamp])
  useEffect(() => {
    onTerritorySelected(selectedTerritory!)
  }, [selectedTerritory])
  const TerritoryItem = (territory: Territory) => {
    if (!territory) {
      return <></>
    }
    return (
      <div onClick={() => setSelectedTerritory(territory)} className={`cursor-pointer items-center p-3  ${(selectedTerritory?.name === territory.name && !downloadInProgress) && 'bg-gray-100 rounded-md border-solid border-blue-200 border-2'}`}>
        <div className="flex flex-wrap items-center">
          <div className="flex-initial rounded-md mr-2" style={{ backgroundColor: territory?.color || 'transparent', width: 30, height: 30 }} />
          <div className="font-bold flex-initial mr-2" style={{ fontSize: 20 }}>{territory.name}</div>
          <div className="flex-1 mr-2" style={{ fontSize: 14 }}>
            <div className="flex flex-wrap">({territory.states.map((item, index) => <div key={item.id} className="flex-initial"><span className="state-abbr" onClick={(e) => { e.stopPropagation() }}>{stateAbbreviation[item.name! as keyof typeof stateAbbreviation]}</span><span>{index !== territory.states.length - 1 && ', '}</span></div>)})</div>
          </div>
          {!downloadInProgress && <div className="flex-initial ml-2" onClick={(e) => { e.stopPropagation(); onEditTerritory(territory) }}><button className="btn btn-sm bg-blue-500 text-white border-none"><span className="pi pi-pencil" /></button></div>}
        </div>
        {territory.note && <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: territory.note.replace(/\n/g, '<br>') }} />}
      </div>
    )
  }
  return (
    <>
      <div>
        {!downloadInProgress && <div>
          <div className="flex">
            <div className="p-inputgroup flex-1">
              <InputText placeholder="Enter territory name here (ex. Southeast)" className="border-solid border-2 pl-2" value={territoryInputText} onChange={e => setTerritoryInputText(e.target.value)} onKeyUp={e => e.key === 'Enter' && createTerritoryMutation.mutate()} />
              <Button className="rounded-l-none bg-blue-500 text-white" label="Add New Territory" onClick={() => createTerritoryMutation.mutate()} />
            </div>
          </div>
          {territoryInputText && <div className="mt-6">
            <label>
              Please select a color
            </label>

            <Dropdown value={colorInput} onChange={(e) => setColorInput(e.target.value)} options={Object.keys(colors).filter((item) => !_.find(territories, (territory) => territory.color === item))} valueTemplate={(e) => <div className="flex justify-between"><div>{e}</div><div className="rounded-sm" style={{ backgroundColor: colors[e as keyof typeof colors], width: 20, height: 20 }}></div></div>} itemTemplate={(e) => <div className="flex justify-between"><div>{e}</div><div className="rounded-sm" style={{ backgroundColor: colors[e as keyof typeof colors], width: 20, height: 20 }}></div></div>}
              placeholder="Please select a color" className="w-full md:w-14rem border-2 mt-2" />
          </div>
          }
        </div>
        }
        <div className="mt-10">
          {territories && territories.length > 0 && territories.map((item: Territory) => <div key={item.id}>{TerritoryItem(item)}</div>)}
        </div>
      </div>
      <dialog id={editTerritoryModalID} className="modal">
        <div className="modal-box">
          {territoryToEdit &&
            <>
              <label className="label">
                Territory Color
              </label>
              <div className="flex items-center gap-x-5">
                <select className="select" value={editColor} onChange={(e) => setEditColor(e.target.value)}>
                  {Object.keys(colors).map((key) => <option key={colors[key as keyof typeof colors]} value={key}>{key}</option>)}
                </select>
                {editColor && <div className="rounded-lg" style={{ height: 25, width: 25, backgroundColor: colors[editColor as keyof typeof colors] }} />}
              </div>
              <div className="mt-5">
                <label className="label">
                  Name
                </label>
                <input className="input w-6/12 p-2 w-full" placeholder="Edit name for this territory" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mt-5">
                <label className="label">
                  Note
                </label>
                <textarea className="textarea w-6/12 p-2 w-full" placeholder="Enter a note for this territory" value={note} onChange={(e) => setNote(e.target.value)} rows={5} />
              </div>
              <button className="btn bg-blue-500 text-white mt-4" onClick={() => { updateTerritoryMutation.mutate() }}>
                Save
              </button>
              <button className="btn bg-red-500 text-white mt-4 ml-2" onClick={() => { deleteTerritoryMutation.mutate() }}>
                Delete Territory
              </button>
            </>
          }

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>)
})

export default TerritoryAdmin