import axios from "axios"
import { Inputs } from "./types"

//TODO cretae the inputs interface

export const postLoginData = async (formData: Inputs) => {
  return await axios.post("http://localhost:5000/auth/signin", formData)
}
export const Logout = async () => {
  return await axios.post("http://localhost:5000/auth/signout")
}
