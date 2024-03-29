import { observer } from "mobx-react-lite"

import { Toolbar } from 'primereact/toolbar'
import { Link } from 'react-router-dom'
import { PropsWithChildren, useContext } from "react"
import { AuthContext } from "../stores/stores"
import { Button } from "primereact/button"

const RootLayout: React.FC<PropsWithChildren> = observer(({ children }) => {
  const auth = useContext(AuthContext)
  const toolbarStart = (
    <>
      <img src="/src/assets/keepup_maps_logo.png" style={{ width: 50, borderRadius: 10, marginRight: 10 }}/>
      <Link to={`/`} className="font-bold">KeepUp Maps</Link>
    </>
  )
  const toolbarEnd = (
    <>
    {/* <Link to={`/contact`} style={{marginRight: 25}}>Contact</Link> */}
    {
      auth.isAuthenticated ?
        <>
          <Button className="text-white" style={{backgroundColor: 'var(--primary-color)'}} label="Logout" onClick={() => auth.logout()} />
          <Link style={{ marginLeft: 25 }} to={`me/profile`}>Profile</Link>
        </>
        :
        location.pathname !== '/auth/login' ? <Link to={`auth/login`}>Login</Link> : <div></div>
    }
    </>
  )

  return (
    <>
      <Toolbar className="app-toolbar" style={{width: '100%'}} start={toolbarStart} end={toolbarEnd} />
      <div id="detail" className="bg-white h-screen">
          { children }
      </div>
    </>
  );
})

export default RootLayout
