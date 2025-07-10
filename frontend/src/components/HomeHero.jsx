import React from 'react';
import { Link } from 'react-router-dom';

function HomeHero() {
  return (
    <section
      className="relative w-full h-[90vh] bg-green-700 bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/bg-forest-1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-white max-w-xxl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            BE THE <span className="text-green-400">CHANGE!</span>
          </h1>
          <p style={{ fontSize: "20px", fontWeight: "500" }} className="text-lg text-white mb-8">
            Join our citizen-led movement for climate action with EcoSphere.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link
              style={{ fontFamily: "Raleway, sans-serif" }}
              to="/signup"
              className="bg-lime-300 text-black font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150"
            >
              Join Us
            </Link>

            <Link
              style={{ fontFamily: "Raleway, sans-serif" }}
              to="/initiatives"
              className="bg-emerald-400 text-black font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150"
            >
              More about Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
