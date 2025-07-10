import React from 'react';
import { Link } from 'react-router-dom';

function IntoLeftHome({ header, info, visitLink, imgURL }) {
    return (
        <div className="px-5 py-5 max-w-screen-xl mx-auto p-5">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 mt-5">
                {/* Left: Image */}
                <div className="sm:w-1/2 text-center">
                    <img style={{ width: "90%" }} src={imgURL} alt="calculator" className="w-4/5 mx-auto" />
                </div>

                {/* Right: Info */}
                <div className="sm:w-1/2 mt-4">
                    <h1  className="text-2xl text-white font-semibold">{header}</h1>
                    <p className="text-green-100  mt-2 pr-10">{info}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 mb-5">
                        <Link
                            style={{ fontFamily: "Raleway, sans-serif" }}
                            to={visitLink}
                            className="bg-lime-300 text-black font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#65a30d] hover:translate-y-[1px] hover:shadow-[0_2px_0_#65a30d] active:translate-y-[2px] active:shadow-none transition-all duration-150"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntoLeftHome;
