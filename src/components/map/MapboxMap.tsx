import { observer } from "mobx-react-lite";
import mapboxgl, { IControl } from "mapbox-gl";
import { useEffect, useState } from "react";
const MapboxMap = observer(() => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null)
  const [geolocateControl, setGeolocateControl] = useState<IControl>()
  let hoveredPolygonId: number | string | undefined = undefined

  function handleMapHovering() {
    map?.addSource('states', {
      'type': 'geojson',
      'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
    });
    map?.addLayer({
      'id': 'state-fills',
      'type': 'fill',
      'source': 'states',
      'layout': {},
      'paint': {
        'fill-color': '#627BC1',
        'fill-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          0.4,
          0.0
        ]
      }
    });

    map?.addLayer({
      'id': 'state-borders',
      'type': 'line',
      'source': 'states',
      'layout': {},
      'paint': {
        'line-color': '#627BC1',
        'line-width': 2
      }
    });

    map?.on('mousemove', 'state-fills', (e) => {
      if (e.features && e.features.length > 0) {
        if (hoveredPolygonId !== undefined) {
          map.setFeatureState(
            { source: 'states', id: hoveredPolygonId },
            { hover: false }
          );
        }
        hoveredPolygonId = e.features[0].id;
        map.setFeatureState(
          { source: 'states', id: hoveredPolygonId },
          { hover: true }
        );
      }
    });

    map?.on('mouseleave', 'state-fills', () => {
      if (hoveredPolygonId !== undefined) {
        map?.setFeatureState(
          { source: 'states', id: hoveredPolygonId },
          { hover: false }
        );
        hoveredPolygonId = undefined
      }
    });
  }

  function handleMapClick () {
    map?.on('click', 'state-fills', (e) => {
      console.log('click', e.lngLat)
    })
  }

  function mapOnLoad() {
    map?.on('load', () => {
      handleMapHovering()
      handleMapClick()
    })
  }
  
  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    setMap(new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-105.1066, 40.5733],
      zoom: 8
    }))
  }, [])
  useEffect(() => {
    if (map && (!geolocateControl || map?.hasControl(geolocateControl!))) {
      const control = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false,
        showUserHeading: false
      })
      setGeolocateControl(control);
      map?.addControl(control)
      

      // Go to user
     

      mapOnLoad()
    }
  }, [map])
  return (
    <div className="flex justify-center mt-8">
      <div id="map-container" style={{ width: '90%', height: 700 }}>
      </div>
    </div>)
})

export default MapboxMap