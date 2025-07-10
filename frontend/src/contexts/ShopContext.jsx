import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { products } from "../assets/MarketPlace/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const currency = "₹";
	const delivery_fee = 10;
	const backendUrl = import.meta.env.VITE_BACKEND_URL;
	const [search, setSearch] = useState("");
	const [showSearch, setShowSearch] = useState(false);
	const [cartItems, setCartItems] = useState({});
	const [products, setProducts] = useState([]);
	const [token, setToken] = useState("");
	const navigate = useNavigate();

	const addToCart = async (itemId) => {
        if (!token) {
            toast.error("Please login to add items to cart");
            navigate("/login");
            return;
        }

		let cartData = structuredClone(cartItems);
		if (cartData[itemId]) {
            toast.error("Item already in cart");
		} else {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: 1,
            }));    
		}
		// setCartItems(cartData);
        
		if (token) {
			try {
				const response =  await axios.post(
					backendUrl + "/api/cart/add",
					{ itemId },
					{ headers: { token } }
				);
                toast.success(response.data.message);
			} catch (error) {
				console.log(error);
				toast.error(error.message || "Something went wrong while adding to cart");
			}
		}
	};

	// const getCartCount = () => {
	// 	let totalCount = 0;
	// 	for (const items in cartItems) {
	// 		for (const item in cartItems[items]) {
	// 			try {
	// 				if (cartItems[items][item]) {
	// 					totalCount += cartItems[items][item];
	// 				}
	// 			} catch (error) {}
	// 		}
	// 	}
	// 	return totalCount;
	// };

	const updateQuantity = async (itemId, quantity) => {
		let cartData = structuredClone(cartItems);

		cartData[itemId] = quantity;

		setCartItems(cartData);

		if(token) {
	        try {
	            await axios.post(
	                backendUrl + "/api/cart/update",
	                { itemId, quantity },
	                { headers: { token } }
	            );
	        } catch (error) {
	            console.log(error);
	            toast.error(error.message || "Something went wrong while updating cart");
	        }
	    }
	};

	const getUserCart = async (token) => {
	    try {
	        const response = await axios.post(
	            backendUrl + "/api/cart/get",
	            {},
	            { headers: { token } }
	        );
	        if (response.data.success) {
	            setCartItems(response.data.cartData);
	        } else {
	            toast.error(response.data.message);
	        }
	    } catch (error) {
	        console.log(error);
	        toast.error(error.message || "Something went wrong while fetching cart");
	    }
	}

	const getCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			let itemInfo = products.find((product) => product._id === item);
				try {
					if (cartItems[item] > 0) {
						totalAmount += itemInfo.price * cartItems[item];
					}
				} catch (error) {}
		}
		return totalAmount;
	};

	const getProductsData = async () => {
		try {
			const response = await axios.get(backendUrl + "/api/product/list");
			if (response.data.success) {
				setProducts(response.data.products);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message || "Something went wrong while fetching products");
		}
	};

	useEffect(() => {
		getProductsData();
	}, []);

	useEffect(() => {
		if (!token && localStorage.getItem("token")) {
			setToken(localStorage.getItem("token"));
			getUserCart(localStorage.getItem("token"));
		}
	}, []);

	// const value = {
	// 	products,
	// 	currency,
	// 	delivery_fee,
	// 	search,
	// 	setSearch,
	// 	showSearch,
	// 	setShowSearch,
	// 	cartItems,
	//     setCartItems,
	// 	addToCart,
	// 	getCartCount,
	// 	updateQuantity,
	// 	getCartAmount,
	// 	navigate,
	// 	backendUrl,
	// 	token,
	// 	setToken,
	// };
	const value = {
		currency,
		delivery_fee,
		search,
		setSearch,
		showSearch,
		setShowSearch,
		cartItems,
		setCartItems,
		navigate,
		backendUrl,
		token,
		setToken,
        products,
        addToCart,
        updateQuantity,
        getCartAmount,

	};

	return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
