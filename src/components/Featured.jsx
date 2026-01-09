// import React from 'react';
// import { FaHeartbeat } from 'react-icons/fa';

// const Featured = () => {
//     return (
//         <section className='py-20 bg-white'>
//             <div className="max-w-6xl mx-auto px-4">
//                 <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
//                     Why Choose Our platform?
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

//                     {/* card 1 */}
//                     <div className="card bg-base-100">
//                         <FaHeartbeat className='text-4x1 text-red-500 mx-auto mb-4'></FaHeartbeat>
//                         <h3 className="text-xl font-semibold mb-2">
//                             Why Donate Blood?
//                         </h3>
//                         <p className="text-gray-600">
//                             A single donation can save up to three lives in emergency situations.
//                         </p>
//                     </div>

//                      {/* card 2 */}
//                     <div className="card bg-base-100">
//                         <FaHeartbeat className='text-4x1 text-red-500 mx-auto mb-4'></FaHeartbeat>
//                         <h3 className="text-xl font-semibold mb-2">
//                             Sage & Simple
//                         </h3>
//                         <p className="text-gray-600">
//                                          We ensure a safe and hygienic blood donation process for everyone.

//                         </p>
//                     </div>

//                      {/* card 3 */}
//                     <div className="card bg-base-100">
//                         <FaHeartbeat className='text-4x1 text-red-500 mx-auto mb-4'></FaHeartbeat>
//                         <h3 className="text-xl font-semibold mb-2">
//                            Emergency Support
//                         </h3>
//                         <p className="text-gray-600">
//                             Find nearby donors quickly during critical medical emergencies.
//                         </p>
//                     </div>

//                         {/* card 4 */}
//                     <div className="card bg-base-100">
//                         <FaHeartbeat className='text-4x1 text-red-500 mx-auto mb-4'></FaHeartbeat>
//                         <h3 className="text-xl font-semibold mb-2">
//                           Our Impact
//                         </h3>
//                         <p className="text-gray-600">
//                             Thousands of donors and patients connected through our platform.
//                         </p>
//                     </div>
//                 </div>
//             </div>
            
//         </section>
//     );
// };

// export default Featured;


import { FaHeartbeat, FaUserShield, FaAmbulance, FaHandsHelping } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const Featured = () => {
  const features = [
    {
      icon: FaHeartbeat,
      title: "Why Donate Blood?",
      desc: "A single donation can save up to three lives."
    },
    {
      icon: FaUserShield,
      title: "Safe & Simple",
      desc: "We ensure a safe and hygienic donation process."
    },
    {
      icon: FaAmbulance,
      title: "Emergency Support",
      desc: "Quickly find donors in critical situations."
    },
    {
      icon: FaHandsHelping,
      title: "Our Impact",
      desc: "Thousands of lives saved through our platform."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
          Why Choose Our Platform?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Featured;
