import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axiosSecure from '../../api/axiosSecure';
import { Link } from 'react-router';

const MyDonationRequests = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);

      const loadData = async () => {
    const res = await axiosSecure.get(
      `/donation-requests/my-requests/${user.email}`
    );
    setRequests(res.data);
  };

  useEffect(() => {
    loadData();

  }, []);

  const handleDelete = async (id) => {
    await axiosSecure.delete(`/donation-requests/${id}`);
    loadData();
  };

    return (
          <div>
      <h2>My Donation Requests</h2>

      {requests.map((req) => (
        <div key={req._id}>
          <p>Blood: {req.bloodGroup}</p>
          <p>Status: {req.status}</p>

          {req.status === "pending" && (
            <>
              <Link to={`/dashboard/edit-request/${req._id}`}>Edit</Link>
              <button onClick={() => handleDelete(req._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
    );
};

export default MyDonationRequests;