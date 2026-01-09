import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loader";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/stats", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
      .then((res) => {
        setStats(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users */}
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold mt-2">{stats.users}</p>
        </div>

        {/* Pending Requests */}
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Pending Requests</h3>
          <p className="text-3xl font-bold mt-2">{stats.pending}</p>
        </div>

        {/* Completed */}
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold">Completed Donations</h3>
          <p className="text-3xl font-bold mt-2">{stats.done}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
