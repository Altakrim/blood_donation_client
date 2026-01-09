import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loader";

const DonationRequestDetails = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/donations/${id}`)
      .then(res => setRequest(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!request) return <Loading />

  return (
    <div className="max-w-xl mx-auto p-6 card bg-base-100 shadow">
      <h2 className="text-2xl font-bold mb-4">Donation Request Details</h2>

      <p><b>Recipient:</b> {request.recipientName}</p>
      <p><b>Blood Group:</b> {request.bloodGroup}</p>
      <p><b>Location:</b> {request.location}</p>
      <p><b>Date:</b> {request.date}</p>
      <p><b>Time:</b> {request.time}</p>
      <p><b>Reason:</b> {request.reason}</p>
    </div>
  );
};

export default DonationRequestDetails;
