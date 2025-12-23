import React from 'react';
import { Link } from 'react-router';

const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
       <h1 className="text-3xl font-bold text-center pt-5">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          {/* Email field */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* password field  */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <div>
              <p><span>Already have an account?</span><Link className="hover:underline pl-1 text-secondary" to={'/register'}>Register</Link></p>
            </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;