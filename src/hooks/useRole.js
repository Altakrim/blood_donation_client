import { useEffect, useState } from "react";
import axios from "axios";

const useRole = () => {
  const [role, setRole] = useState("");
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access-token");

    axios
      .get("http://localhost:5000/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setRole(res.data.role);
        setRoleLoading(false);
      });
  }, []);

  return { role, roleLoading };
};

export default useRole;
