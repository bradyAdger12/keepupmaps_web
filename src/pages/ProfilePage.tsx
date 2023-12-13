import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react"
import { useState, useRef } from "react";
import { AuthContext } from "../stores/stores"
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { useMutation } from "@tanstack/react-query";
import UserProfilePhotoPicker from "../components/UserProfilePhotoPIcker";

const ProfilePage = observer(() => {
  const auth = useContext(AuthContext)
  const toast = useRef<Toast>(null);
  const navigate = useNavigate()
  const [displayName, setDisplayName] = useState(auth.user?.display_name || '')
  const [email, setEmail] = useState('')
  const [changeEmailPassword, setChangeEmailPassword] = useState('')
  const [displayNameChanged, setDisplayNameChanged] = useState(false)
  const [emailChanged, setEmailChanged] = useState(false)
  const [showChangePasswordDialog, setShowChangePasswordDialog] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [showDestroyAccountDialog, setShowDestroyAccountDialog] = useState(false)
  const [destroyPassword, setDestroyPassword] = useState('')

  useEffect(() => {
    setDisplayNameChanged(displayName !== auth.user?.display_name)
  }, [ displayName, auth.user?.display_name ])

  useEffect(() => {
    setEmailChanged(email !== auth.user?.email)
  }, [ email, auth.user?.email ])


  const destroyAccount = useMutation({
    mutationFn: () => auth.destroyUser(destroyPassword),
    onSuccess: () => navigate('/'), 
    onError: (error) => toast.current?.show({ severity: 'error', summary: 'Error', detail: error!.toString() })
  })

  const updateDisplayName = useMutation({
    mutationFn: () =>  auth.updateDisplayName(displayName),
    onSuccess: () => toast.current?.show({ severity: 'success', summary: 'Success', detail: 'You have successfully updated your display name' }), 
    onError: (error) => toast.current?.show({ severity: 'error', summary: 'Error', detail: error!.toString() })
  })

  const changePassword = useMutation({
    mutationFn: () =>  auth.changePassword(oldPassword, newPassword),
    onSuccess: () => { navigate('/auth/login'); setShowChangePasswordDialog(false) }, 
    onError: (error) => toast.current?.show({ severity: 'error', summary: 'Error', detail: error!.toString() })
  })

  const changeEmail = useMutation({
    mutationFn: () => auth.changeEmail(email, changeEmailPassword),
    onSuccess: () => toast.current?.show({ severity: 'success', summary: 'Success', detail: 'You have successfully changed your email' }),
    onError: (error) => toast.current?.show({ severity: 'error', summary: 'Error', detail: error!.toString() })
  })

  return (
    <>
      {
        auth.isAuthenticated ?
          <div style={{marginTop: '1em'}}>
            <div>
              <Toast ref={toast} position="top-center" />
              <h2 className="text-h1">Profile</h2>
              <InputText style={{ marginTop: 20 }} value={displayName} placeholder="Display Name" onChange={(e) => setDisplayName(e.target.value)} />
              <Button style={{backgroundColor: 'var(--primary-color)', marginLeft: 5 }} label="Save" loading={updateDisplayName.isLoading} onClick={() => updateDisplayName.mutate()} disabled={updateDisplayName.isLoading || !displayNameChanged} />
              <div style={{ marginTop: 20 }}>
                <h4>
                  Change Email
                </h4>
                <InputText value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Password style={{ marginLeft: 20 }} value={changeEmailPassword} placeholder="Password (Required to Change Email)" onChange={(e) => setChangeEmailPassword(e.target.value)} />
                <Button style={{backgroundColor: 'var(--primary-color)', marginLeft: 5}} label="Save" onClick={() => changeEmail.mutate()} loading={changeEmail.isLoading} disabled={changeEmail.isLoading || !emailChanged || !email || !changeEmailPassword} />
              </div>
              <div style={{marginTop: 30}}>
                <h4>Profile Picture</h4>
                <UserProfilePhotoPicker />
              </div>
              <div>
                <Button style={{backgroundColor: 'var(--primary-color)', marginTop: 35 }} label="Change Password" onClick={() => setShowChangePasswordDialog(true)} />
                <Dialog header="Change Password" visible={showChangePasswordDialog} style={{ width: '50vw' }} onHide={() => setShowChangePasswordDialog(false)} dismissableMask={true}>
                  <div>
                    <Password value={oldPassword} placeholder="Old Password" onChange={(e) => setOldPassword(e.target.value)} toggleMask />
                  </div>
                  <div>
                    <Password value={newPassword} placeholder="New Password" onKeyUp={(e) => e.key === 'Enter' ? changePassword.mutate() : null} onChange={(e) => setNewPassword(e.target.value)} toggleMask />
                  </div>
                  <div>
                  <Button style={{backgroundColor: 'var(--primary-color)', marginTop: 10}} label="Save" onClick={() => changePassword.mutate()} loading={changePassword.isLoading} disabled={changePassword.isLoading} />
                  </div>
                </Dialog>
              </div>
              <div style={{ marginTop: 30 }}>
                <h4>Danger Zone</h4>
                <Button style={{backgroundColor: 'var(--red-500)',marginTop: 5 }} label="Destroy Account" onClick={() => setShowDestroyAccountDialog(true)} />
                <Dialog header="Destroy Account" visible={showDestroyAccountDialog} style={{ width: '50vw' }} onHide={() => setShowDestroyAccountDialog(false)} dismissableMask={true}>
                  <div>
                    <p>
                      Your AppName account and all the data it contains will be permanently destroyed.
                    </p>
                    <Password value={destroyPassword} placeholder="Password" onChange={(e) => setDestroyPassword(e.target.value)} toggleMask />
                  </div>
                  <div>
                  <Button style={{backgroundColor: 'var(--red-500)', marginTop: 10}} label="Destroy Account" onClick={() => destroyAccount.mutate()} loading={destroyAccount.isLoading} disabled={destroyAccount.isLoading} />
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
        : <div></div>
      }
    </>
  )
})

export default ProfilePage
