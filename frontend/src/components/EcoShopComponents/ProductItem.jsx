import React from "react";
import { ShopContext } from "../../contexts/ShopContext.jsx";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, imageUrl, price }) => {
	const { currency } = React.useContext(ShopContext);
    

	return (
		<Link to={`/eco-shop/${id}`} className="p-1 text-gray-700 bg-radial from-gray-100 from-40% to-gray-300 rounded cursor-pointer shadow">
			<div className="overflow-hidden">
				<img className="hover:scale-110 transition ease-in-out" src={imageUrl[0]} alt="" />
			</div>
			<p className="pt-3 pb-1 px-2 text-sm">{title}</p>
			<p className="px-2 pb-1 text-sm font-medium">
				{currency}
				{price}
			</p>
		</Link>
	);
};

export default ProductItem;
