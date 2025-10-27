"use client"

import { useNavigate } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()

  function handleGetStarted() {
    navigate("/signup")
  }

  return (
    <div className="hero-section">
      <div className="hero-background"></div>

      <div className="hero-content">
        <div className="hero-badge">Welcome to the Future of Interview Prep</div>
        <h1>Master Your Interviews with AI-Powered Practice</h1>
        <p>Get real-time feedback, personalized coaching, and ace every interview with confidence</p>
        <div className="hero-buttons">
          <button className="btn btn-primary btn-hero" onClick={handleGetStarted}>
            Get Started
          </button>
          <button className="btn btn-hero btn-secondary-hero" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span>AI Feedback</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <span>Analytics</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎓</span>
            <span>Expert Tips</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
