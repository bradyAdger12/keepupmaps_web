import { observer } from "mobx-react-lite";
import MapboxMap from "../components/map/MapboxMap";
import { useParams } from "react-router-dom";

const MapPage = observer(() => {
  const { map_id } = useParams() as { map_id: string }
  return (
  <>
    <MapboxMap key={map_id} />
  </>
  )
})

export default MapPage