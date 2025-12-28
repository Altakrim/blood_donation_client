import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";



const Profile = () => {
  const axiosSecure = useAxiosSecure();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axiosSecure.get("/users/me")
      .then(res => setProfile(res.data));
  }, [axiosSecure]);

  return (
    <div className="max-w-xl mx-auto p-6">
      <img src={profile.photoURL} className="w-24 rounded-full" />
      <h2 className="text-xl font-bold">{profile.name}</h2>
      <p>{profile.email}</p>
      <p>Blood Group: {profile.bloodGroup}</p>
      <p>District: {profile.district}</p>
      <p>Role: {profile.role}</p>
      <p>Status: {profile.status}</p>
    </div>
  );
};

export default Profile;
