import React from "react"
import { Navigate } from "react-router-dom"

export const ProtectedRoutes: React.FC = ({ isAuth, children, route }) => {
  console.log(isAuth)
  if (!isAuth) {
    return <Navigate to={`/${route}`} replace />
  }
  return children
}
