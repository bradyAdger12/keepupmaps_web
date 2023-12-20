import { observer } from "mobx-react-lite";
import mapboxgl, { IControl, MapboxGeoJSONFeature, Projection } from "mapbox-gl";
import { useContext, useEffect, useState } from "react";
import UserAdmin from "../users/UserAdmin";
import { User } from "../../stores/users";
import { colors } from "../../lib/Constants";
import { StateContext, UserContext } from "../../stores/stores";
import { State } from "../../stores/states";
import { Button } from "primereact/button";
import _ from 'lodash'
const MapboxMap = observer(() => {
  const stateStore = useContext(StateContext)
  const userStore = useContext(UserContext)
  const [map, setMap] = useState<mapboxgl.Map | null>(null)
  const [geolocateControl, setGeolocateControl] = useState<IControl>()
  const [activeUser, setActiveUser] = useState<User | null>()
  const [feature, setFeature] = useState<MapboxGeoJSONFeature | null>()
  let hoveredPolygonId: number | string | undefined = undefined

  function handleMapHovering() {
    // map?.addSource('states', {
    //   'type': 'vector',
    //   'url': 'mapbox://mbxsolutions.albersusa,mbxsolutions.albersusa-points'
    // });

    map?.setPaintProperty('states', 'fill-color', ['match', ['feature-state', 'stateColor'], ...Object.entries(colors).flat().filter((item) => item != 'default')])
    map?.setPaintProperty('states', 'fill-opacity', ['case', ['boolean', ['feature-state', 'clicked'], false], 0.5, 0.0])

    // map?.addLayer({
    //   'id': 'state_fill',
    //   'type': 'fill',
    //   'source': 'composite',
    //   'source-layer': 'states',
    //   'layout': {},
    //   'paint': {
    //     'fill-color': ['match', ['feature-state', 'stateColor'], ...Object.entries(colors).flat().filter((item) => item != 'default')],
    //     'fill-opacity': ['case', ['boolean', ['feature-state', 'clicked'], false], 0.5, 0.0]
    //   }
    // });

    //   map?.on('mousemove', 'states', (e) => {
    //     if (e?.features && e.features.length > 0) {
    //       if (hoveredPolygonId !== undefined) {
    //         map.setFeatureState(
    //           { source: 'c', sourceLayer: 'albersusa', id: hoveredPolygonId },
    //           { hover: false }
    //         );
    //       }
    //       hoveredPolygonId = e.features[0].id;
    //       map.setFeatureState(
    //         { source: 'states', sourceLayer: 'albersusa', id: hoveredPolygonId },
    //         { hover: true }
    //       );
    //     }
    //   });

    //   map?.on('mouseleave', 'state-fills', () => {
    //     if (hoveredPolygonId !== undefined) {
    //       map?.setFeatureState(
    //         { source: 'states', id: hoveredPolygonId },
    //         { hover: false }
    //       );
    //       hoveredPolygonId = undefined
    //     }
    //   });
  }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleMapClick(e: any) {
    const features = map?.queryRenderedFeatures(e.point);
    const feature = _.find(features, (item) => item.sourceLayer == 'albersusa')
    console.log(feature)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (feature) {
      setFeature(feature)
    } else {
      setFeature(undefined)
    }

  }

  function mapOnLoad() {
    map?.on('load', () => {
      handleMapHovering()
      addSelectedStates()
      map?.on("moveend", (e) => console.log(map?.getZoom(), map?.getBounds(), map?.getCenter()))
      map?.on('click', 'states', (e) => handleMapClick(e))
    })
  }

  function addSelectedStates() {
    for (const state of stateStore.states) {
      map?.setFeatureState({
        source: 'composite',
        sourceLayer: 'albersusa',
        id: state.id,
      }, {
        clicked: true,
        stateColor: _.find(userStore.users, (user: User) => user.name === state.userId)?.color
      });
    }
  }

  useEffect(() => {
    if (feature?.id && activeUser) {
      if (!feature?.state.clicked) {
        stateStore.addState({ state: { name: feature.properties?.state_name, id: feature.id, userId: activeUser.name } as State })
      } else {
        stateStore.removeState({ id: feature.id })
      }
      map?.setFeatureState({
        source: 'composite',
        sourceLayer: 'albersusa',
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
      dragRotate: false,
      projection: 'mercator' as unknown as Projection,
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
    userStore.clearUsers()
    stateStore.clearStates({ map })
    setActiveUser(null)

  }
  return (
    <>
      <Button onClick={() => clearData()} label="Clear Data" className="bg-blue-500 text-white" />
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