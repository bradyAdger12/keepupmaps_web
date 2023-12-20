import { Outlet, useLocation } from "react-router-dom"
import { AuthContext } from '../stores/stores'
import { useContext } from 'react'
import { observer } from "mobx-react-lite"

import { Toolbar } from 'primereact/toolbar'
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button'

const RootLayout = observer(() => {
  const auth = useContext(AuthContext)
  const location = useLocation()

  const toolbarStart = (
    <>
      <Link to={`/`}>Mapbox - US</Link>
    </>
  )
  const toolbarEnd = (
    <>
    {/* <Link to={`/contact`} style={{marginRight: 25}}>Contact</Link> */}
    {/* {
      auth.isAuthenticated ?
        <>
          <Button style={{backgroundColor: 'var(--primary-color)'}} label="Logout" onClick={() => auth.logout()} />
          <Link style={{ marginLeft: 25 }} to={`me/profile`}>Profile</Link>
        </>
        :
        location.pathname !== '/auth/login' ? <Link to={`auth/login`}>Login</Link> : <div></div>
    } */}
    </>
  )

  return (
    <>
      <Toolbar className="app-toolbar" style={{width: '100%'}} start={toolbarStart} end={toolbarEnd} />
      <div id="detail">
          <Outlet />
      </div>
    </>
  );
})

export default RootLayout
