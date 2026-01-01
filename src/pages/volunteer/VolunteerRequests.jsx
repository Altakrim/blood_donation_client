import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loader";
import ServerError from "../../components/ServerError";


const VolunteerRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/donations/all", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
      .then(res => {
        setRequests(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleStatusChange = (id, status) => {
    axios.patch(
      `http://localhost:5000/donations/status/${id}`,
      { status },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }
    ).then(() => {
      setRequests(prev =>
        prev.map(req =>
          req._id === id ? { ...req, status } : req
        )
      );
    });
  };

  if (loading) return <Loading />;
  if (error) return <ServerError />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Volunteer – Donation Requests
      </h2>

      {requests.map(req => (
        <div key={req._id} className="border p-4 mb-3 rounded">
          <p><b>Name:</b> {req.name}</p>
          <p><b>Blood Group:</b> {req.bloodGroup}</p>
          <p><b>Status:</b> {req.status}</p>

          <select
            className="select select-bordered mt-2"
            value={req.status}
            onChange={(e) =>
              handleStatusChange(req._id, e.target.value)
            }
          >
            <option value="pending">Pending</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default VolunteerRequests;
