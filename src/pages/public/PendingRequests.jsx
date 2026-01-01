import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loader";

const PendingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/donations/pending")
      .then(res => {
        setRequests(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Pending Donation Requests
      </h2>

      {requests.map(req => (
        <div key={req._id} className="border p-4 mb-3 rounded">
          <p><b>Patient:</b> {req.patientName}</p>
          <p><b>Blood Group:</b> {req.bloodGroup}</p>
          <p><b>Location:</b> {req.location}</p>

          <Link
            to={`/donation/${req._id}`}
            className="btn btn-sm btn-error mt-2"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PendingRequests;
