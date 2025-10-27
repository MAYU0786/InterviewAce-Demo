"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ProfileSelection() {
  const [role, setRole] = useState("")
  const [organization, setOrganization] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (!role || !organization) {
      alert("Please fill all fields!")
      return
    }

    localStorage.setItem("role", role)
    localStorage.setItem("organization", organization)

    navigate("/dashboard")
  }

  return (
    <div className="form-card">
      <h3>Select Your Role</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Role</label>
          <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">-- Select Role --</option>
            <option value="student">Student</option>
            <option value="interviewer">Interviewer</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">College/Company Name</label>
          <input
            type="text"
            className="form-control"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Enter your organization"
            required
          />
        </div>

        <button type="submit" className="btn btn-info">
          Continue
        </button>
      </form>
    </div>
  )
}

export default ProfileSelection
