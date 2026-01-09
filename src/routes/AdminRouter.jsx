import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loader";
import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const AdminRouter = ({ children }) => {
  const { userRole, loading } = useAuth(AuthContext);

  if (loading) {
    return <Loading />;
  }
  if (userRole !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRouter;
