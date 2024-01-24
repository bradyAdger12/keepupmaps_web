import { observer } from "mobx-react-lite";
import { MapboxGeoJSONFeature } from "mapbox-gl";
import { useContext, useEffect, useState } from "react";
import TerritoryAdmin from "../territory/TerritoryAdmin";
import { Territories as Territory } from "../../gql/graphql";

import { MapContext, MapboxMapContext, StateContext } from "../../stores/stores";
import _ from 'lodash'
import { SplitButton } from "primereact/splitbutton";
import { ImageType, MapExportImage, MapExportPDF } from "../../lib/MapAssetExport";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
const MapboxMap = observer(() => {
  const { map_id } = useParams() as { map_id: string }
  const stateStore = useContext(StateContext)
  const mapStore = useContext(MapContext)
  const mapboxMapStore = useContext(MapboxMapContext)
  const mapboxMap = mapboxMapStore.map
  const [stateSelectedTimestamp, setStateSelectedTimestamp] = useState(DateTime.now())
  const [activeTerritory, setActiveTerritory] = useState<Territory | null>()
  const [downloadInProgress, setDownloadInProgress] = useState(false)
  const [feature, setFeature] = useState<MapboxGeoJSONFeature | null>()
  const deleteStateMutation = useMutation({
    mutationKey: ['deleteState'],
    mutationFn: ({ stateMapId }: { stateMapId: number }) => stateStore.deleteState({ stateMapId, mapId: map_id }),
  })
  const createStateMutation = useMutation({
    mutationKey: ['createState'],
    mutationFn: ({ feature, territory }: { feature: MapboxGeoJSONFeature | null | undefined, territory: Territory }) => stateStore.addState({ name: feature?.properties?.state_name, stateAbbr: feature?.properties?.state_abbrev, stateMapId: feature?.id as number, territoryId: territory.id, mapId: map_id }),
  })
  const { data: map } = useQuery({
    queryKey: ['fetchMap'],
    queryFn: () => mapStore.fetchMap({ mapId: map_id })
  })
  const { data: states } = useQuery({
    queryKey: ['fetchStates', map_id],
    initialData: [],
    queryFn: () => stateStore.fetchStates({ mapId: map_id })
  })
  const exportItems = [
    {
      label: 'Export to PNG',
      icon: 'pi pi-file-png',
      command: () => {
        printDocument({ fileExtension: 'png' })
      }
    },
    {
      label: 'Export to JPE',
      icon: 'pi pi-file-jpeg',
      command: () => {
        printDocument({ fileExtension: 'jpeg' })
      }
    }
  ]



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleMapClick(e: any) {
    const features = mapboxMap?.queryRenderedFeatures(e.point);
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
      mapboxMapStore.initPaintPropertyListeners()
      mapboxMap?.on('click', 'states', (e) => handleMapClick(e))
    })
  }

  function addSelectedStates() {
    if (states && mapboxMapStore.map?.isStyleLoaded()) {
      console.log(states)
      for (const state of states) {
        mapboxMapStore.setFeatureState({
          featureId: state.state_map_id, state: {
            clicked: true,
            stateColor: state.territory.color
          }
        })
      }
    }

  }

  async function updateFeature(feature: MapboxGeoJSONFeature | null | undefined) {
    try {
      if (feature?.id && activeTerritory) {
        mapboxMapStore.setFeatureState({
          featureId: feature.id, state: {
            clicked: !feature?.state?.clicked || false,
            stateColor: activeTerritory?.color || '#ff0000'
          }
        })
        let updateState = false
        if (!feature?.state.clicked && !_.find(states, (state) => state.id === feature.id) && activeTerritory) {
          await createStateMutation.mutateAsync({ feature, territory: activeTerritory })
          updateState = true
        } else if (feature?.state.clicked) {
          await deleteStateMutation.mutateAsync({ stateMapId: feature.id as number })
          updateState = true
        }
        if (updateState) {
          setStateSelectedTimestamp(DateTime.now())
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    updateFeature(feature)
  }, [feature])
  useEffect(() => {
    mapboxMapStore.createMap({ mapRef: `map_${map_id}` })
    return () => { mapboxMapStore.removeMap() }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      addSelectedStates()
    }, 1000);

  }, [states])

  useEffect(() => {
    if (mapboxMap) {
      mapOnLoad()
    }
  }, [mapboxMap, states])
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
      <div className="flex items-center gap-x-4 ml-10">
        {map && <h2 className="font-bold mr-3">{map.name}</h2>}
        <SplitButton label="Export to PDF" className="bg-green-500 text-white" icon="pi pi-file-pdf" onClick={() => printDocument({ fileExtension: 'pdf' })} model={exportItems} />
      </div>
      <div id="divToPrint" className="flex flex-wrap gap-y-5 justify-around mt-8">
        <div id={`map_${map_id}`} className="w-7/12" style={{ height: 700 }} />
        <div className="w-4/12">
          <TerritoryAdmin onTerritorySelected={(e: Territory) => { setActiveTerritory(e) }} downloadInProgress={downloadInProgress} map={mapboxMap} stateSelectedTimestamp={stateSelectedTimestamp?.millisecond} />
        </div>
      </div>
    </>
  )
})

export default MapboxMap