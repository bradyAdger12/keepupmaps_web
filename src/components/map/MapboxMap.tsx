import { observer } from "mobx-react-lite";
import mapboxgl, { IControl, MapboxGeoJSONFeature } from "mapbox-gl";
import { useContext, useEffect, useState } from "react";
import UserAdmin from "../users/UserAdmin";
import { User } from "../../stores/users";
import { colors } from "../../lib/Constants";
import { StateContext, UserContext } from "../../stores/stores";
import { State } from "../../stores/states";
import { Button } from "primereact/button";
const MapboxMap = observer(() => {
  const stateStore = useContext(StateContext)
  const userStore = useContext(UserContext)
  const [map, setMap] = useState<mapboxgl.Map | null>(null)
  const [geolocateControl, setGeolocateControl] = useState<IControl>()
  const [activeUser, setActiveUser] = useState<User | null>()
  const [feature, setFeature] = useState<MapboxGeoJSONFeature | null>()
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
        'fill-color': ['match', ['feature-state', 'stateColor'], ...Object.entries(colors).flat().filter((item) => item != 'default')],
        'fill-opacity': ['case', ['boolean', ['feature-state', 'clicked'], false], 0.5, 0.0]
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
      if (e?.features && e.features.length > 0) {
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


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleMapClick(e: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (e?.features[0]) {
      setFeature(e.features[0])
    } else {
      setFeature(undefined)
    }

  }

  function mapOnLoad() {
    map?.on('load', () => {
      handleMapHovering()
      map?.on('click', 'state-fills', (e) => handleMapClick(e))
    })
  }

  useEffect(() => {
    if (feature?.id && activeUser) {
      stateStore.addState({ state: { name: feature.properties?.STATE_NAME, id: feature.id, userId: activeUser.name } as State })
      map?.setFeatureState({
        source: 'states',
        id: feature?.id,
      }, {
        clicked: !feature?.state?.clicked || false,
        stateColor: activeUser?.color || '#ff0000'
      });
    }
  }, [feature])

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    setMap(new mapboxgl.Map({
      container: 'map-container',
      projection: 'mercator',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-105.1066, 40.5733],
      zoom: 3
    }))
  }, [])
  useEffect(() => {
    if (map && (!geolocateControl || !map?.hasControl(geolocateControl!))) {
      const control = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false,
        showUserHeading: false
      })
      setGeolocateControl(control);
      map?.addControl(control)
      mapOnLoad()
    }
  }, [map])

  function clearData() {
    userStore.clearUsers()
    stateStore.clearStates({ map })
    setActiveUser(null)

  }
  return (
    <>
      <Button onClick={() => clearData()} label="Clear Data" className="bg-blue-300 text-white" />
      <div className="flex justify-around mt-8">
        <div className="w-7/12" id="map-container" style={{ height: 700 }} />
        <div className="w-4/12">
          <UserAdmin onUserSelected={(e) => { setActiveUser(e) }} />
        </div>
      </div>
    </>
  )
})

export default MapboxMap