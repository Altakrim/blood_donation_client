import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <aside>
        <NavLink to="/dashboard/create-request">Create Request</NavLink>
        <NavLink to="/dashboard/my-requests">My Requests</NavLink>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
