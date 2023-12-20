import { observer } from "mobx-react-lite";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useContext, useEffect, useState } from "react";
import { StateContext, TerritoryContext } from "../../stores/stores";
import { Territory } from "../../stores/territories";
import { Dropdown } from "primereact/dropdown";
import _ from 'lodash'
import { colors, stateAbbreviation } from "../../lib/Constants";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
const TerritoryAdmin = observer(({ onTerritorySelected, downloadInProgress, map }: { onTerritorySelected: (arg0: Territory) => void, downloadInProgress: boolean, map?: mapboxgl.Map | null }) => {
  const territoryStore = useContext(TerritoryContext)
  const stateStore = useContext(StateContext)
  const [territoryInputText, setTerritoryInputText] = useState('')
  const [colorInput, setColorInput] = useState<string | null>()
  const [editColor, setEditColor] = useState<string | null>()
  const [territories, setTerritories] = useState(territoryStore.territories)
  const [selectedTerritory, setSelectedTerritory] = useState<Territory | null>(territories?.length > 0 ? territories[0] : null)
  const [territoryToEdit, setTerritoryToEdit] = useState<Territory | null>()
  const [note, setNote] = useState('')
  const [name, setName] = useState('')
  const [noteDialogOpen, setNoteDialogOpen] = useState(false)
  function addTerritory() {
    if (_.find(territoryStore.territories, (territory: Territory) => territory.name.toLowerCase() === territoryInputText.toLowerCase() || territory.color === colorInput)) {
      return
    }
    if (territoryInputText && colorInput) {
      const territory = new Territory()
      territory.name = territoryInputText
      territory.id = Date.now().toString()
      territory.color = colorInput || 'default'
      territoryStore.addTerritory({ territory })
      setSelectedTerritory(territory)
      setTerritoryInputText('')
      setColorInput('')
    }
  }

  function deleteTerritory() {
    const removedStates = _.remove(stateStore.states, (state) => state.territoryId === territoryToEdit?.id)
    _.remove(territoryStore.territories, (territory) => territory.id === territoryToEdit?.id)
    for (const state of removedStates) {
      map?.setFeatureState({
        source: 'composite',
        sourceLayer: 'albersusa',
        id: state.id,
      }, {
        clicked: false
      });
    }
    territoryStore.saveTerritories()
    stateStore.saveStates()
    setNoteDialogOpen(false)
  }

  function onTerritorySave() {
    if (territoryToEdit) {
      territoryToEdit.note = note;
      territoryToEdit.name = name;
      if (editColor) {
        if (territoryToEdit.color != editColor) {
          updateRegionColorsInMap(editColor)
        }
        territoryToEdit.color = editColor
      }
      territoryStore.saveTerritories();
      setNote('')
      setName('')
      setEditColor('')
      setNoteDialogOpen(false)
    }
  }

  function updateRegionColorsInMap(color: string) {
    const statesToUpdate = stateStore.states.filter((state) => state.territoryId === territoryToEdit?.id)
    for (const state of statesToUpdate) {
      map?.setFeatureState({
        source: 'composite',
        sourceLayer: 'albersusa',
        id: state.id?.toString()
      }, {
        stateColor: color || '#ff0000'
      });
    }
  }

  function onTerritoryClick(territory: Territory) {
    setNoteDialogOpen(true)
    setTerritoryToEdit(territory)
    setNote(territory.note || '')
    setName(territory.name || '')
    setEditColor(territory.color || '')
  }
  useEffect(() => {
    onTerritorySelected(selectedTerritory!)
  }, [selectedTerritory])
  useEffect(() => {
    setTerritories(territoryStore.territories)
  }, [territoryStore.territories])
  const TerritoryItem = (territory: Territory) => {
    if (!territory) {
      return <></>
    }
    return (
      <div onClick={() => setSelectedTerritory(territory)} className={`cursor-pointer items-center p-3  ${(selectedTerritory?.name === territory.name && !downloadInProgress) && 'bg-gray-100 rounded-md border-solid border-blue-200 border-2'}`}>
        <div className="flex flex-wrap items-center">
          <div className="font-bold flex-initial mr-2" style={{ fontSize: 30 }}>{territory.name}</div>
          <div className="flex-1 mr-2">
            <div className="flex flex-wrap">({stateStore.states.filter((state) => state.territoryId === territory.id).map((item, index) => <div key={item.id} className="flex-initial"><span className="state-abbr" onClick={(e) => { e.stopPropagation() }}>{stateAbbreviation[item.name! as keyof typeof stateAbbreviation]}</span><span>{index !== stateStore.states.filter((state) => state.territoryId === territory.id).length - 1 && ', '}</span></div>)})</div>
          </div>
          <div className="flex-initial rounded-md" style={{ backgroundColor: territory.color, width: 30, height: 30 }} />
          {!downloadInProgress && <div className="flex-initial ml-2" onClick={(e) => { e.stopPropagation(); onTerritoryClick(territory) }}><Button icon="pi pi-pencil" className="bg-transparent" outlined rounded text size="small" /></div>}
        </div>
        {territory.note && <div className="text-gray-500">{territory.note}</div>}
      </div>
    )
  }
  return (
    <>
      <div>
        {!downloadInProgress && <div>
          <div className="flex">
            <div className="p-inputgroup flex-1">
              <InputText placeholder="Enter territory name here (ex. Southeast)" className="border-solid border-2 pl-2" value={territoryInputText} onChange={e => setTerritoryInputText(e.target.value)} onKeyUp={e => e.key === 'Enter' && addTerritory()} />
              <Button className="rounded-l-none bg-blue-500 text-white" label="Add New Territory" onClick={addTerritory} />
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
      <Dialog closeIcon="pi pi-times" header={territoryToEdit?.name} className="m-10" visible={noteDialogOpen} style={{ width: '50vw' }} onHide={() => setNoteDialogOpen(false)}>
        <div>
          {territoryToEdit &&
            <>
              <Dropdown value={editColor} onChange={(e) => setEditColor(e.target.value)} options={Object.keys(colors)} valueTemplate={(e) => <div className="flex justify-between"><div>{e}</div><div className="rounded-sm" style={{ backgroundColor: colors[e as keyof typeof colors], width: 20, height: 20 }}></div></div>} itemTemplate={(e) => <div className="flex justify-between"><div>{e}</div><div className="rounded-sm" style={{ backgroundColor: colors[e as keyof typeof colors], width: 20, height: 20 }}></div></div>}
                placeholder="Please select a color" className="w-full md:w-14rem border-2 mt-2" />
              <div><InputText className="bg-gray-100 w-6/12 mt-5 p-2" placeholder="Edit name for this territory" value={name} onChange={(e) => setName(e.target.value)} /></div>
              <div><InputTextarea className="bg-gray-100 w-6/12 mt-5 p-2" placeholder="Enter a note for this territory" value={note} onChange={(e) => setNote(e.target.value)} rows={5} /></div>
              <Button className="bg-blue-500 text-white mt-4" onClick={() => { onTerritorySave() }}>
                Save
              </Button>
              <Button className="bg-red-500 text-white mt-4 ml-2" onClick={() => { deleteTerritory() }}>
                Delete Territory
              </Button>
            </>
          }
        </div>
      </Dialog>
    </>)
})

export default TerritoryAdmin