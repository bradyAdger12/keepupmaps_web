import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { useState, useRef } from "react";
import { ContactContext } from "../stores/stores"
import { AuthContext } from "../stores/stores"
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button';
import validator from 'validator'
import { Toast } from 'primereact/toast';
import { useMutation } from "@tanstack/react-query";

const ContactPage = observer(() => {
  const contact = useContext(ContactContext)
  const auth = useContext(AuthContext)
  const toast = useRef<Toast>(null)
  const [name, setName] = useState(auth.user?.display_name || '')
  const [email, setEmail] = useState(auth.user?.email || '')
  const [emailValid, setEmailValid] = useState(true)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
      submitContactForm.mutate()
  }

  const submitContactForm = useMutation({
    mutationFn: () => contact.submitContactForm(name, email, message),
    onSuccess: () => {
      toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Your message has been delivered!' })
      setSubmitted(true)
    }, 
    onError: (error) => toast.current?.show({ severity: 'error', summary: 'Error', detail: error!.toString() })
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

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
        <Toast ref={toast} position="top-center" />
        <div>
          <h1>Contact</h1>
        </div>

        <div style={{marginTop: '1em'}}></div>
        <InputText placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} readOnly={submitted} />

        <div style={{marginTop: '1em'}}></div>
        <InputText className={emailValid ? '' : 'p-invalid'} placeholder="Email" value={email} onChange={handleEmailChange} readOnly={submitted} />

        <div style={{marginTop: '1em'}}></div>
        <InputTextarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} cols={30} readOnly={submitted} />

        <div style={{marginTop: '1em'}}>
          <Button style={{backgroundColor: 'var(--primary-color)'}} label="Submit" onClick={handleSubmit} disabled={submitContactForm.isLoading || !email || !message || !emailValid || submitted} loading={submitContactForm.isLoading} />  
        </div>

      </div>
    </>
  )
})

export default ContactPage
