import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { AuthContext } from "../stores/stores"
import MapsList from "../components/map/MapsList"

const HomePage = observer(() => {
  const auth = useContext(AuthContext)
  return (
    <>
      {auth.isAuthenticated ? <MapsList /> : 
      <div>
        Login to get started
      </div> 
      }
    </>
  )
})

export default HomePage
