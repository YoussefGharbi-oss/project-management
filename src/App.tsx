import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Profile } from "./pages/Profile"
import { ProtectedRoutes } from "./utils/ProtectedRoutes"

function App() {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedRoutes isAuth={isAuthenticated} route={"login"}>
            <Home />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectedRoutes isAuth={!isAuthenticated} route={"home"}>
            <Login />
          </ProtectedRoutes>
        }
      />{" "}
      <Route
        path="/Profile"
        element={
          <ProtectedRoutes isAuth={isAuthenticated} route={"login"}>
            <Profile />
          </ProtectedRoutes>
        }
      />{" "}
    </Routes>
  )
}

export default App
