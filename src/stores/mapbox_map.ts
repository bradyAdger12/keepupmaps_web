import { makeAutoObservable } from 'mobx'
import { Map, Projection } from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
import { colors } from "../lib/Constants";
export class MapboxMap {
  map?: Map | null | undefined
  constructor() {
    makeAutoObservable(this)
  }
  removeMap () {
    this.map?.remove()
    this.map = null
  }
  createMap({ mapRef }: { mapRef: string }) {
    if (!this.map) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
      this.map = new mapboxgl.Map({
        container: mapRef,
        dragRotate: false,
        projection: 'mercator' as unknown as Projection,
        preserveDrawingBuffer: true,
        style: 'mapbox://styles/brady12/clq5cvwka01bp01p7e2y07cxp',
        doubleClickZoom: false,
        minZoom: 3.5,
        center: [
          -2.612890767204192, 0.6426634701893619],
        zoom: 3.7
      })
    }
  }

  setFeatureState({ featureId, state }: { featureId: string | number | undefined, state: object }) {
    this.map?.setFeatureState({
      source: 'composite',
      sourceLayer: 'albersusa',
      id: featureId,
    }, state);
  }

  onLoad(callback: () => void) {
    this.map?.on('load', callback)
  }

  initPaintPropertyListeners() {
    this.map?.setPaintProperty('states', 'fill-color', ['match', ['feature-state', 'stateColor'], ...Object.entries(colors).flat().filter((item) => item != 'default')])
    this.map?.setPaintProperty('states', 'fill-opacity', ['case', ['boolean', ['feature-state', 'clicked'], false], 0.5, 0.0])
  }
}
