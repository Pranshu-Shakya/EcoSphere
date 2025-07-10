import React from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
	const [image1, setImage1] = React.useState(false);
	const [image2, setImage2] = React.useState(false);
	const [image3, setImage3] = React.useState(false);
	const [image4, setImage4] = React.useState(false);

	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [category, setCategory] = React.useState("Utilities");
	const [bestseller, setBestseller] = React.useState(false);

	const onsubmitHandler = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();

			formData.append("title", title);
			formData.append("description", description);
			formData.append("price", price);
			formData.append("category", category);
			formData.append("bestseller", bestseller); // boolean value

			image1 && formData.append("image1", image1);
			image2 && formData.append("image2", image2);
			image3 && formData.append("image3", image3);
			image4 && formData.append("image4", image4);

			const response = await axios.post(backendUrl + "/api/product/add", formData, {
				headers: { token },
			});

			if (response.data.success) {
				toast.success(response.data.message);
				setImage1(false);
				setImage2(false);
				setImage3(false);
				setImage4(false);
				setTitle("");
				setDescription("");
				setPrice("");
				setBestseller(false);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.error(error);
			toast.error(error.message);
		}
	};

	return (
		<form onSubmit={onsubmitHandler} className="flex flex-col w-full gap-3 items-start">
			<div>
				<p className="mb-2">Upload Image</p>
				<div className="flex gap-2">
					<label htmlFor="image1">
						<img
							className="w-20 cursor-pointer"
							src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
							alt=""
						/>
						<input
							onChange={(e) => setImage1(e.target.files[0])}
							type="file"
							id="image1"
							hidden
						/>
					</label>
					<label htmlFor="image2">
						<img
							className="w-20 cursor-pointer"
							src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
							alt=""
						/>
						<input
							onChange={(e) => setImage2(e.target.files[0])}
							type="file"
							id="image2"
							hidden
						/>
					</label>
					<label htmlFor="image3">
						<img
							className="w-20 cursor-pointer"
							src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
							alt=""
						/>
						<input
							onChange={(e) => setImage3(e.target.files[0])}
							type="file"
							id="image3"
							hidden
						/>
					</label>
					<label htmlFor="image4">
						<img
							className="w-20 cursor-pointer"
							src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
							alt=""
						/>
						<input
							onChange={(e) => setImage4(e.target.files[0])}
							type="file"
							id="image4"
							hidden
						/>
					</label>
				</div>
			</div>
			<div className="w-full">
				<p className="mb-2">Product name</p>
				<input
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					className="w-full max-w-[500px] px-3 py-2"
					type="text"
					placeholder="Type here"
					required
				/>
			</div>
			<div className="w-full">
				<p className="mb-2">Product description</p>
				<textarea
					onChange={(e) => setDescription(e.target.value)}
					value={description}
					className="w-full max-w-[500px] px-3 py-2"
					type="text"
					placeholder="Write content here"
					required
				/>
			</div>
			<div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
				<div >
					<p className="mb-2">Product category</p>
					<select
						onChange={(e) => setCategory(e.target.value)}
						className="w-full px-3 py-2"
					>
						<option value="Utilities">Utilities</option>
						<option value="Home Decor">Home Decor</option>
						<option value="Gifting">Gifting</option>
						<option value="Fashion">Fashion</option>
					</select>
				</div>
				{/* <div>
					<p className="mb-2">Sub category</p>
					<select
						onChange={(e) => setSubCategory(e.target.value)}
						className="w-full px-3 py-2"
					>
						<option value="Topwear">Topwear</option>
						<option value="Bottomwear">Bottomwear</option>
						<option value="Winterwear">Winterwear</option>
					</select>
				</div> */}
				<div>
					<p className="mb-2">Product price</p>
					<input
						onChange={(e) => setPrice(e.target.value)}
						value={price}
						className="w-full px-3 py-2 sm:w-[120px]"
						type="number"
						placeholder="25"
					/>
				</div>
			</div>
			{/* <div>
				<p className="mb-2">Product Sizes</p>
				<div className="flex gap-3">
					<div
						onClick={() =>
							setSizes((prev) =>
								prev.includes("S")
									? prev.filter((size) => size !== "S")
									: [...prev, "S"]
							)
						}
						className="cursor-pointer"
					>
						<p
							className={`${
								sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"
							} cursor-pointer px-3 py-1`}
						>
							S
						</p>
					</div>
					<div
						onClick={() =>
							setSizes((prev) =>
								prev.includes("M")
									? prev.filter((size) => size !== "M")
									: [...prev, "M"]
							)
						}
						className="cursor-pointer"
					>
						<p
							className={`${
								sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"
							} cursor-pointer px-3 py-1`}
						>
							M
						</p>
					</div>
					<div
						onClick={() =>
							setSizes((prev) =>
								prev.includes("L")
									? prev.filter((size) => size !== "L")
									: [...prev, "L"]
							)
						}
						className="cursor-pointer"
					>
						<p
							className={`${
								sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"
							} cursor-pointer px-3 py-1`}
						>
							L
						</p>
					</div>
					<div
						onClick={() =>
							setSizes((prev) =>
								prev.includes("XL")
									? prev.filter((size) => size !== "XL")
									: [...prev, "XL"]
							)
						}
						className="cursor-pointer"
					>
						<p
							className={`${
								sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"
							} cursor-pointer px-3 py-1`}
						>
							XL
						</p>
					</div>
					<div
						onClick={() =>
							setSizes((prev) =>
								prev.includes("XXL")
									? prev.filter((size) => size !== "XXL")
									: [...prev, "XXL"]
							)
						}
						className="cursor-pointer"
					>
						<p
							className={`${
								sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"
							} cursor-pointer px-3 py-1`}
						>
							XXL
						</p>
					</div>
				</div>
			</div> */}
			<div className="flex gap-2 mt-2">
				<input
					onChange={() => setBestseller((prev) => !prev)}
					checked={bestseller}
					type="checkbox"
					id="bestseller"
				/>
				<label className="cursor-pointer" htmlFor="bestseller">
					Add to bestseller
				</label>
			</div>
			<button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
				ADD
			</button>
		</form>
	);
};

export default Add;
