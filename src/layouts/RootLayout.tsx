import { Outlet } from "react-router-dom"
import { observer } from "mobx-react-lite"

import { Toolbar } from 'primereact/toolbar'
import { Link } from 'react-router-dom'

const RootLayout = observer(() => {

  const toolbarStart = (
    <>
      <Link to={`/`}>KeepUp Maps</Link>
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
