// import { useContext } from 'react'
// import { AuthContext } from '../stores/stores'
import { observer } from "mobx-react-lite"
import MapboxMap from '../components/map/MapboxMap'

const HomePage = observer(() => {
  // const auth = useContext(AuthContext)
  return (
    <>
      <MapboxMap />
    </>
  )
})

export default HomePage
