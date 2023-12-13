import { useContext, useEffect } from 'react'
import { observer } from "mobx-react-lite"
import { useParams } from 'react-router-dom'
import { AuthContext } from '../stores/stores'
import {
  useMutation,
} from '@tanstack/react-query'

import { Message } from 'primereact/message';
import { ProgressSpinner } from 'primereact/progressspinner'

const VerifyEmailLandingPage = observer(() => {
  const auth = useContext(AuthContext)
  const { code } = useParams() as { code: string }

  const verifyEmailMutation = useMutation({
    mutationFn: () => auth.verifyEmail(code),
  })

  useEffect(() => {
    // Small kludge to prevent the mutation from firing twice in development
    // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
    const cancelTimout = setTimeout(() => {
      verifyEmailMutation.mutate()
    }, 250)
    return () => clearTimeout(cancelTimout)
  }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div>
        <h1>Email Verification</h1>
      </div>

      { verifyEmailMutation.isLoading &&
        <ProgressSpinner />
      }

      { verifyEmailMutation.isSuccess && 
        <div style={{marginTop: '1em'}}>
          <Message severity="success" text="Your email has been verified." />
        </div>
      }

      { verifyEmailMutation.isError && 
        <div style={{marginTop: '1em'}}>
          <Message severity="error" text={(verifyEmailMutation.error as Error).message} />
        </div>
      }
    </div>
  )
})

export default VerifyEmailLandingPage
