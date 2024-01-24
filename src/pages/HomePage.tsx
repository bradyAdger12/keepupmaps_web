import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { AuthContext } from "../stores/stores"
import MapsList from "../components/map/MapsList"
import { Helmet } from 'react-helmet'

const HomePage = observer(() => {
  const auth = useContext(AuthContext)
  return (
    <>
      <Helmet>
        <title>{document.title} - Home</title>
      </Helmet>
      {auth.isAuthenticated ? <MapsList /> :
        <div className="flex gap-x-20">
          <div>
            <h3 className="font-bold">
              Login/Register to create your first map today!
            </h3>
          </div>
        </div>
      }
    </>
  )
})

export default HomePage
