import React, { useContext, useEffect } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/EcoShopComponents/Title";
import axios from "axios";

const Orders = () => {
	const { backendUrl, token, currency } = useContext(ShopContext);
	const [orderData, setOrderData] = React.useState([]);

	const loadOrderData = async () => {
		try {
			if (!token) {
				return null;
			}
			const response = await axios.post(
				backendUrl + "/api/order/userorders",
				{},
				{ headers: { token } }
			);
			if (response.data.success) {
				// console.log(response.data);
				
				let allOrderItems = [];
				response.data.orders.map((order) => {
					order.items.map((item) => {
						item["status"] = order.status;
						item["payment"] = order.payment;
						item["paymentMethod"] = order.paymentMethod;
						// item["date"] = order.date;
						item["date"] = order.createdAt;
						allOrderItems.push(item);
					});
				});
				setOrderData(allOrderItems.reverse());
			}
		} catch (error) {}
	};

	useEffect(() => {
		loadOrderData();
	}, [token]);

	return (
		<div className="border-t p-16 eco-static-bg">
			<div className="text-2xl">
				<Title text1={"MY"} text2={"ORDERS"} />
			</div>
			<div>
				{orderData.length === 0 ? (
					<div className="text-center py-20">
						<div className="flex flex-col items-center gap-4">
							<svg
								className="w-20 h-20 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
								/>
							</svg>
							<h3 className="text-xl font-medium text-gray-500">You have no orders yet</h3>
							<p className="text-gray-400 mb-6">Start shopping and your orders will appear here.</p>
							<button
								onClick={() => window.location.href = '/eco-shop'}
								className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
							>
								Continue Shopping
							</button>
						</div>
					</div>
				) : (
					orderData.map((item, index) => (
						<div
							key={index}
							className="py-4 border-t border-b text-white flex flex-col md:flex-row md:justify-between gap-4"
						>
							<div className="flex items-start gap-6 text-sm">
								<img className="w-16 sm:w-20" src={item.imageUrl[0]} alt="" />
								<div>
									<p className="sm:text-base font-medium">{item.title}</p>
									<div className="flex items-center gap-3 mt-1 text-base text-gray-200">
										<p>
											{currency}
											{item.price}
										</p>
										<p>Quantity: {item.quantity}</p>
										{/* <p>Size: {item.size}</p> */}
									</div>
									<p className="mt-1">
										Date:{" "}
										<span className="text-gray-300">
											{new Date(item.date).toDateString()}
										</span>
									</p>
									<p className="mt-1">
										Payment:{" "}
										<span className="text-gray-300">{item.paymentMethod}</span>
									</p>
								</div>
							</div>
							<div className="md:w-1/2 flex justify-between">
								<div className="flex items-center gap-2">
									<p className="min-w-2 h-2 rounded-full bg-green-500"></p>
									<p className="text-sm md:text-base">{item.status}</p>
								</div>
								<button
									onClick={loadOrderData}
									className="border px-4 py-2 text-sm font-medium rounded-sm"
								>
									Track Order
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Orders;
