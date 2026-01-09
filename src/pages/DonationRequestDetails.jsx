import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loader";

const DonationRequestDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [request, setRequest] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/donations/${id}`)
      .then(res => setRequest(res.data));
  }, [id]);

  const handleConfirmDonate = async () => {
    try {
      await axios.patch(
        `http://localhost:5000/donations/accept/${id}`,
        {
          donorName: user.displayName,
          donorEmail: user.email,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );

      setRequest({ ...request, status: "inprogress" });
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (!request) return <Loading />;

  return (
    <div className="max-w-xl mx-auto p-6 card bg-base-100 shadow">
      <h2 className="text-2xl font-bold mb-4">Donation Request Details</h2>

      <p><b>Recipient:</b> {request.recipientName}</p>
      <p><b>Blood Group:</b> {request.bloodGroup}</p>
      <p><b>Location:</b> {request.location}</p>
      <p><b>Date:</b> {request.date}</p>
      <p><b>Time:</b> {request.time}</p>
      <p><b>Status:</b> {request.status}</p>

      {request.status === "pending" && (
        <button
          className="btn btn-primary mt-4"
          onClick={() => setOpenModal(true)}
        >
          Donate
        </button>
      )}

      {/* 🪟 Modal */}
      {openModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Confirm Donation</h3>

            <input
              type="text"
              value={user.displayName}
              readOnly
              className="input input-bordered w-full mb-2"
            />

            <input
              type="email"
              value={user.email}
              readOnly
              className="input input-bordered w-full mb-4"
            />

            <div className="modal-action">
              <button
                className="btn btn-success"
                onClick={handleConfirmDonate}
              >
                Confirm
              </button>

              <button
                className="btn"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationRequestDetails;
