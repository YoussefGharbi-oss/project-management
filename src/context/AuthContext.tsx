import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currUser, setCurrUser] = useState({})

  const logout = () => {
    setIsAuthenticated(false)
  }
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated")
    const storedUser = localStorage.getItem("user")

    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth))
    }
    if (storedUser) {
      setCurrUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated))
    localStorage.setItem("user", JSON.stringify(currUser))
  }, [isAuthenticated, currUser])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout, currUser, setCurrUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
