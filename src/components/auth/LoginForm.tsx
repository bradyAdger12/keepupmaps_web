import { useContext, useState } from 'react'
import { AuthContext } from '../../stores/stores'
import { observer } from "mobx-react-lite"
import { useNavigate } from 'react-router-dom'
import {
  useMutation,
} from '@tanstack/react-query'

import { Button } from 'primereact/button'
import { Message } from 'primereact/message';

const LoginForm = observer(() => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginMutation = useMutation({
    mutationFn: () => auth.login(email, password),
    onSuccess: () => {
      navigate('/')
    }
  })

  const handleLogin = () => {
    handleLoginMutation.mutate()
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-h1 font-bold mb-5">Login</h1>
      </div>

      <div style={{marginTop: '1em'}}>
        <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
      </div>
      
      <div style={{marginTop: '1em'}}>
        <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={(e) => {if(e.key === 'Enter'){handleLogin()}}} />
      </div>

      { handleLoginMutation.isError && 
        <div style={{marginTop: '1em'}}>
          <Message severity="error" text={(handleLoginMutation.error as Error).message} />
        </div>
      }

      <div className="mt-10">
        <Button style={{backgroundColor: 'var(--primary-color)'}} label="Login" onClick={handleLogin} disabled={handleLoginMutation.isLoading} loading={handleLoginMutation.isLoading} />  
      </div>
    </div>
  )
})

export default LoginForm
