import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if(password.length < 6){
      return alert("Password must be at least 6 characters long");
    }
    if(!uppercase.test(password)){
      return alert("Password must contain at least one uppercase letter");
    }
    if(!lowercase.test(password)){
      return alert("Password must contain at least one lowercase letter");
    }

    console.log(email, password, name, photo);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center p-5">
            Welcome to Register
          </h1>
          <div className="card-body">
            <form className="fieldset" onSubmit={handleRegister}>
              {/* Email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* name field */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />

              {/* Photo field */}
              <label className="label">Photo</label>
              <input
                type="file"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />

              {/* Blood Group field */}
              <label className="label">Blood Group</label>
              <input
                type="text"
                name="bloodGroup"
                className="input"
                placeholder="Blood Group"
              />

               {/*  Upazila field */}
              <label className="label">Upazila</label>
              <input
                type="text"
                name="upazila"
                className="input"
                placeholder="Upazila"
              />
              
              {/* password field  */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

               {/* confirm password field  */}
              <label className="label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="input"
                placeholder="Password Again"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <div>
              <p><span>Already have an account?</span><Link className="hover:underline pl-1 text-secondary" to={'/login'}>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
