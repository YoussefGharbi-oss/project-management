import { useContext } from "react"
import { Draw } from "../assets/Draw"
import { LoginForm } from "../components/Forms/loginForm"
import { AuthContext } from "../context/AuthContext"

export const Login = () => {
  const { isLoading } = useContext(AuthContext)
  return (
    <main className="flex p-4 mt-32 items-center  justify-center gap-24">
      {isLoading ? (
        <div>Loading ....</div>
      ) : (
        <div className="flex">
          <div className="flex flex-col justify-center items-center">
            <h1 className="  text-4xl lg:text-6xl text-center"> Account Login</h1>
            <LoginForm />
          </div>
          <Draw />
        </div>
      )}
    </main>
  )
}
