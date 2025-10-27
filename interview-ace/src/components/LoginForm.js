"use client"

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function LoginForm() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setLoginDetails((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const res = await axios.post("http://localhost:8080/login", {
        username: loginDetails.username,
        password: loginDetails.password,
      })

      alert("Login successful!")
      console.log(res.data)

      localStorage.setItem("loggedInUser", JSON.stringify(res.data))

      navigate("/profile")
    } catch (err) {
      console.error(err)
      alert("Login failed! Invalid credentials.")
    }
  }

  return (
    <div className="form-card">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            name="username"
            type="text"
            value={loginDetails.username}
            className="form-control"
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            value={loginDetails.password}
            className="form-control"
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
