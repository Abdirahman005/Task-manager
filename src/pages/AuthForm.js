import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      if (isRegister) {
        // Check if user already exists
        const userExists = users.some((user) => user.email === formData.email);

        if (userExists) {
          throw new Error("User already exists! Please log in.");
        }

        // Save new user
        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful! You can now log in.");
        setIsRegister(false); // Switch to login mode
      } else {
        // Simulate login
        const validUser = users.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );

        if (!validUser) {
          throw new Error("Invalid email or password.");
        }

        // Store user session
        localStorage.setItem("currentUser", JSON.stringify(validUser));

        alert("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex-center">
      <div className="auth-container">
        <h2>{isRegister ? "Register" : "Login"}</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isRegister ? "Register" : "Login"}</button>
        </form>
        <p
          onClick={() => setIsRegister(!isRegister)}
          style={{ cursor: "pointer", marginTop: "10px", color: "#007bff" }}
        >
          {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
