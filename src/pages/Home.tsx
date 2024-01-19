import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Home = () => {
  const { logout, setIsAuthenticated } = useContext(AuthContext)
  const Navigate = useNavigate()
  const handleLogout = () => {
    logout()
    setIsAuthenticated(false)
    Navigate("/login")
  }
  return (
    <main>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a>
              <button onClick={handleLogout}>Logout</button>
            </a>
          </li>
        </ul>
      </nav>
      <h1>Home</h1>
      <p>Welcome to the home page! </p>
    </main>
  )
}
