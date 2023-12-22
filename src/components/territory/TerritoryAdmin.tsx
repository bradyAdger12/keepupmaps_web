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
  
  const StateList = (territory: Territory) => {
    const stateCount = stateStore.states.filter((state) => state.territoryId === territory.id).length
    if (!stateCount) {
      return <p className="text-slate-500 italic">No states selected</p>
    }
    return (
      <div className="flex flex-wrap">
        ({stateStore.states.filter((state) => state.territoryId === territory.id).map((item, index) => 
        <div key={item.id} className="flex-initial">
          <span className="state-abbr " onClick={(e) => { e.stopPropagation() }}>{stateAbbreviation[item.name! as keyof typeof stateAbbreviation]}</span>
          <span>{index !== stateStore.states.filter((state) => state.territoryId === territory.id).length - 1 && ', '}</span>
        </div>)})
      </div>
    )
  }

  const TerritoryItem = (territory: Territory) => {
    if (!territory) {
      return <></>
    }
    return (
      <li className={`cursor-pointer items-center p-4  ${(selectedTerritory?.name === territory.name && !downloadInProgress) && 'bg-blue-100 border border-blue-200'}`} onClick={() => setSelectedTerritory(territory)}>
        <div className="flex items-center gap-x-3">
          <div className="h-6 w-6 rounded-full" style={{ backgroundColor: territory.color }}></div>
          <div>
            <h3 className="flex-auto truncate font-semibold text-gray-900 leading-8">{territory.name}</h3>
            <div className="flex-1 mr-2" style={{ fontSize: 14 }}>
              <div className="flex flex-wrap text-slate-500">
                {StateList(territory)}
              </div>
            </div>
          </div>
          <div className="ml-auto flex-none text-xs text-gray-500">
            {!downloadInProgress && <div className="flex-initial ml-2" onClick={(e) => { e.stopPropagation(); onTerritoryClick(territory) }}><Button icon="pi pi-pencil" className="bg-transparent" outlined rounded text size="small" /></div>}
            {/* ADD Action buttons here */}
          </div>
        </div>
        <p className="mt-3 truncate text-sm text-gray-500">
          {territory.note && <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: territory.note.replace(/\n/g, '<br>') }} />}
        </p>
      </li>
    )
  }
  return (
    <>
      <div>
        {!downloadInProgress && <div>
            <fieldset className="text-slate-800 border rounded px-4 py-2">
              <legend className="font-semibold text-lg">Add a new Territory</legend>

              <div className="relative mt-2 flex items-center space-x-3">
                  {/* <input type="text" name="new-territory" id="new-territory" className="flex-1 block w-full bg-white text-left rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter territory name here (ex. Southeast)" /> */}
                <InputText placeholder="Enter territory name here (ex. Southeast)" className="flex-1 block w-full bg-white h-12 left-left rounded-md border py-1.5 px-3 text-slate-900" value={territoryInputText} onChange={e => setTerritoryInputText(e.target.value)} onKeyUp={e => e.key === 'Enter' && addTerritory()} />
                <div className="h-12 flex-shrink-0">
                  <label htmlFor="color" className="sr-only">Color</label>
                  <Dropdown value={colorInput} 
                    placeholder="Color" 
                    className="h-full bg-white rounded-md border py-0 px-3 text-slate-900" 
                    onChange={(e) => setColorInput(e.target.value)} 
                    options={Object.keys(colors).filter((item) => !_.find(territories, (territory) => territory.color === item))}
                    valueTemplate={(e) => 
                      <div className="py-0">
                        <div className="sr-only">{e}</div>
                        <span className="block rounded-full" style={{ backgroundColor: colors[e as keyof typeof colors], width: 20, height: 20 }}></span>
                      </div>} 
                    itemTemplate={(e) => 
                      <div className="py-0">
                        <div className="sr-only">{e}</div>
                        <span className="block rounded-full" style={{ backgroundColor: colors[e as keyof typeof colors], width: 20, height: 20 }}></span>
                      </div>} 
                    />
                </div>  
              </div>
              <div className="py-1 flex justify-end">
                <Button className="bg-blue-500 text-white text-sm" label="Add New Territory" onClick={addTerritory} size="small" />
              </div>
            </fieldset>
        </div>}
        <ul role="list" className="mt-4 divide-y divide-gray-100 bg-white rounded overflow-hidden">
          {territories && territories.length > 0 && territories.map((item: Territory) => <div key={item.id}>{TerritoryItem(item)}</div>)}
        </ul>
      </div>
      <Dialog closeIcon="pi pi-times" header={territoryToEdit?.name} className="m-10" visible={noteDialogOpen} style={{ width: '50vw' }} onHide={() => setNoteDialogOpen(false)}>
        <div>
          {territoryToEdit &&
            <>
              <Dropdown value={editColor} onChange={(e) => setEditColor(e.target.value)} options={Object.keys(colors)} valueTemplate={(e) => <div className="flex justify-between"><div>{e}</div><div className="rounded-sm" style={{ backgroundColor: colors[e as keyof typeof colors], width: 20, height: 20 }}></div></div>} itemTemplate={(e) => <div className="flex justify-between"><div>{e}</div><div className="rounded-sm" style={{ backgroundColor: colors[e as keyof typeof colors], width: 20, height: 20 }}></div></div>}
                placeholder="Please select a color" className="w-full md:w-14rem border-2 mt-2" />
              <div><InputText className="bg-gray-100 w-6/12 mt-5 p-2" placeholder="Edit name for this territory" value={name} onChange={(e) => setName(e.target.value)} /></div>
              <div><InputTextarea className="bg-gray-100 w-6/12 mt-5 p-2"  placeholder="Enter a note for this territory" value={note} onChange={(e) => setNote(e.target.value)} rows={5} /></div>
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