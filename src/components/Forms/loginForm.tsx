import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../context/AuthContext"
import { postLoginData } from "../../lib/api"
import { Inputs } from "../../lib/types"
export const LoginForm = () => {
  const { setIsAuthenticated, setCurrUser } = useContext(AuthContext)
  const Navigate = useNavigate()
  const {
    register,

    formState: { errors },
  } = useForm<Inputs>()
  const [formData, setFormData] = useState<Inputs>({
    username: "",
    password: "",
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    postLoginData(formData).then((response) => {
      setIsAuthenticated(true)
      setCurrUser(response.data)

      Navigate("/home")
    })
  }

  return (
    <form
      action=""
      className="flex flex-col gap-12 mt-12  justify-center align-middle items-center w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-12">
        <label>Username</label>
        <input
          type="text"
          value={formData.username}
          {...register("username", {
            required: "Username is required",
          })}
          onChange={handleChange}
          className="border-2 rounded-lg border-gray"
        />
        {errors.username ? <p>{errors.username.message}</p> : null}
      </div>
      <div className="flex gap-12">
        <label>Password</label>
        <input
          type="password"
          {...register("password")}
          value={formData.password}
          onChange={handleChange}
          className="border-2 rounded-lg border-gray"
        />
      </div>
      <button
        className="border-2 p-2 w-1/2 h-1/2  bg-black text-white rounded-lg mt-5 border-black"
        type="submit"
      >
        Login
      </button>
      <p className="text-gray-400">
        Don't have any account ?{" "}
        <a className="text-blue-400" href="/signup">
          sign Up here
        </a>{" "}
      </p>
    </form>
  )
}
