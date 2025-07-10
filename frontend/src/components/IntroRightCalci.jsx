import React from 'react';
import { Link } from 'react-router-dom';
function IntroRightCalci({ header, info,imgURL }) {
    return (
        <div className="px-5 py-5 max-w-screen-xl mx-auto p-5 mt-5 mb-5 ">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">

                {/* Left Content */}
                <div className="sm:w-1/2 mt-5">
                    <h1 className="text-2xl text-white font-semibold">{header}</h1>
                    <p className="text-green-100  mt-2">{info}</p>
                    <div className="mt-4">

                    </div>
                </div>

                {/* Right Image */}
                <div className="sm:w-1/2 text-center mb-5">
                    <img  src={imgURL} alt={header} style={{width:"40%"}} className="w-4/5 mx-auto " />
                </div>

            </div>
        </div>


    );
}

export default IntroRightCalci;