import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen eco-static-bg from-white to-green-100 px-6 py-16 flex items-center justify-center">
      <div  className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">

        {/* Left Section - Contact Info */}
        <div className="text-green-800 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-green-50">
            Reach out to us for support, collaborations, or eco-ideas. Let’s connect and grow greener together.
          </p>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="text-green-100 text-2xl mt-1"><FaMapMarkerAlt /></div>
            <div>
              <h4 className="font-semibold text-green-100 text-lg">Address</h4>
              <p className='text-green-100'>EcoSphere HQ<br />#101, Greenway Lane,<br />New Delhi – 110001, India</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="text-green-100 text-2xl mt-1"><FaPhoneAlt /></div>
            <div>
              <h4 className="font-semibold text-green-100 text-lg">Phone</h4>
              <p className='text-green-100'>+91-9876543210</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="text-green-100 text-2xl mt-1"><FaEnvelope /></div>
            <div>
              <h4 className="font-semibold text-green-100 text-lg">Email</h4>
              <p className='text-green-100'>support@ecosphere.green</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div style={{borderRadius:"20px"}} className="bg-green-100 shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-green-900 mb-6">Send Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
            />
            <textarea
              placeholder="Type your Message..."
              rows="4"
              className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-emerald-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150"
            >
              Send
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
