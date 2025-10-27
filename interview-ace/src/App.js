
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Dashboard from "./components/Dashboard";
import LiveInterview from "./components/LiveInterview";
import "./App.css"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/live-interview" element={<LiveInterview />} />
        <Route path="/live-interview/:roomId" element={<LiveInterview />} />
      </Routes>
    </Router>
  );
}

export default App;
