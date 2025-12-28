import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const {user, loading} = useAuth();
  const token = localStorage.getItem("access-token");
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-xl items-center"></span>
  }
  if (!token || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

 
  return children;
};

export default PrivateRoute;

