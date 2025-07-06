import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white px-6 py-10 mt-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand & Socials */}
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-green-400 text-2xl">🌿</span> EcoSphere
          </h2>
          <p className="text-gray-300 mt-3">
            Empowering individuals to live sustainably, connect with eco-communities, and create positive environmental impact.
          </p>
          <div className="flex gap-4 mt-4 text-lg text-gray-300">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Platform */}
        <div>
          <h3 className="font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Carbon Tracker</a></li>
            <li><a href="#" className="hover:text-white">Communities</a></li>
            <li><a href="#" className="hover:text-white">Marketplace</a></li>
            <li><a href="#" className="hover:text-white">Learning Hub</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Sustainability Guide</a></li>
            <li><a href="#" className="hover:text-white">DIY Tutorials</a></li>
            <li><a href="#" className="hover:text-white">Eco Tips</a></li>
            <li><a href="#" className="hover:text-white">Research Papers</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        © 2024 EcoSphere. All rights reserved. Building a sustainable future together.
      </div>
    </footer>
  );
}

