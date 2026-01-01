import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axiosSecure from '../../api/axiosSecure';

const CreateDonationRequest = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const donationRequest = {
      requesterName: user.displayName,
      requesterEmail: user.email,
      bloodGroup: form.bloodGroup.value,
      district: form.district.value,
      upazila: form.upazila.value,
      hospitalName: form.hospital.value,
      donationDate: form.date.value,
      donationTime: form.time.value,
      message: form.message.value,
    };

    await axiosSecure.post("/donation-requests", donationRequest);
    alert("Donation Request Created");
    form.reset();
  };

    return (
        <form onSubmit={handleSubmit}>
      <input name="bloodGroup" placeholder="Blood Group" required />
      <input name="district" placeholder="District" required />
      <input name="upazila" placeholder="Upazila" required />
      <input name="hospital" placeholder="Hospital Name" required />
      <input type="date" name="date" required />
      <input type="time" name="time" required />
      <textarea name="message" placeholder="Message" />

      <button>Create Request</button>
    </form>
    );
};

export default CreateDonationRequest;