import { Routes, Route } from "react-router-dom";  // ❌ No need for BrowserRouter here
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AuthForm from "./pages/AuthForm";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<AuthForm />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
        </AuthProvider>
    );
};

export default App;
