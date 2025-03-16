import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; 
import teamWorkImage from "../assets/team-work.jpg"; // Corrected import

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <img src={teamWorkImage} alt="Task Management" className="home-image" />
        <h1 className="home-title">Welcome to Task Manager</h1>
        <p className="home-description">
          Organize your tasks, stay productive, and never miss a deadline.
        </p>

        {/* Get Started Button */}
        <button className="get-started-btn" onClick={() => navigate("/auth")}>
          Get Started
        </button>
      </div>

      {/* Footer with Copyright */}
      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Task Manager Abdirahman muktar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
