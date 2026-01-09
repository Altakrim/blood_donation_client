import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-red-50 py-20">
            <div className="max-w-6x1 mx-auto text-center space-y-6">
                <h1 className="text-4x1 md:text-5xl font-bold text-red-600">
                    Donation Blood, Save Lives
                </h1>
                <p className="text-gray-600">
                    Your one donation can be a reason for someone's smile.
                </p>
                <div className="flex justify-center gap-4">
                    <button 
                       onClick={() => navigate('/register')}
                      className="btn btn-primary">
                        Join as a Donar
                    </button>

                    <button
                     onClick={() => navigate("/search")}
                     className="btn btn-outline btn-error">
                        Search Donors
                     </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;