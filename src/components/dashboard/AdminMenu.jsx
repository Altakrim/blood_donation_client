import { NavLink } from "react-router-dom";
import { FaUsers, FaChartBar } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <ul className="space-y-3">
      <li>
        <NavLink
          to="/dashboard/admin"
          className={({ isActive }) =>
            isActive
              ? "text-red-600 font-semibold"
              : "text-gray-700"
          }
        >
          <FaChartBar className="inline mr-2" />
          Admin Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive
              ? "text-red-600 font-semibold"
              : "text-gray-700"
          }
        >
          <FaUsers className="inline mr-2" />
          Manage Users
        </NavLink>
      </li>
    </ul>
  );
};

export default AdminMenu;
