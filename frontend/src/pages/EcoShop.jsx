import React from "react";
import { Link } from "react-router-dom";
import LatestCollection from "../components/EcoShopComponents/LatestCollection";
import BestSeller from "../components/EcoShopComponents/BestSeller";

const EcoShop = () => {
	return (
		<div className='px-4 sm:px-[2vw] md:px-[4vw] lg:px-[5vw] eco-static-bg'>
			<LatestCollection />
			<div className="flex justify-center my-8">
				<Link
					to="/all-collections"
					className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:from-green-500 hover:to-blue-600 focus:outline-none"
				>
					<span className="mr-3">All Collections</span>
					<svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</Link>
			</div>
			<BestSeller />
		</div>
	);
};

export default EcoShop;
