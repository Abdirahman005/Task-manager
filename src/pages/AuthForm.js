import React, { useState } from "react";
import "../styles/styles.css"; 

const AuthForm = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isRegister ? "Registering User..." : "Logging in...");
    };

    return (
        <div className="flex-center">
            <div className="auth-container">
                <h2>{isRegister ? "Register" : "Login"}</h2>
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
                <p onClick={() => setIsRegister(!isRegister)} style={{ cursor: "pointer", marginTop: "10px", color: "#007bff" }}>
                    {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
