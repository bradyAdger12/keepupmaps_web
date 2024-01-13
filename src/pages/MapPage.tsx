import { observer } from "mobx-react-lite";
import MapboxMap from "../components/map/MapboxMap";

const MapPage = observer(() => {
  return (
  <>
    <MapboxMap />
  </>
  )
})

export default MapPage