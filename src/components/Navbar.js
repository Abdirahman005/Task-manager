import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css"; // Make sure this is imported

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    navigate("/auth");
    setIsOpen(false); // close menu on logout
  };

  return (
    <nav className="navbar">
      <div className="logo">TaskManager</div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        {currentUser ? (
          <>
            <li>
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
            </li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/auth" onClick={() => setIsOpen(false)}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;