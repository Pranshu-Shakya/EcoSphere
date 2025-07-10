import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import { assets } from "../../assets/MarketPlace/assets";
import Title from "./Title";
import ProductItem from "./ProductItem";

const Collection = () => {
	const { products } = useContext(ShopContext);
	const [showFilter, setShowFilter] = React.useState(false);
	const [filterProducts, setFilterProducts] = React.useState([]);
	const [category, setCategory] = React.useState([]);
	// const [subCategory, setSubCategory] = React.useState([]);
	const [sortType, setSortType] = React.useState("relevant");
	const [search, setSearch] = React.useState("");

	const toggleCategory = (e) => {
		const value = e.target.value;
		setCategory((prev) => {
			if (prev.includes(value)) {
				return prev.filter((item) => item !== value);
			} else {
				return [...prev, value];
			}
		});
	};

	// const toggleSubCategory = (e) => {
	// 	const value = e.target.value;
	// 	setSubCategory((prev) => {
	// 		if (prev.includes(value)) {
	// 			return prev.filter((item) => item !== value);
	// 		} else {
	// 			return [...prev, value];
	// 		}
	// 	});
	// };

	const applyFilter = () => {
		let productsCopy = products.slice();

		if (search) {
			productsCopy = productsCopy.filter((item) =>
				item.title.toLowerCase().includes(search.toLowerCase())
			);
		}

		if (category.length > 0) {
			productsCopy = productsCopy.filter((item) => category.includes(item.category));
		}

		// if (subCategory.length > 0) {
		// 	productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
		// }

		setFilterProducts(productsCopy);
	};

	const sortProduct = () => {
		let fpCopy = filterProducts.slice();

		switch (sortType) {
			case "low-high":
				setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
				break;
			case "high-low":
				setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
				break;
			default:
				applyFilter();
				break;
		}
	};

	useEffect(() => {
		applyFilter();
	}, [category, products, search]);

	useEffect(() => {
		sortProduct();
	}, [sortType]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="eco-static-bg flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 pb-16 border-t px-4 sm:px-[2vw] md:px-[4vw] lg:px-[5vw] eco-static-bg">
			{/* Filter Options */}
			<div className="min-w-60 text-white">
				<p
					onClick={() => setShowFilter(!showFilter)}
					className="my-2 text-xl flex items-center cursor-pointer gap-2 "
				>
					FILTERS
					<img
						src={assets.dropdown_icon}
						className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
						alt=""
					/>
				</p>
				{/* Category filter */}
				<div
					className={`border border-gray-300 pl-5 py-3 mt-6 ${
						showFilter ? "" : "hidden"
					} sm:block`}
				>
					<p className="mb-3 text-sm font-medium">CATEGORIES</p>
					<div className="flex flex-col gap-2 text-sm font-light text-gray-200">
						<label className="flex gap-2 cursor-pointer select-none">
							<input
								className="w-3"
								type="checkbox"
								id="cat-utilities"
								value="Utilities"
								onChange={toggleCategory}
								checked={category.includes("Utilities")}
							/>
							Utilities
						</label>
						<label className="flex gap-2 cursor-pointer select-none">
							<input
								className="w-3"
								type="checkbox"
								id="cat-homedecor"
								value="Home Decor"
								onChange={toggleCategory}
								checked={category.includes("Home Decor")}
							/>
							Home Decor
						</label>
						<label className="flex gap-2 cursor-pointer select-none">
							<input
								className="w-3"
								type="checkbox"
								id="cat-fashion"
								value="Fashion"
								onChange={toggleCategory}
								checked={category.includes("Fashion")}
							/>
							Fashion
						</label>
						<label className="flex gap-2 cursor-pointer select-none">
							<input
								className="w-3"
								type="checkbox"
								id="cat-gifting"
								value="Gifting"
								onChange={toggleCategory}
								checked={category.includes("Gifting")}
							/>
							Gifting
						</label>
					</div>
				</div>
			</div>

			{/* Right Side */}
			<div className="flex-1">
				{/* Search Bar */}
				<div className="flex justify-end mb-6">
					<div className="relative w-full max-w-md">
						<span className="absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								className="w-5 h-5 text-gray-400"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<circle cx="11" cy="11" r="8" />
								<line x1="21" y1="21" x2="16.65" y2="16.65" />
							</svg>
						</span>
						<input
							type="text"
							placeholder="Search collections..."
							value={search}
							onChange={(e) => {
								setSearch(e.target.value);
							}}
							className="block w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-800 border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200"
						/>
					</div>
				</div>
				<div className="flex justify-between text-base sm:text-2xl mb-4">
					<Title text1={"ALL"} text2={"COLLECTIONS"} />
					{/* Product Sort */}
					<select
						onChange={(e) => setSortType(e.target.value)}
						className="border text-white border-gray-300 text-sm px-2 cursor-pointer "
					>
						<option value="relevant">Sort by: Relevant</option>
						<option value="low-high">Sort by: Low to High</option>
						<option value="high-low">Sort by: Hight to Low</option>
					</select>
				</div>

				{/* Map Products */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
					{filterProducts.map((item, index) => (
						<ProductItem
							key={index}
							id={item._id}
							title={item.title}
							imageUrl={item.imageUrl}
							price={item.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Collection;
