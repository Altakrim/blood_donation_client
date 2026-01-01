import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loader";
import ServerError from "../components/ServerError";



const DonationRequests = () => {
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
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  if (error) return <ServerError />;

  return (
    <div>
      <h2 className="text-xl font-bold">My Donation Requests</h2>
      {/* requests map here */}
      {requests.map(req => (
        <div key={req._id} className="border p-4 my-2">
            <p>{req.bloodGroup}</p>
            <p>{req.requestsData}</p>
            </div>
      ))}
    </div>
  );
};

export default DonationRequests;
