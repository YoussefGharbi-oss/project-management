import { LoginForm } from "../components/Forms/loginForm"

export const Login = () => {
  return (
    <main className="flex  flex-col ">
      <h1 className="  text-4xl"> Account Login</h1>
      <p className="text-gray-400">
        If you are already a member you can login with your email address and
        password.
      </p>

      <LoginForm />
    </main>
  )
}
