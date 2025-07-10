import React from 'react';
import { Link } from 'react-router-dom';
function IntroRightHome({ header, info, visitLink,imgURL }) {
    return (
        <div className="px-5 py-5 max-w-screen-xl mx-auto p-5  ">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">

                {/* Left Content */}
                <div className="sm:w-1/2 mt-5">
                    <h1 className="text-2xl text-white font-semibold">{header}</h1>
                    <p className="text-green-100  mt-2">{info}</p>
                    <div className="mt-4">
                        <Link
                            style={{ fontFamily: "Raleway, sans-serif" }}
                            to={visitLink}
                            className="bg-lime-300 text-black font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="sm:w-1/2 text-center mb-5">
                    <img  src={imgURL} alt={header} style={{width:"90%"}} className="w-4/5 mx-auto " />
                </div>

            </div>
        </div>


    );
}

export default IntroRightHome;