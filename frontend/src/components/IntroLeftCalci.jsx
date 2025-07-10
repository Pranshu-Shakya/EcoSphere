import React from 'react';

function IntroLeftCalci({ header, info, imgURL }) {
  return (
    <div className="px-5 py-5 max-w-screen-xl mx-auto mb-5 mt-5">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 mt-5">
        {/* Left: Image */}
        <div className="sm:w-1/2 text-center">
          <img
            style={{width:"40%"}}
            src={imgURL}
            alt="calculator"
            className="w-4/5 mx-auto"
          />
        </div>

        {/* Right: Info */}
        <div className="sm:w-1/2 mt-4">
          <h1 className="text-2xl text-white font-semibold">{header}</h1>
          <p className="text-green-100 mt-2 pr-10">{info}</p>

          {/* Placeholder for future buttons or features */}
          <div className="mt-4 flex flex-wrap items-center gap-4 mb-5"></div>
        </div>
      </div>
    </div>
  );
}

export default IntroLeftCalci;
