"use client"

import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    setIsLoggedIn(!!loggedInUser)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser")
    setIsLoggedIn(false)
    navigate("/")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          
           InterviewAce
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="nav-links-container">
            <Link className="nav-link nav-link-home" to="/">
               Home
            </Link>

            {!isLoggedIn ? (
              <>
                <Link className="nav-link nav-link-signup" to="/signup">
                   Signup
                </Link>
                <Link className="nav-link nav-link-login" to="/login">
                   Login
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link nav-link-profile" to="/profile">
                  Profile
                </Link>
                <button className="nav-link nav-link-logout" onClick={handleLogout}>
                  🚪 Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
