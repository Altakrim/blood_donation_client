import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const VolunteerRoute = ({ children }) => {
  const { user, role, loading } = useAuth();

  if (loading) return null;

  if (user && role === "volunteer") {
    return children;
  }

  return <Navigate to="/" />;
};

export default VolunteerRoute;
