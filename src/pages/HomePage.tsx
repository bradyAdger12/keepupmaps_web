// import { useContext } from 'react'
// import { AuthContext } from '../stores/stores'
import { observer } from "mobx-react-lite"
import MapboxMap from '../components/map/MapboxMap'
import { useContext } from "react"
import { AuthContext } from "../stores/stores"

const HomePage = observer(() => {
  const auth = useContext(AuthContext)
  return (
    <>
      {auth.isAuthenticated ? <MapboxMap /> : 
      <div>
        Login to get started
      </div> 
      }
    </>
  )
})

export default HomePage
