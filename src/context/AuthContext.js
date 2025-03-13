import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // ✅ Correct import

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        try {
            return localStorage.getItem("token") || null;
        } catch (error) {
            console.error("LocalStorage access error:", error);
            return null;
        }
    });

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token); // ✅ Works now!
                setUser(decoded);
            } catch (error) {
                console.error("Invalid token:", error);
                logout(); 
            }
        }
    }, [token]);

    const login = async (credentials) => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/login", credentials);
            setToken(data.token);
            localStorage.setItem("token", data.token);
            setUser(jwtDecode(data.token)); // ✅ Works now!
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        try {
            localStorage.removeItem("token");
        } catch (error) {
            console.error("LocalStorage removal error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
