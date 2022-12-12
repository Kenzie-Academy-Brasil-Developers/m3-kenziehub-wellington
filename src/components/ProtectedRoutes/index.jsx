import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { Navigate } from "react-router-dom"

export const ProtectedRoutes = () => {
  const {user, loading} = useContext(UserContext)
    
  if(loading){
    return null
  }

  return user ? <Outlet /> : < Navigate to ='/' />
}
