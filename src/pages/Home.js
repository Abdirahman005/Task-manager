import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; 
import taskManagerImage from "../assets/team-work.jpg"; // Ensure the file exists in /src/assets/

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Task Manager</h1>
            <p style={styles.subtitle}>Manage your tasks efficiently and stay productive.</p>

            {/* Get Started Button */}
            <Link to="/auth">
                <button style={styles.button}>Get Started</button>
            </Link>

            {/* Teamwork Image */}
            <img src={taskManagerImage} alt="Teamwork" style={styles.image} />

            {/* Footer Section */}
            <footer style={styles.footer}>
                &copy; {new Date().getFullYear()} Task Manager by Abdirahman Muktar. All rights reserved.
            </footer>
        </div>
    );
};

// ✅ Inline Styles Object
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#333",
    },
    subtitle: {
        fontSize: "1.2rem",
        color: "#666",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "1rem",
        color: "white",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.3s",
    },
    image: {
        width: "300px", // Adjust image size
        height: "auto",
        marginTop: "20px",
        borderRadius: "10px",
    },
    footer: {
        marginTop: "30px",
        fontSize: "0.9rem",
        color: "#555",
    },
};

export default Home;
