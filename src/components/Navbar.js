import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    navigate("/auth");
  };

  return (
    <nav style={{ padding: "10px", background: "#007bff", color: "white" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
      {currentUser ? (
        <>
          <Link to="/dashboard" style={{ marginRight: "10px", color: "white" }}>Dashboard</Link>
          <button onClick={handleLogout} style={{ background: "red", color: "white" }}>Logout</button>
        </>
      ) : (
        <Link to="/auth" style={{ color: "white" }}>Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
