import { observer } from "mobx-react-lite";
import { MapboxGeoJSONFeature} from "mapbox-gl";
import { useContext, useEffect, useState, useRef } from "react";
import TerritoryAdmin from "../territory/TerritoryAdmin";
import { Territory } from "../../stores/territories";

import { MapboxMapContext, StateContext, TerritoryContext } from "../../stores/stores";
import { State } from "../../stores/states";
import { Button } from "primereact/button";
import _ from 'lodash'
import { SplitButton } from "primereact/splitbutton";
import { ImageType, MapExportImage, MapExportPDF } from "../../lib/MapAssetExport";
const MapboxMap = observer(() => {
  const stateStore = useContext(StateContext)
  const territoryStore = useContext(TerritoryContext)
  const mapboxMapStore = useContext(MapboxMapContext)
  const mapContainer = useRef(null);
  const map = mapboxMapStore.map
  const [activeTerritory, setActiveTerritory] = useState<Territory | null>()
  const [downloadInProgress, setDownloadInProgress] = useState(false)
  const [feature, setFeature] = useState<MapboxGeoJSONFeature | null>()
  const exportItems = [
    {
      label: 'Export to PNG',
      icon: 'pi pi-file-png',
      command: () => {
        printDocument({ fileExtension: 'png' })
      }
    },
    {
      label: 'Export to JPEG',
      icon: 'pi pi-file-jpeg',
      command: () => {
        printDocument({ fileExtension: 'jpeg' })
      }
    }
  ]



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleMapClick(e: any) {
    const features = map?.queryRenderedFeatures(e.point);
    const feature = _.find(features, (item) => item.sourceLayer == 'albersusa')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (feature) {
      setFeature(feature)
    } else {
      setFeature(undefined)
    }

  }

  function mapOnLoad() {
    mapboxMapStore.onLoad(() => {
      addSelectedStates()
      mapboxMapStore.initPaintPropertyListeners()
      map?.on('click', 'states', (e) => handleMapClick(e))
    })
  }

  function addSelectedStates() {
    for (const state of stateStore.states) {
      mapboxMapStore.setFeatureState({
        featureId: state.id, state: {
          clicked: true,
          stateColor: _.find(territoryStore.territories, (territory: Territory) => territory.id === state.territoryId)?.color
        }
      })
    }
  }

  useEffect(() => {
    if (feature?.id && activeTerritory) {
      if (!feature?.state.clicked && !_.find(stateStore.states, (state) => state.id === feature.id)) {
        stateStore.addState({ state: { name: feature.properties?.state_name, id: feature.id, territoryId: activeTerritory.id } as State })
      } else {
        stateStore.removeState({ id: feature.id })
      }
      mapboxMapStore.setFeatureState({
        featureId: feature.id, state: {
          clicked: !feature?.state?.clicked || false,
          stateColor: activeTerritory?.color || '#ff0000'
        }
      })
    }
  }, [feature])
  useEffect(() => {
    mapboxMapStore.createMap({ mapRef: mapContainer })
  }, [])

  useEffect(() => {
    mapOnLoad()
  }, [map])

  function clearData() {
    territoryStore.clearTerritories()
    stateStore.clearStates({ map })
    setActiveTerritory(null)

  }
  async function printDocument({ fileExtension = 'pdf' }: { fileExtension?: string }) {
    setDownloadInProgress(true)
    if (fileExtension === 'pdf') {
      new MapExportPDF().export({ onComplete: () => setDownloadInProgress(false) })
    } else {
      new MapExportImage(ImageType.PNG).export({ onComplete: () => setDownloadInProgress(false) })
    }
  
  }
  return (
    <>
      <div className="flex gap-x-4 ml-10">
        <Button onClick={() => clearData()} label="Clear Data" className="bg-slate-500 text-white" />
        <SplitButton label="Export to PDF" className="bg-green-500 text-white" icon="pi pi-file-pdf" onClick={() => printDocument({ fileExtension: 'pdf' })} model={exportItems} />
      </div>
      <div id="divToPrint" className="flex flex-wrap gap-y-5 justify-around mt-8">
        <div ref={mapContainer} className="w-7/12" style={{ height: 700 }} />
        <div className="w-4/12">
          <TerritoryAdmin onTerritorySelected={(e: Territory) => { setActiveTerritory(e) }} downloadInProgress={downloadInProgress} map={map} />
        </div>
      </div>
    </>
  )
})

export default MapboxMap