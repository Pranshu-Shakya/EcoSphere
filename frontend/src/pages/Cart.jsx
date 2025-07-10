import React, { useEffect, useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/EcoShopComponents/Title";
import { assets } from "../assets/MarketPlace/assets.js";
import CartTotal from "../components/EcoShopComponents/CartTotal.jsx";

const Cart = () => {
	const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

	const [cartData, setCartData] = React.useState([]);

	useEffect(() => {
		if (products.length > 0) {
			const tempData = [];

			for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    tempData.push({
                        _id: item,
                        quantity: cartItems[item],
                    });
                }
				
			}
			setCartData(tempData);
		}
	}, [cartItems, products]);

	return (
		<div className="eco-static-bg border-t pt-14 px-4 sm:px-[2vw] md:px-[4vw] lg:px-[5vw]">
			<div className="text-2xl mb-3">
				<Title text1={"YOUR"} text2={"CART"} />
			</div>

			<div>
				{cartData.map((item, index) => {
					const productData = products.find((product) => product._id === item._id);

					return (
						<div
							key={index}
							className="py-4 border-t border-b text-white grid grid-cols-[4fr_0.5fr_o.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
						>
							<div className="flex items-start gap-6">
								<img className="w-16 sm:w-20" src={productData.imageUrl[0]} alt="" />
								<div>
									<p className="text-sx sm:text-lg font-medium">
										{productData.title}
									</p>
									<div className="flex items-center gap-5 mt-2">
										<p>
											{currency}
											{productData.price}
										</p>
										{/* <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
											{item.size}
										</p> */}
									</div>
								</div>
							</div>
							<input
								onChange={(e) =>
									e.target.value === "" || e.target.value === "0"
										? null
										: updateQuantity(
												item._id,
												Number(e.target.value)
										  )
								}
								className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
								type="number"
								min={1}
								defaultValue={item.quantity}
							/>
							<img
								onClick={() => updateQuantity(item._id, 0)}
								className="w-4 mr-4 sm:w-5 cursor-pointer"
								src={assets.bin_icon}
								alt=""
							/>
						</div>
					);
				})}
			</div>
			<div className="flex justify-end py-20 text-white">
				<div className="w-full sm:w-[450px]">
					<CartTotal />
					<div className="w-full text-end">
						<button
							onClick={() => navigate("/place-order")}
							className="bg-black text-white text-sm my-8 px-8 py-3"
						>
							PROCEED TO CHECKOUT
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
