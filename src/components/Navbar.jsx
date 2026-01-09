import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Logo from "./logo";
import useAuth from "../hooks/useAuth";



const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const navLinks = (
      <>
    <li>
      <NavLink to="/donation-requests">Donation Requests</NavLink>
    </li>
     <li>
      <NavLink to="/search">Search Donors</NavLink>
    </li>

    {user && (
      <li>
        <NavLink to="/funding">Funding</NavLink>
      </li>
    )}
  </>

  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost">
          <Logo></Logo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
     <div className="navbar-end gap-4">
  {user ? (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user"
            src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
          />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li onClick={handleLogout}>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  ) : (
    <>
      <Link to="/login" className="btn btn-outline btn-sm">
        Login
      </Link>
      <Link to="/register" className="btn btn-sm btn-primary">
        Register
      </Link>
    </>
  )}
</div>
    </div>
  );
};

export default Navbar;

