import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loader";
import ServerError from "../components/ServerError";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";



const DonationRequests = () => {
  const {user} = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/donations")
      .then(res => {
        setRequests(res.data);
        setLoading(false);
      })
      .catch(()=> {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  if (error) return <ServerError />;

  return (
    <section className="max-w-6x1 mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
       Blood Donation Requests
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requests.filter(req => req.status === "pending")
        .map(req => (
          <div key={req._id} className="card bg-base-100 shadow p-4">
            <h2 className="text-xl font-semibold text-red-600">{req.bloodGroup}</h2>
            <p>Location: {req.location}</p>
            <p>Date: {req.requestDate}</p>

            {user ? (
              <Link to={`/donation-requests/${req._id}`}
              className="btn btn-sm btn-primary mt-3">
                View Details
              </Link>
            ): (
              <p className="text-sm text-gray-500 mt-3">
                Login to donate
              </p>
            
            )}
          </div>
        ))
        }
      </div>
    </section>
  );
};

export default DonationRequests;


