import React from 'react';
import logoImg from "../../assets/blood_logo.png";


const Home = () => {
    return (
        <div className="text-center">
      <h1 className="text-5xl font-bold text-red-600">
        Welcome to Blood Donation App
      </h1>
      <p className="mt-4 max-w-2/3 mx-auto">
        <img src={logoImg} alt="" />
      </p>
    </div>
    );
};

export default Home;