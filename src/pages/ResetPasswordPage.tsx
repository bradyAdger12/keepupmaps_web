import { useContext, useState, useEffect } from 'react'
import { observer } from "mobx-react-lite"
import { AuthContext } from '../stores/stores'
import { useParams, useNavigate } from 'react-router-dom'
import validator from 'validator'
import {
  useMutation,
} from '@tanstack/react-query'

import { Message } from 'primereact/message'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'

const ResetPasswordPage = observer(() => {
  const auth = useContext(AuthContext)
  const { code } = useParams() as { code: string }
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)
  const [password, setPassword] = useState('')

  const handleCompletePasswordResetMutation = useMutation({
    mutationFn: () => auth.resetPassword(code, email, password),
  })

  const handleCompletePasswordReset = async () => {
    if (passwordValid) {
      await handleCompletePasswordResetMutation.mutateAsync()
    }
  }

  useEffect(() => {
    if (handleCompletePasswordResetMutation.isSuccess) {
      navigate("/auth/login")
    }
  }, [handleCompletePasswordResetMutation])

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
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div>
        <h1>Reset Password</h1>
      </div>

      <div style={{marginTop: '1em'}}>
        <InputText className={emailValid ? '' : 'p-invalid'} placeholder="Email" value={email} onChange={handleEmailChange} />
      </div>
      
      <div style={{marginTop: '1em'}}>
        <Password className={passwordValid ? '' : 'p-invalid'} placeholder="Password" value={password} onChange={handlePasswordChange} feedback={false} onKeyUp={(e) => {if(e.key === 'Enter'){handleCompletePasswordReset()}}} />
      </div>

      { handleCompletePasswordResetMutation.isError && 
        <div style={{marginTop: '1em'}}>
          <Message severity="error" text={(handleCompletePasswordResetMutation.error as Error).message} />
        </div>
      }

      <div style={{marginTop: '1em'}}>
        <Button style={{backgroundColor: 'var(--primary-color)'}} label="Complete Password Reset" onClick={handleCompletePasswordReset} disabled={handleCompletePasswordResetMutation.isLoading || !email || !password} loading={handleCompletePasswordResetMutation.isLoading} />  
      </div>

    </div>
  )
})

export default ResetPasswordPage
