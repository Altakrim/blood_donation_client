import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const EditProfile = () => {
      const axiosSecure = useAxiosSecure();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
          const updatedProfile = {
      name: form.name.value,
      bloodGroup: form.bloodGroup.value,
      district: form.district.value,
    };
     axiosSecure.patch("/users/me", updatedProfile)
      .then(() => {
        alert("Profile Updated");
      });
    }

    return (
         <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <input name="bloodGroup" placeholder="Blood Group" />
      <input name="district" placeholder="District" />
      <button type="submit">Update</button>
    </form>
    );
};


export default EditProfile;