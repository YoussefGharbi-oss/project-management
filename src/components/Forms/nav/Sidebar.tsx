import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Help } from "../../../assets/icons/Help"
import { Logout } from "../../../assets/icons/Logout"
import { Profile } from "../../../assets/icons/Profile"
import { Settings } from "../../../assets/icons/Settings"
import { WorkSpace } from "../../../assets/icons/WorkSpace"
import { AuthContext } from "../../../context/AuthContext"

export const Sidebar = () => {
  const Navigate = useNavigate()
  const { logout, setIsAuthenticated } = useContext(AuthContext)
  const handleLogout = () => {
    logout()
    setIsAuthenticated(false)
    Navigate("/login")
  }

  return (
    <nav className="  h-screen ">
      <ul className="flex mt-24 flex-col gap-20 p-16 w-min ">
        <li className="flex  mt-4 text-gray-400 text-2xl font-normal hover:text-black gap-6 items-center  ">
          <div className="w-6 h-6">
            <Profile />
          </div>
          <a href="/Profile">Profile</a>
        </li>

        <li className="flex  mt-4 text-gray-400 text-2xl font-normal hover:text-black gap-6 items-center  ">
          <div className="w-6 h-6">
            <WorkSpace />
          </div>
          <a href="/home">MySpace</a>
        </li>

        <li className="flex  mt-4 text-gray-400 text-2xl font-normal hover:text-black gap-6 items-center  ">
          <div className="w-6 h-6">
            <Settings />
          </div>
          <a href="/Profile">Settings</a>
        </li>
        <li className="flex  mt-4 text-gray-400 text-2xl font-normal hover:text-black gap-6 items-center  ">
          <div className="w-6 h-6">
            <Help />
          </div>
          <a href="/Profile">Help</a>
        </li>
        <li
          className="flex  mt-48 text-gray-400 text-2xl font-normal hover:text-black gap-6 items-center  "
          onClick={handleLogout}
        >
          <div className="w-6 h-6">
            <Logout />
          </div>
          <a>Logout</a>
        </li>
      </ul>
    </nav>
  )
}
