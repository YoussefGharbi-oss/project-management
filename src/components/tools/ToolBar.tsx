import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { getTeams } from "../../lib/api"
import { Team } from "../../lib/types"

export const ToolBar = () => {
  const [popup, setPopUp] = useState(false)
  const [toggleNext, setToogleNext] = useState(false)
  const [team, setTeam] = useState<Team[]>([])
  const { currUser } = useContext(AuthContext)
  const headers = {
    Authorization: `Bearer ${currUser.AccessToken}`,
  }
  useEffect(() => {
    const fetchTeams = async () => {
      const data = await getTeams(headers)
      setTeam(data)
    }
    fetchTeams()
  }, [])
  return (
    <div className="flex w-[80%]   justify-between ">
      <div className="flex gap-6 text-gray-500 ml-12 my-2">
        <button className="hover:text-black">projects</button>

        <button className="hover:text-black">Teams</button>
        <button className="hover:text-black">Sprints</button>
      </div>
      <button
        onClick={() => {
          setPopUp(!popup)
        }}
        className="bg-black text-white p-2 my-2 rounded-lg"
      >
        + New Project
      </button>
      {popup && (
        <div className="absolute inset-1/3 m-auto shadow-lg z-10 rounded-xl w-1/3 h-1/2 bg-white ">
          <h1 className="text-center text-2xl font-bold my-8">Create New Project</h1>
          <form action="" className="">
            {!toggleNext && (
              <div className="flex flex-col gap-8 justify-center items-center">
                <input
                  type="text"
                  name="projectName"
                  placeholder="what is Your project Name"
                  className="border-gray-300 w-2/3 border-2 p-2 rounded-lg"
                />
                <input
                  type="Date"
                  name="start-date"
                  className="border-gray-300 w-2/3 border-2 p-2 rounded-lg"
                />
                <input
                  type="Date"
                  name="finish-date"
                  className="border-gray-300 w-2/3 border-2 p-2 rounded-lg"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setToogleNext(true)
                  }}
                  className="bg-black text-white p-2 my-2 rounded-lg w-2/3"
                >
                  Next
                </button>
              </div>
            )}

            {toggleNext && (
              <div className="flex flex-col gap-8 justify-center items-center">
                <h1>Select The Team</h1>
                <select
                  name=""
                  id=""
                  className="border-gray-300 w-2/3 border-2 p-2 rounded-lg"
                >
                  {team.map((e) => {
                    return <option key={e}>{e.name}</option>
                  })}
                </select>
                <button
                  type="submit"
                  className="bg-black text-white p-2 my-2 rounded-lg w-2/3 "
                >
                  Next
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setToogleNext(false)
                  }}
                  className="bg-black text-white p-2 my-2 rounded-lg w-2/3 "
                >
                  back
                </button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  )
}
