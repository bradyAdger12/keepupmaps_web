import { observer } from "mobx-react-lite"
import { useContext, useState, useRef } from "react"
import { AuthContext } from "../../stores/stores"
import { Image } from 'primereact/image'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast';
import { FileUpload, FileUploadSelectEvent } from 'primereact/fileupload';
import { useMutation } from "@tanstack/react-query"

const UserProfilePhotoPicker = observer(() => {
  const auth = useContext(AuthContext)
  const toast = useRef<Toast>(null)
  const [image64, setImage64] = useState<string | null>(null)
  const [profilePic, setProfilePic] = useState<File | null>(null)

  function photoCleared () {
    setImage64(null)
    setProfilePic(null)
  }

  const save = useMutation({
    mutationFn: () => auth.updateProfilePicture(profilePic!),
    onSuccess: () => toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'You have successfully added a profile picture' }),
    onError: (error) => toast.current?.show({ severity: 'error', summary: 'Error', detail: error!.toString() })
  })
  const removePhoto = useMutation({
    mutationFn: () => auth.removeProfilePicture(),
    onSuccess: () =>  { toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'You have successfully removed your profile picture' }); photoCleared() } ,
    onError: (error) => toast.current?.show({ severity: 'error', summary: 'Error', detail: error!.toString() })
  })

  function resetPhoto () {
    photoCleared()
  }

  const photoSelected  = async (e: FileUploadSelectEvent) => {
    const file = e.files[0]
    if (file) {
      setProfilePic(file)
      setImage64(await getBase64(file))
    } else {
      photoCleared()
    }
  }

  function getBase64 (file: File) : Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }
  return (
    <>
      <Toast ref={toast} position="top-center" />
      {
        auth.user && auth.user.avatar_file_key && !image64 && 
        <div>
          <Image src={auth.userAvatarKeyToUrl(auth.user.avatar_file_key)} alt="Image" width="200" />
        </div>
      }
      {
        !auth.user?.avatar_file_key && <div> No Profile Picture </div>
      }
      {
        image64 && <Image src={image64} alt="Image" width="200" />
      }
      {
        !image64 && !auth.user?.avatar_file_key && <FileUpload style={{ marginTop: 10 }} mode="basic" auto accept="image/*" maxFileSize={1000000} multiple={false} onSelect={photoSelected} />
      }
      {
        profilePic &&
        <div>
          <Button label="Save" style={{ backgroundColor: 'var(--primary-color)', marginRight: 10 }} onClick={() => save.mutate()} loading={save.isLoading} />
          <Button label="Reset" style={{ backgroundColor: 'var(--primary-color)' }} disabled={save.isLoading} onClick={resetPhoto} />
        </div>
      }
      {
        auth.user?.avatar_file_key && <Button label="Remove" style={{ backgroundColor: 'var(--red-500)', marginTop: 5 }} disabled={removePhoto.isLoading} onClick={() => removePhoto.mutate() } />
      }
    </>
  )
})
export default UserProfilePhotoPicker