import React, { useContext } from "react";
import Title from "../EcoShopComponents/Title";
import CartTotal from "../EcoShopComponents/CartTotal";
import { assets } from "../../assets/MarketPlace/assets.js";
import { ShopContext } from "../../contexts/ShopContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
	const [method, setMethod] = React.useState("cod");
	const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
		country: "",
		phone: "",
	});

	const onChangeHandler = (e) => {
		// const { name, value } = e.target;
		const name = e.target.name;
		const value = e.target.value;

		setFormData((data) => ({ ...data, [name]: value }));
	};

    const initPay = async (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount * 100, // amount in the smallest currency unit
            currency: order.currency,
            name: "Order Payment",
            description: "Order Payment",
            order_id: order.id, // This is the Razorpay order ID
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response);
                try {
                    const { data } = await axios.post(backendUrl + "/api/order/verifyRazorpay", {response}, {headers: {token}});
                    if(data.success) {
                        navigate("/myorders");
                        setCartItems({});
                    } else {
                        toast.error(data.message || "Something went wrong");
                    }
                } catch (error) {
                    console.log(error);
                    toast.error(error.message || "Something went wrong");
                }
            }

        }
        const rzp = new window.Razorpay(options);
        rzp.open();
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if(!token) {
            toast.error("Please login to place an order");
            return;
        }
        try {
            let orderItems = [];

            for(const item in cartItems) {
                if(cartItems[item] > 0) {
                    const itemInfo = structuredClone(products.find((product) => product._id === item));
                    if(itemInfo) {
                        itemInfo.quantity = cartItems[item];
                        orderItems.push(itemInfo);
                    }
                }
                
            }

            // console.log(orderItems);
            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee,
            }

            switch (method) {
                case "cod": 
                    const response = await axios.post(backendUrl + "/api/order/place", orderData, {headers: {token}});
                    if(response.data.success) {
                        setCartItems({});
                        navigate("/myorders");
                        toast.success(response.data.message || "Order placed successfully(Frontend)");
                    } else {
                        toast.error(response.data.message || "Something went wrong");
                    }
                break;

                case "stripe":
                    const stripeResponse = await axios.post(backendUrl + "/api/order/stripe", orderData, {headers: {token}});
                    if(stripeResponse.data.success) {
                        const { session_url } = stripeResponse.data;
                        window.location.replace(session_url);
                    } else {
                        toast.error(stripeResponse.data.message);
                    }

                break;

                case "razorpay":
                    const razorpayResponse = await axios.post(backendUrl + "/api/order/razorpay", orderData, {headers: {token}});
                    if(razorpayResponse.data.success) {
                        initPay(razorpayResponse.data.order);
                    }

                break;

                default: 
                break;
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

    }

	return (
		<form onSubmit={onSubmitHandler} className="eco-static-bg flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-2 sm:px-[4vw] md:px-[6vw] lg:px-[8vw]">
			{/* ----------------Left Side------------------- */}
			<div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
				<div className="text-xl sm:text-2xl my-3">
					<Title text1={"DELIVERY"} text2={"INFORMATION"} />
				</div>
				<div className="flex gap-3">
					<input
                        onChange={onChangeHandler}
                        name="firstName"
                        value={formData.firstName}
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="text"
						placeholder="First name"
                        required
					/>
					<input
                        onChange={onChangeHandler}
                        name="lastName"
                        value={formData.lastName}
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="text"
						placeholder="Last name"
                        required
					/>
				</div>
				<input
                    onChange={onChangeHandler}
                    name="email"
                    value={formData.email}
					className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
					type="email"
					placeholder="Email address"
                    required
				/>
				<input
                    onChange={onChangeHandler}
                    name="street"
                    value={formData.street}
					className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
					type="text"
					placeholder="Street"
                    required
				/>
				<div className="flex gap-3">
					<input
                        onChange={onChangeHandler}
                        name="city"
                        value={formData.city}
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="text"
						placeholder="City"
                        required
					/>
					<input
                        onChange={onChangeHandler}
                        name="state"
                        value={formData.state}
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="text"
						placeholder="State"
                        required
					/>
				</div>
				<div className="flex gap-3">
					<input
                        onChange={onChangeHandler}
                        name="zipCode"
                        value={formData.zipCode}
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="number"
						placeholder="Zip code"
                        required
					/>
					<input
                        onChange={onChangeHandler}
                        name="country"
                        value={formData.country}
						className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
						type="text"
						placeholder="Country"
                        required
					/>
				</div>
				<input
                    onChange={onChangeHandler}
                    name="phone"
                    value={formData.phone}
					className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
					type="number"
					placeholder="Phone number"
                    required
				/>
			</div>
			{/* ----------------Right Side------------------- */}
			<div className="mt-8">
				<div className="mt-8 min-w-80 text-white">
					<CartTotal />
				</div>
				<div className="mt-12">
					<Title text1={"PAYMENT"} text2={"METHOD"} />
					{/* ------------------Payment Method Selection----------------- */}
					<div className="flex gap-3 flex-col lg:flex-row">
						<div
							onClick={() => setMethod("stripe")}
							className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
						>
							<p
								className={`min-w-3.5 h-3.5 border rounded-full ${
									method === "stripe" ? "bg-green-400" : ""
								}`}
							></p>
							<img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
						</div>
						<div
							onClick={() => setMethod("razorpay")}
							className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
						>
							<p
								className={`min-w-3.5 h-3.5 border rounded-full ${
									method === "razorpay" ? "bg-green-400" : ""
								}`}
							></p>
							<img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
						</div>
						<div
							onClick={() => setMethod("cod")}
							className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
						>
							<p
								className={`min-w-3.5 h-3.5 border rounded-full ${
									method === "cod" ? "bg-green-400" : ""
								}`}
							></p>
							<p className="text-gray-100 text-sm font-medium mx-4">
								CASH ON DELIVERY
							</p>
						</div>
					</div>

					<div className="w-full text-end mt-8">
						<button
                            type="submit"
							// onClick={() => navigate("/orders")}
							className="bg-black text-white px-16 py-3 text-sm"
						>
							PLACE ORDER
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default PlaceOrder;
