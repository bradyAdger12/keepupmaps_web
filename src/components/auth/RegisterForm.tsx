import { useContext, useState } from 'react'
import { AuthContext } from '../../stores/stores'
import { observer } from "mobx-react-lite"
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import {
  useMutation,
} from '@tanstack/react-query'
import { Message } from 'primereact/message'
import SpinningLoading from '../tools/SpinningLoading'
const RegisterForm = observer(() => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    if (emailValid && passwordValid) {
      handleRegisterMutation.mutate()
    }
  }

  const handleRegisterMutation = useMutation({
    mutationFn: () => auth.register(email, password),
    onSuccess: () => { 
      navigate("/")
    }
  })

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
    // Don't set invalid on empty
    if (!email || validator.isEmail(e.currentTarget.value)) {
      setEmailValid(true)
    } else {
      setEmailValid(false)
    }
  }

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
    // Don't set invalid on empty
    if (!password || e.currentTarget.value.length >= 6) {
      setPasswordValid(true)
    } else {
      setPasswordValid(false)
    }
  }

  return (
    <div  className="flex flex-col items-center">
      <div>
        <h1 className="text-h1 font-bold mb-5">Register</h1>
      </div>

      <div style={{marginTop: '1em'}}>
        <input className="input" placeholder="Email" value={email} onChange={handleEmailChange} />
      </div>
      
      <div style={{marginTop: '1em'}}>
        <input type="password" className="input" placeholder="Password" value={password} onChange={handlePasswordChange} onKeyUp={(e) => {if(e.key === 'Enter'){handleRegister()}}} />
      </div>

      { handleRegisterMutation.isError && 
        <div style={{marginTop: '1em'}}>
          <Message severity="error" text={(handleRegisterMutation.error as Error).message} />
        </div>
      }

      <div className='mt-8'>
        <button className="btn btn-primary" onClick={handleRegister} disabled={handleRegisterMutation.isLoading || !email || !password || !emailValid}>
          Register { handleRegisterMutation.isLoading && <SpinningLoading /> }
        </button>
      </div>
    </div>
  )
})

export default RegisterForm
