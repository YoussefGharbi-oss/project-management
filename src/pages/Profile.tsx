import { useContext } from "react"
import { Header } from "../components/Forms/nav/Header"
import { Sidebar } from "../components/Forms/nav/Sidebar"
import { AuthContext } from "../context/AuthContext"

export const Profile = () => {
  const { currUser } = useContext(AuthContext)

  return (
    <main>
      <Sidebar />
      <Header name={currUser.user.name} />
    </main>
  )
}
