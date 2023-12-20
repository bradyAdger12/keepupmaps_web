import { observer } from "mobx-react-lite";
import mapboxgl, { MapboxGeoJSONFeature, Projection } from "mapbox-gl";
import { useContext, useEffect, useState, useRef } from "react";
import TerritoryAdmin from "../territory/TerritoryAdmin";
import { Territory } from "../../stores/territories";
import { colors } from "../../lib/Constants";
import { StateContext, TerritoryContext } from "../../stores/stores";
import { State } from "../../stores/states";
import { Button } from "primereact/button";
import _ from 'lodash'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
const MapboxMap = observer(() => {
  const stateStore = useContext(StateContext)
  const territoryStore = useContext(TerritoryContext)
  const [map, setMap] = useState<mapboxgl.Map | null>(null)
  const mapContainer = useRef(null);
  const [activeTerritory, setActiveTerritory] = useState<Territory | null>()
  const [downloadInProgress, setDownloadInProgress] = useState(false)
  const [feature, setFeature] = useState<MapboxGeoJSONFeature | null>()

  function initPaintPropertyListeners() {
    map?.setPaintProperty('states', 'fill-color', ['match', ['feature-state', 'stateColor'], ...Object.entries(colors).flat().filter((item) => item != 'default')])
    map?.setPaintProperty('states', 'fill-opacity', ['case', ['boolean', ['feature-state', 'clicked'], false], 0.5, 0.0])
  }


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
    map?.on('load', () => {
      initPaintPropertyListeners()
      addSelectedStates()
      map?.on('click', 'states', (e) => handleMapClick(e))
    })
  }

  function addSelectedStates() {
    for (const state of stateStore.states) {
      console.log(state)
      map?.setFeatureState({
        source: 'composite',
        sourceLayer: 'albersusa',
        id: state.id,
      }, {
        clicked: true,
        stateColor: _.find(territoryStore.territories, (territory: Territory) => territory.id === state.territoryId)?.color
      });
    }
  }

  useEffect(() => {
    //1703100582509
    if (feature?.id && activeTerritory) {
      if (!feature?.state.clicked) {
        stateStore.addState({ state: { name: feature.properties?.state_name, id: feature.id, territoryId: activeTerritory.id } as State })
      } else {
        stateStore.removeState({ id: feature.id })
      }
      map?.setFeatureState({
        source: 'composite',
        sourceLayer: 'albersusa',
        id: feature?.id,
      }, {
        clicked: !feature?.state?.clicked || false,
        stateColor: activeTerritory?.color || '#ff0000'
      });
    }
  }, [feature])

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    setMap(new mapboxgl.Map({
      container: mapContainer.current!,
      dragRotate: false,
      projection: 'mercator' as unknown as Projection,
      preserveDrawingBuffer: true,
      style: 'mapbox://styles/brady12/clq5cvwka01bp01p7e2y07cxp',
      center: [
        -2.612890767204192, 0.6426634701893619],
      zoom: 3.314
    }))
  }, [])
  useEffect(() => {
    mapOnLoad()
  }, [map])

  function clearData() {
    territoryStore.clearTerritories()
    stateStore.clearStates({ map })
    setActiveTerritory(null)

  }
  async function printDocument() {
    const element = document.getElementById('divToPrint')
    setDownloadInProgress(true)
    setTimeout(() => {
    html2canvas(element!)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg');

        // Create a PDF
        const pdf = new jsPDF({
          orientation: 'landscape'
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Calculate scaling factors for width and height
        const widthScale = pdfWidth / imgWidth;
        const heightScale = pdfHeight / imgHeight;

        const scale = Math.min(widthScale, heightScale);

        // Calculate new image dimensions to fit within the PDF
        const newImgWidth = imgWidth * scale;
        const newImgHeight = imgHeight * scale;

        const x = (pdfWidth - newImgWidth) / 2;
        const y = (pdfHeight - newImgHeight) / 2;
        pdf.addImage(imgData, 'JPEG', x, y, newImgWidth, newImgHeight);
        pdf.save('screenshot.pdf');
      })
      .catch((error) => {
        console.error('Error capturing screenshot:', error);
      }).then(() => setDownloadInProgress(false));
    }, 1000)
  }
  return (
    <>
      <Button onClick={() => clearData()} label="Clear Data" className="bg-blue-500 text-white" />
      <Button onClick={() => printDocument()} label="Save to PDF" className="bg-blue-500 text-white" />
      <div id="divToPrint" className="flex justify-around mt-8">
        <div ref={mapContainer}  className="w-7/12" style={{ height: 700 }} />
        <div className="w-4/12">
          <TerritoryAdmin onTerritorySelected={(e: Territory) => { setActiveTerritory(e) }} downloadInProgress={downloadInProgress} />
        </div>
      </div>
    </>
  )
})

export default MapboxMap