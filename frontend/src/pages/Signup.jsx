import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../contexts/ShopContext";

const Signup = () => {
	const { token, setToken, backendUrl, navigate } = React.useContext(ShopContext);
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(backendUrl + "/api/user/register", {
				name,
				email,
				password,
			});
			if (response.data.success) {
				setToken(response.data.token);
				localStorage.setItem("token", response.data.token);
				toast.success("Signup successful! Welcome to EcoSphere 🌱");
			} else {
				toast.error(response.data.message || "Signup failed");
			}
		} catch (err) {
			console.log(err);
			toast.error(err.response?.data?.message || "Signup failed");
		}
	};

	useEffect(() => {
		if (token) {
			navigate("/");
		}
	}, [token]);

	return (
		<div className="flex items-center justify-center min-h-screen bg-green-50 eco-static-bg">
			<div className="bg-green-100 p-8 rounded-2xl shadow-lg w-full max-w-md">
				<h2 className="text-3xl font-bold text-green-900 mb-4 text-center">
					Join EcoSphere 
				</h2>
				<p className="text-green-800 text-center mb-6">
					Track impact. Build community. Create green change.
				</p>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						name="name"
						placeholder="Full Name"
						onChange={(e) => setName(e.target.value)}
						className="w-full text-green-800 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						className="w-full text-green-800 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
						required
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						className="w-full text-green-800 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
						required
					/>
					<button
						type="submit"
						className="w-full bg-emerald-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150"
					>
						Sign Up
					</button>
				</form>
				<p className="text-sm text-center mt-4 text-green-800">
					Already have an account?{" "}
					<Link to="/login" className="text-green-900 font-semibold">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
