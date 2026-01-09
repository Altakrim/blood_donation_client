import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AdminMenu from "../components/dashboard/AdminMenu";

const DashboardLayout = () => {
  const { user, role } = useAuth();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div key={user} className="w-64 bg-red-100 p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        {role === "admin" && <AdminMenu />}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
