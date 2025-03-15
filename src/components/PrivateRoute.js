import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return currentUser ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
