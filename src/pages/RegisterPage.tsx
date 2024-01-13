import RegisterForm from "../components/auth/RegisterForm"

export default function RegisterPage() {
  return (
    <>
      <div className="h-screen flex justify-evenly items-center">
        <div className="w-4/12"><img src="/src/assets/keepup_maps_logo.png" /></div>
        <div className="card bg-white w-5/12 p-10 py-40 flex flex-col">
          <RegisterForm />
        </div>
      </div>
    </>
  )
}
