import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const DonationDetails = () => {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/donations/${id}`)
      .then(res => {
        setDonation(res.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div className="max-w-xl mx-auto border p-5 rounded">
      <h2 className="text-2xl font-bold mb-4">
        Donation Request Details
      </h2>

      <p><b>Patient:</b> {donation.patientName}</p>
      <p><b>Blood Group:</b> {donation.bloodGroup}</p>
      <p><b>Hospital:</b> {donation.hospital}</p>
      <p><b>Location:</b> {donation.location}</p>
      <p><b>Status:</b> {donation.status}</p>
    </div>
  );
};

export default DonationDetails;
