import { useContext, useState } from 'react'
import { AuthContext } from '../../stores/stores'
import { observer } from "mobx-react-lite"
import {
  useMutation,
} from '@tanstack/react-query'

import { Button } from 'primereact/button'
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext'

const ForgotPasswordForm = observer(() => {
  const auth = useContext(AuthContext)

  const [email, setEmail] = useState('')

  const requestResetEmail = async () => {
    await requestResetEmailMutation.mutateAsync()
  }

  const requestResetEmailMutation = useMutation({
    mutationFn: () => auth.sendPasswordResetEmail(email),
  })

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div>
        <h1>Request Password Reset Link</h1>
      </div>

      <div style={{marginTop: '1em'}}>
        <InputText placeholder="Email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} readOnly={requestResetEmailMutation.isSuccess} onKeyUp={(e) => {if(e.key === 'Enter'){requestResetEmail()}}} />
      </div>

      { requestResetEmailMutation.isError && 
        <div style={{marginTop: '1em'}}>
          <Message severity="error" text={(requestResetEmailMutation.error as Error).message} />
        </div>
      }

      { requestResetEmailMutation.isSuccess && 
        <div style={{marginTop: '1em'}}>
          <Message severity="success" text="Password reset email sent." />
        </div>
      }

      { !requestResetEmailMutation.isSuccess &&
        <div style={{marginTop: '1em'}}>
          <Button style={{backgroundColor: 'var(--primary-color)'}} label="Submit" onClick={requestResetEmail} disabled={requestResetEmailMutation.isLoading} loading={requestResetEmailMutation.isLoading} />  
        </div>
      }
    </div>
  )
})

export default ForgotPasswordForm
