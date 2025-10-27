"use client";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <div className="dashboard-section">
      <div className="dashboard-container">
        <h2>Welcome to InterviewAce</h2>
        <p>Choose your interview type:</p>

        <div className="interview-buttons">
          {/* Show both options only for student */}
          {role === "student" && (
            <button
              className="interview-btn"
              onClick={() => navigate("/ai-interview")}
            >
              AI Interview
            </button>
          )}

          {/* Live Interview visible to both */}
          <button
            className="interview-btn"
            onClick={() => navigate("/live-interview")}
          >
            1v1 Live Interview
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
