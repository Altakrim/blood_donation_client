import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loader";
import { Navigate } from "react-router";

const AdminRouter = ({ children }) => {
  const { userRole, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }
  if (userRole !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default AdminRouter;
