import { useContext, useEffect, useState } from "react"
import { Header } from "../components/Forms/nav/Header"
import { Sidebar } from "../components/Forms/nav/Sidebar"
import { ProjectCard } from "../components/cards/ProjectCard"
import { SpinLoader } from "../components/loaders/SpinLoader"
import { ToolBar } from "../components/tools/ToolBar"
import { AuthContext } from "../context/AuthContext"
import { getAllProjects } from "../lib/api"
import { Project } from "../lib/types"

export const Home = () => {
  const { currUser } = useContext(AuthContext)
  const [data, setData] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const headers = {
    Authorization: `Bearer ${currUser.AccessToken}`,
  }
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await getAllProjects(headers)
        console.log(data)
        setData(data)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }
    fetchdata()
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <main className=" relative  overflow-hidden grid  grid-cols-7">
      <Sidebar />
      <div className="bg-gray-50 w-screen    h-screen">
        <Header name={currUser.user.username} />
        <ToolBar />
        <hr />
        {loading && (
          <div className="flex justify-center items-center mt-64">
            <SpinLoader />
          </div>
        )}
        <div className="flex gap-12 flex-wrap ml-24 my-12 ">
          {data &&
            data.map((e) => {
              return (
                <ProjectCard
                  projectId={e?.projectId}
                  projectName={e?.projectName}
                  teamName={e?.team.name}
                  startedAt={e?.startedAt}
                  finishedAt={e?.finishedAt}
                />
              )
            })}
        </div>
      </div>
    </main>
  )
}
