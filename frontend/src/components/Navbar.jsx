import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import { ShopContext } from "../contexts/ShopContext";

function Navbar() {
	const { token, setToken } = useContext(ShopContext);
	const navigate = useNavigate();

	const [isOpen, setIsOpen] = useState(false);
	const [hoveredLink, setHoveredLink] = useState(null);
	const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
	const profileDropdownRef = useRef(null);

	let onmouseEnterHandler = (e, linkName) => {
		e.preventDefault();
		setHoveredLink(linkName);
	};

	let OnMouseExithandler = (e) => {
		e.preventDefault();
		setHoveredLink(null);
	};

	const logout = () => {
		localStorage.removeItem("token");
		setToken("");
		navigate("/login");
	};

	const toggleProfileDropdown = () => {
		setIsProfileDropdownOpen(!isProfileDropdownOpen);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
				setIsProfileDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<nav className="bg-black border-b border-black px-4 py-3">
			<div className="max-w-7xl mx-auto flex  items-center justify-between">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2">
					<img src="/earth.png" alt="logo" className="w-10 h-10" />
					<span style={{ fontFamily: "Pacifico" }} className="text-gray-300 text-lg ">
						EcoSphere
					</span>
				</Link>

				{/* Toggler for Mobile */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden text-gray-600 focus:outline-none"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{isOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>

				{/* Nav Links */}
				<div className={`${isOpen ? "block" : "hidden"} lg:flex items-center gap-6`}>
					<ul
						style={{ fontWeight: "400" }}
						className="flex flex-col lg:flex-row items-center gap-10 text-sm mt-4 lg:mt-0"
					>
						<li>
							<Link
								to="/"
								onMouseLeave={OnMouseExithandler}
								onMouseEnter={(e) => onmouseEnterHandler(e, "home")}
								className={
									hoveredLink === "home"
										? "text-green-400 transition-colors duration-200 no-underline"
										: "text-gray-300 hover:text-caribbeanGreen transition-colors duration-200 no-underline"
								}
							>
								Home
							</Link>
						</li>
						
						<li>
							<Link
								to="/eco-calculator"
								onMouseLeave={OnMouseExithandler}
								onMouseEnter={(e) => onmouseEnterHandler(e, "eco-calculator")}
								className={
									hoveredLink === "eco-calculator"
										? "text-green-400 transition-colors duration-200 no-underline"
										: "text-gray-300 hover:text-caribbeanGreen transition-colors duration-200 no-underline"
								}
							>
								EcoCalculator
							</Link>
						</li>

						<li>
							<Link
								to="/eco-shop"
								onMouseLeave={OnMouseExithandler}
								onMouseEnter={(e) => onmouseEnterHandler(e, "eco-shop")}
								className={
									hoveredLink === "eco-shop"
										? "text-green-400 transition-colors duration-200 no-underline"
										: "text-gray-300 hover:text-caribbeanGreen transition-colors duration-200 no-underline"
								}
							>
								EcoShopping
							</Link>
						</li>

						<li>
							<Link
								to="/communities"
								onMouseLeave={OnMouseExithandler}
								onMouseEnter={(e) => onmouseEnterHandler(e, "communities")}
								className={
									hoveredLink === "communities"
										? "text-green-400 transition-colors duration-200 no-underline"
										: "text-gray-300 hover:text-caribbeanGreen transition-colors duration-200 no-underline"
								}
							>
								Communities
							</Link>
						</li>

						<li>
							<Link
								to="/learn"
								onMouseLeave={OnMouseExithandler}
								onMouseEnter={(e) => onmouseEnterHandler(e, "learn")}
								className={
									hoveredLink === "learn"
										? "text-green-400 transition-colors duration-200 no-underline"
										: "text-gray-300 hover:text-caribbeanGreen transition-colors duration-200 no-underline"
								}
							>
								Learn
							</Link>
						</li>

						<li>
							<Link
								to="/initiatives"
								onMouseLeave={OnMouseExithandler}
								onMouseEnter={(e) => onmouseEnterHandler(e, "initiatives")}
								className={
									hoveredLink === "initiatives"
										? "text-green-400 transition-colors duration-200 no-underline"
										: "text-gray-300 hover:text-caribbeanGreen transition-colors duration-200 no-underline"
								}
							>
								Initiatives
							</Link>
						</li>

						<li>
							<Link
								to="/support"
								onMouseLeave={OnMouseExithandler}
								onMouseEnter={(e) => onmouseEnterHandler(e, "support")}
								className={
									hoveredLink === "support"
										? "text-green-400 transition-colors duration-200 no-underline"
										: "text-gray-300 hover:text-caribbeanGreen transition-colors duration-200 no-underline"
								}
							>
								Support
							</Link>
						</li>

						<li>
							<Link
								to="/contact"
								onMouseLeave={OnMouseExithandler}
								onMouseEnter={(e) => onmouseEnterHandler(e, "contact")}
								className={
									hoveredLink === "contact"
										? "text-green-400 transition-colors duration-200 no-underline"
										: "text-gray-300 hover:text-caribbeanGreen transition-colors duration-200 no-underline"
								}
							>
								Contact
							</Link>
						</li>

						{/* Conditional rendering based on token */}
						{token ? (
							<li className="relative" ref={profileDropdownRef}>
								<button
									onClick={toggleProfileDropdown}
									className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-200 bg-transparent border-none cursor-pointer"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
									<svg
										className={`w-4 h-4 transition-transform duration-200 ${
											isProfileDropdownOpen ? "rotate-180" : ""
										}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>

								{/* Dropdown Menu */}
								{isProfileDropdownOpen && (
									<div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50 border border-gray-600">
										<div className="py-1">
											<Link
												to="/profile"
												onClick={() => setIsProfileDropdownOpen(false)}
												className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-green-400 transition-colors duration-200 no-underline"
											>
												<div className="flex items-center gap-2">
													<svg
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
														/>
													</svg>
													My Profile
												</div>
											</Link>
											<Link
												to="/cart"
												onClick={() => setIsProfileDropdownOpen(false)}
												className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-green-400 transition-colors duration-200 no-underline"
											>
												<div className="flex items-center gap-2">
													<svg
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
														/>
													</svg>
													My Cart
												</div>
											</Link>
											<Link
												to="/myorders"
												onClick={() => setIsProfileDropdownOpen(false)}
												className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-green-400 transition-colors duration-200 no-underline"
											>
												<div className="flex items-center gap-2">
													<svg
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
														/>
													</svg>
													My Orders
												</div>
											</Link>
											<hr className="border-gray-600" />
											<button
												onClick={() => {
													logout();
													setIsProfileDropdownOpen(false);
												}}
												className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-red-400 transition-colors duration-200 bg-transparent border-none cursor-pointer"
											>
												<div className="flex items-center gap-2">
													<svg
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
														/>
													</svg>
													Logout
												</div>
											</button>
										</div>
									</div>
								)}
							</li>
						) : (
							<>
								<li>
									<Link
										to="/login"
										onMouseLeave={OnMouseExithandler}
										onMouseEnter={(e) => onmouseEnterHandler(e, "login")}
										className={
											hoveredLink === "login"
												? "text-green-400 transition-colors duration-200 no-underline"
												: "text-gray-300 hover:text-caribbeanGreen transition-colors duration-200 no-underline"
										}
									>
										Login
									</Link>
								</li>

								<li>
									<Link
										to="/signup"
										onMouseLeave={OnMouseExithandler}
										onMouseEnter={(e) => onmouseEnterHandler(e, "signup")}
										className={
											hoveredLink === "signup"
												? "text-green-400 transition-colors duration-200 no-underline"
												: "text-gray-300 hover:text-caribbeanGreen transition-colors duration-200 no-underline"
										}
									>
										Signup
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
