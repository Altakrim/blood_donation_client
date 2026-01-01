import React from 'react';
import { useNavigate, useParams } from 'react-router';
import axiosSecure from '../../api/axiosSecure';


const UpdateDonationRequest = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;

        const updateData = {
              bloodGroup: form.bloodGroup.value,
      district: form.district.value,
      upazila: form.upazila.value,
      hospitalName: form.hospital.value,
      donationDate: form.date.value,
      donationTime: form.time.value,
      message: form.message.value,
        }

        await axiosSecure.patch(`/donation-requests/${id}`, updateData);
    alert("Request Updated");
    navigate("/dashboard/my-requests");
    }
    return (
         <form onSubmit={handleUpdate}>
      <input name="bloodGroup" placeholder="Blood Group" required />
      <input name="district" placeholder="District" required />
      <input name="upazila" placeholder="Upazila" required />
      <input name="hospital" placeholder="Hospital" required />
      <input type="date" name="date" required />
      <input type="time" name="time" required />
      <textarea name="message" />

      <button>Update</button>
    </form>
    );
};

export default UpdateDonationRequest;