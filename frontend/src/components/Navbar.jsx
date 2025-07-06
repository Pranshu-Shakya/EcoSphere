
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300 px-4 py-3">
      <div className="max-w-7xl mx-auto flex  items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/earth.png" alt="logo" className="w-10 h-10" />
          <span className="text-gray-600 text-lg font-semibold">EcoSphere</span>
        </Link>

        {/* Toggler for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} lg:flex items-center gap-6`}>
          <ul className="flex flex-col lg:flex-row items-center gap-10 text-sm mt-4 lg:mt-0">

            <li>
              <Link to="/" className="text-gray-500 hover:text-caribbeanGreen transition-colors duration-200 no-underline">
                Home
              </Link>
            </li>

            <li>
              <Link to="/eco-shop" className="text-gray-500 hover:text-caribbeanGreen transition-colors duration-200 no-underline">
                EcoShoping
              </Link>
            </li>

            <li>
              <Link to="/communities" className="text-gray-500 hover:text-caribbeanGreen transition-colors duration-200 no-underline">
                Communities
              </Link>
            </li>
            <li>
              <Link to="/learn" className="text-gray-500 hover:text-caribbeanGreen transition-colors duration-200 no-underline">
                Learn
              </Link>
            </li>
            <li>
              <Link to="/initiatives" className="text-gray-500 hover:text-caribbeanGreen transition-colors duration-200 no-underline">
                Initiatives
              </Link>
            </li>
            <li>
              <Link to="/support" className="text-gray-500 hover:text-caribbeanGreen transition-colors duration-200 no-underline">
                Support
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-500 hover:text-caribbeanGreen transition-colors duration-200 no-underline">
                Contact
              </Link>
            </li>
            <li>

              <Link to="/login" className="text-gray-500 hover:text-caribbeanGreen transition-colors duration-200 no-underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-gray-500 hover:text-caribbeanGreen transition-colors duration-200 no-underline">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
