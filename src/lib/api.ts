import axios from "axios"
import { Inputs } from "./types"

//TODO cretae the inputs interface

export const postLoginData = async (formData: Inputs) => {
  return await axios.post("http://localhost:5000/auth/signin", formData)
}
export const Logout = async () => {
  return await axios.post("http://localhost:5000/auth/signout")
}
export const getAllProjects = async (headers) => {
  return await axios
    .get("http://localhost:5000/api/projects", {
      headers: headers,
    })
    .then((response) => {
      console.log(response)
      return response.data
    })
    .catch((e) => {
      console.log(e)
    })
}
export const getTeams = async (headers) => {
  return await axios
    .get("http://localhost:5000/api/teams", {
      headers: headers,
    })
    .then((response) => {
      console.log(response.data.teams)
      return response.data.teams
    })
    .catch((e) => {
      console.log(e)
    })
}
