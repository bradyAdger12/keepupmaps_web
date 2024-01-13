import { Link } from "react-router-dom"
import LoginForm from "../components/auth/LoginForm"

export default function LoginPage() {
  return (
    <div className="h-screen flex justify-evenly items-center">
      <div className="w-4/12"><img src="/src/assets/keepup_maps_logo.png" /></div>
      <div className="card bg-white w-5/12 p-10 py-40 flex flex-col">
        <div>
          <LoginForm />
          <div style={{ textAlign: 'center', marginTop: '1em' }}>
            <Link to='/auth/register'>Register</Link> |&nbsp;
            <Link to='/auth/forgot'>Forgot Password</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
