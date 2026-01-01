import { useEffect, useState } from "react";
import axiosSecure from "../../api/axiosSecure";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axiosSecure.get("/admin/users").then(res => setUsers(res.data));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>

      {users.map(user => (
        <div key={user._id}>
          <p>{user.email}</p>
          <p>Role: {user.role}</p>
          <p>Status: {user.status}</p>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
