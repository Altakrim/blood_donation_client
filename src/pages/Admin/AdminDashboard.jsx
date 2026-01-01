import { useEffect, useState } from "react";
import axiosSecure from "../../api/axiosSecure";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axiosSecure.get("/admin/stats").then(res => setStats(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Users: {stats.users}</p>
      <p>Total Requests: {stats.requests}</p>
      <p>Pending: {stats.pending}</p>
      <p>Completed: {stats.done}</p>
    </div>
  );
};

export default AdminDashboard;
