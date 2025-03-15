import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setUser(decoded);
        } catch (error) {
          console.error("Invalid token:", error);
          logout();
        }
      }
      setLoading(false);
    };
    initializeAuth();
  }, [token]);

  const login = async (credentials) => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/login", credentials);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      setUser(jwtDecode(data.token));
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      throw error;
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

  if (loading) {
    return <div>Loading...</div>; // Render loading state here
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;