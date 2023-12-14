import { observer } from "mobx-react-lite";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useContext, useEffect, useState } from "react";
import { StateContext, UserContext } from "../../stores/stores";
import { User } from "../../stores/users";
import { Dropdown } from "primereact/dropdown";
import _ from 'lodash'
import { colors } from "../../lib/Constants";
const UserAdmin = observer(({ onUserSelected }: { onUserSelected: (arg0: User | null) => void }) => {
  const userStore = useContext(UserContext)
  const stateStore = useContext(StateContext)
  const [userInputText, setUserInputText] = useState('')
  const [colorInput, setColorInput] = useState<string | null>()
  const [users, setUsers] = useState(userStore.users)
  const [selectedUser, setSelectedUser] = useState<User | null>(users?.length > 0 ? users[0] : null)
  function addUser() {
    if (_.find(userStore.users, (user: User) => user.name.toLowerCase() === userInputText.toLowerCase() || user.color === colorInput)) {
      return
    }
    if (userInputText && colorInput) {
      const user = new User()
      user.name = userInputText
      user.color = colorInput || 'default'
      userStore.addUser({ user })
      setSelectedUser(user)
      setUserInputText('')
      setColorInput('')
    }
  }
  useEffect(() => {
    onUserSelected(selectedUser)
  }, [selectedUser])
  useEffect(() => {
    setUsers(userStore.users)
  }, [userStore.users])
  const template = (user: User) => {
    if (!user) {
      return <div></div>
    }
    return (
      <div onClick={() => setSelectedUser(user)} className={`cursor-pointer items-center p-3  ${selectedUser?.name === user.name && 'bg-gray-100 rounded-md'}`}>
        <div className="flex justify-between items-center">
          <div className="font-bold" style={{ fontSize: 30 }}>{user.name}</div>
          <div className="rounded-md" style={{ backgroundColor: user.color, width: 30, height: 30 }} />
        </div>
        <div className="flex flex-wrap">
          {stateStore.states.map((item, index) => <div>{item.name}{index !== stateStore.states.length - 1 && ', '}</div>)}
        </div>
      </div>
    )
  }
  return (
    <>
      <div>
        <div className="flex">
          <div className="p-inputgroup flex-1">
            <InputText placeholder="Enter user here" className="border-solid border-2 pl-2" value={userInputText} onChange={e => setUserInputText(e.target.value)} onKeyUp={e => e.key === 'Enter' && addUser()} />
            <Button className="rounded-l-none bg-blue-300 text-white" label="Add New User" onClick={addUser} />
          </div>
        </div>
        {userInputText && <div className="mt-6">
          <label>
            Please select a color
          </label>

          <Dropdown value={colorInput} onChange={(e) => setColorInput(e.target.value)} options={Object.keys(colors).filter((item) => !_.find(users, (user) => user.color === item))} valueTemplate={(e) => <div className="flex justify-between"><div>{e}</div><div className="rounded-sm" style={{ backgroundColor: colors[e], width: 20, height: 20 }}></div></div>} itemTemplate={(e) => <div className="flex justify-between"><div>{e}</div><div className="rounded-sm" style={{ backgroundColor: colors[e], width: 20, height: 20 }}></div></div>}
            placeholder="Please select a color" className="w-full md:w-14rem border-2 mt-2" />
        </div>
        }
        <div className="mt-10">
          {users && users.length > 0 && users.map((item) => template(item))}
        </div>
      </div>

    </>)
})

export default UserAdmin