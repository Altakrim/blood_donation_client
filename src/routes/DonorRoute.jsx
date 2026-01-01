import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const DonorRoute = ({ children }) => {
  const { userRole, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  if (userRole !== "donor") {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default DonorRoute;
