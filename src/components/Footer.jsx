import React from "react";
// import footerCSS from "./footer.css";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 ">
      <div class="items-center">
      <h3 className="text-3xl text-center font-bold">Blood Donation</h3>
      <p className="text-gray-600 font-semibold">
        Connecting voluntary blood donors with patients.
        Your one donation can save multiple lives.
      </p>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-10 md:mx-auto">
        <nav>
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li>
              <a className="link link-hover" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="link link-hover" href="/donors">
                Search Donors
              </a>
            </li>
            <li>
              <a className="link link-hover" href="/requests">
                Donation Requests
              </a>
            </li>
            <li>
              <a className="link link-hover" href="/register">
                Become a Donor
              </a>
            </li>
            <li>
              <a className="link link-hover" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
        <ul>
            <li>
            <a className="link link-hover">Who Can Donate?</a>
          </li>
          <li>
            <a className="link link-hover">Donation Process</a>
          </li>
          <li>
            <a className="link link-hover">FAQ</a>
          </li>
          <li>
            <a className="link link-hover">Privacy Policy</a>
          </li>
        </ul>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          
                       
              <a className="link link-hover">
                Email: support@blooddonation.com
              </a>
            
        
        </nav>
      </div>
      {/* <div class="footer-bottom items-center">
    <p className='text-gray-600 font-semibold'>copy; 2026 Blood Donation App | Made with <img> to save lives</p>
  </div> */}
    </footer>
  );
};

export default Footer;
