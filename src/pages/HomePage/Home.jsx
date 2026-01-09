import React from "react";
import Banner from "../../components/Banner";
import Featured from "../../components/Featured";
import ContactUs from "../../components/ContactUs";
// import logoImg from "../../assets/blood_logo.png";

const Home = () => {
  return (
    <div className="text-center">
      
      <Banner />
      <Featured />
      <ContactUs />
    </div>
  );
};

export default Home;
