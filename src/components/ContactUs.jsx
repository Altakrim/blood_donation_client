import React from 'react';
import { IoCall } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        console.log({name, email, message});

        // later: Backend / email service 

        form.reset();
    }
    return (
        <section className='py-20 bg-red-50'>
            <div className="max-w-6x1 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left side - Info  */}
                <div className=''>
                    <h2 className='text-3xl font-bold text-red-600 mb-4'>Contact Us</h2>
                    <p className="text-gray-600">Have questions or need urgent help? Reach out to us anytime. </p>
                    <p className="text-lg"><span className='font-semibold text-center'><IoCall className='text-red-600'></IoCall>Phone:</span> +8801800001</p>
                     <p className="text-lg mt-2"><span className='font-semibold'
                     ><TfiEmail className='text-red-600'></TfiEmail>Email:</span> habil@kabil.com</p>
                </div>

                
                {/* Right side - Form  */}
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                    <input type="text" name='name' placeholder='Your Name' required className='input input-bordered w-full'/>
                    <input type="email" name='email' placeholder='Your Email' required className='input input-bordered w-full'/>
                    <textarea name="message" placeholder='Your Message' rows="4" required className='input input-bordered w-full' id=""></textarea>
                    <button className='btn btn-primary w-full'>Send Message</button>

                </form>
            </div>
            
        </section>
    );
};

export default ContactUs;