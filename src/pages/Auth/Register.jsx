import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import axios from "axios";

const Register = () => {
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;

    const name = form.name?.value;
    const email = form.email?.value;
    const password = form.password?.value;
    const confirmPassword = form.confirmPassword?.value;
    const bloodGroup = form.bloodGroup?.value;
    const district = form.district?.value;
    const upazila = form.upazila?.value;
    const image = form.photo?.files?.[0]; // optional chaining

    // 1/ Password validation BEFORE Firebase
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !bloodGroup ||
      !district ||
      !upazila ||
      !image
    ) {
      setError("All fields are required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!uppercase.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!lowercase.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // 2/ Firebase registration
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      axios
        .post("http://localhost:5000/jwt", { email: user.email })
        .then((res) => {
          localStorage.setItem("access-token", res.data.token);
        });
      const user = result.user;
      console.log("Firebase Registered User:", user);

      // 3/ imageBB upload
      const formData = new FormData();
      formData.append("image", image);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
        { method: "POST", body: formData }
      );

      const imgData = await res.json();
      const avatar = imgData.data.display_url;

      // 4/ Final user object (Requirement)
      const userInfo = {
        name,
        email,
        avatar,
        bloodGroup,
        district,
        upazila,
        role: "donor", // default
        status: "active", // default
      };

      // 5/ Save user to database
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      // console.log("Registered User Info:", userInfo);
      console.log("User Registered Successfully");

      // Reset form
      form.reset();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <h1 className="text-3xl font-bold text-center p-5">Register</h1>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <label className="label">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full"
                required
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />

              <label className="label">Photo</label>
              <input
                type="file"
                name="photo"
                className="input input-bordered w-full"
                required
              />

              <label className="label">Blood Group</label>
              <select
                name="bloodGroup"
                className="input input-bordered w-full"
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>

              <label className="label">District</label>
              <select
                name="district"
                className="input input-bordered w-full"
                required
              >
                <option value="">Select District</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattogram">Chattogram</option>
              </select>

              <label className="label">Upazila</label>
              <select
                name="upazila"
                className="input input-bordered w-full"
                required
              >
                <option value="">Select Upazila</option>
                <option value="Savar">Savar</option>
                <option value="Mirpur">Mirpur</option>
              </select>

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />

              <label className="label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
                required
              />

              {error && <p className="text-red-500 mt-2">{error}</p>}

              <button className="btn btn-neutral mt-4 w-full">Register</button>
            </form>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-secondary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
