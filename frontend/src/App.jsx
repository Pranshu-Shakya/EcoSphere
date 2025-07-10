import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Support, Learn, Contact, Initiative, EcoShop, Profile, Communities, Cart } from "./pages";
import Product from "./components/EcoShopComponents/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import CarbonFootprintCalculator from "./pages/EcoCalci";
import LearnArticleInDetail from "./components/LearnArticleinDetail";
import LearnArticleCreate from "./components/LearnArticleCreate";
import CommunityDisplay from "./components/CommunityDisplay";
import CommunityPostForm from "./components/CommunityPostCreate";
import CommunityNewForm from "./components/CommunityNewForm";
import LearnVideoCreate from "./components/LearnVideoCreate";
import Random from "./pages/Random"

import CreateInitiative from "./components/initiative-Formpage";

import Orders from "./pages/Orders";
import PlaceOrder from "./components/EcoShopComponents/PlaceOrder";
import Verify from "./components/EcoShopComponents/Verify"
import Collection from "./components/EcoShopComponents/Collection";



function App() {
	return (
		<div>
			<ToastContainer />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/support" element={<Support />} />
				<Route path="/learn" element={<Learn />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/initiatives" element={<Initiative />} />
				<Route path="/initiatives/form-page" element={<CreateInitiative/>} />
				<Route path="/eco-shop" element={<EcoShop />} />
                <Route path="/all-collections" element={<Collection />} />
       			<Route path='/eco-shop/:productId' element={<Product />} />
                <Route path='/place-order' element={<PlaceOrder />} />
                <Route path="/verify" element={<Verify />} />
				<Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/myorders" element={<Orders />} />
				<Route path="/communities" element={<Communities />} />
				<Route path="/eco-calculator" element={<CarbonFootprintCalculator />} />
				<Route path="/learn/article/:id" element={<LearnArticleInDetail />} />
				<Route path="learn/article/new" element={<LearnArticleCreate />} />
				<Route path="learn/video/new" element={<LearnVideoCreate />} />
				<Route path="/communities/post/new" element={<CommunityPostForm />} />
				<Route path="/communities/new" element={<CommunityNewForm />} />
				<Route path="/community/:id" element={<CommunityDisplay />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

