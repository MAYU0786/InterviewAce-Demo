"use client"

import { useState } from "react"
import axios from "axios"

function SignupForm() {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })

  function updateDetails(event) {
    const { name, value } = event.target
    setSignupDetails((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (signupDetails.password !== signupDetails.confirmPassword) {
      alert("Passwords do not match.")
      return
    }

    try {
      const res = await axios.post("http://localhost:8080/signup", {
        email: signupDetails.email,
        username: signupDetails.username,
        password: signupDetails.password,
      })

      alert("Signup successful!")
      console.log(res.data)
    } catch (err) {
      console.error(err)
      alert("Signup failed! Try again.")
    }
  }

  return (
    <div className="form-card">
      <h3>Create Account</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            name="email"
            type="email"
            value={signupDetails.email}
            className="form-control"
            onChange={updateDetails}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            name="username"
            type="text"
            value={signupDetails.username}
            className="form-control"
            onChange={updateDetails}
            placeholder="Choose a username"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            value={signupDetails.password}
            className="form-control"
            onChange={updateDetails}
            placeholder="Create a password"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={signupDetails.confirmPassword}
            className="form-control"
            onChange={updateDetails}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
