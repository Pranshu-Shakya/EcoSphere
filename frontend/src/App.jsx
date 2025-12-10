import { Routes, Route,Link } from "react-router-dom";
import { Home, Login, Signup, Support, Learn, Contact, Initiative, EcoShop, Profile, Communities, Cart } from "./pages";
import Product from "./components/EcoShopComponents/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import {Toaster} from 'sonner';
import CarbonFootprintCalculator from "./pages/EcoCalci";
import Community from "./components/Support/Community";
import LearnGrow from "./components/Support/LearnGrow";
import CarbonTracker from "./components/Support/CarbonTracker";
import Eco from "./components/Support/Eco";
import Initiate from "./components/Support/Initiate";
import GettingStarted from "./components/Support/GettingStarted";
import LearnArticleInDetail from "./components/LearnArticleinDetail";
import LearnArticleCreate from "./components/LearnArticleCreate";
import CommunityDisplay from "./components/CommunityDisplay";
import CommunityPostForm from "./components/CommunityPostCreate";
import CommunityNewForm from "./components/CommunityNewForm";
import LearnVideoCreate from "./components/LearnVideoCreate";
import CreateInitiative from "./components/initiative-Formpage";
import Orders from "./pages/Orders";
import PlaceOrder from "./components/EcoShopComponents/PlaceOrder";
import Verify from "./components/EcoShopComponents/Verify"
import Collection from "./components/EcoShopComponents/Collection";
import ChatBot from "./pages/ChatBot";
import ChatBotImg from "./assets/chatbot.png";
import IntitiaveInDetail from "./pages/IntiativeInDetail";
import ScrollToTop from "./components/ScrollTop";

function App() {
	return (
		<div>
			<ToastContainer position="top-right" theme="dark"/>
			<Toaster position="bottom-right" theme="dark" richColors/>
			<Navbar />
			<ScrollToTop />
			<Routes>
				{/* general segment routes */}
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/support" element={<Support />} />
				<Route path="/learn" element={<Learn />} />
				<Route path="/contact" element={<Contact />} />

				{/* initative segment routes */}
				<Route path="/initiatives" element={<Initiative />} />
				<Route path="/initiatives/create-initiative" element={<CreateInitiative />} />
				<Route path="/initiatives/:id" element={<IntitiaveInDetail/>}/>

                {/* EcoShop segment Routes */}
				<Route path="/eco-shop" element={<EcoShop />} />
				<Route path="/eco-shop/all-collections" element={<Collection />} />
				<Route path='/eco-shop/:productId' element={<Product />} />
				<Route path='/place-order' element={<PlaceOrder />} />
				<Route path="/verify" element={<Verify />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/myorders" element={<Orders />} />

				{/* carbon footprin calci and tracker segment routes */}
				<Route path="/eco" element={<Eco />} />
				<Route path="/eco-calculator" element={<CarbonFootprintCalculator/>}/>
				<Route path="/carbon-tracker" element={<CarbonTracker/>} />

                <Route path="/initiate" element={<Initiate/>} />
				<Route path="/getting-started" element={<GettingStarted />} />
				
				{/* learn segment routes */}
				<Route path="/learn-grow" element={<LearnGrow />} />
				<Route path="/learn/article/:id" element={<LearnArticleInDetail />} />
				<Route path="learn/article/new" element={<LearnArticleCreate />} />
				<Route path="learn/video/new" element={<LearnVideoCreate />} />


				{/* communities segment routes */}
				<Route path="/communities" element={<Communities />} />			
				<Route path="/community" element={<Community/>} />
				<Route path="/communities/post/new" element={<CommunityPostForm />} />
				<Route path="/communities/new" element={<CommunityNewForm />} />
				<Route path="/community/:id" element={<CommunityDisplay />} />

				{/* ai-bot route */}
				<Route path="/ecobot-ai" element={<ChatBot />} />
			</Routes> 
			<div title="Ask EcoAi?" style={{borderRadius:"50%"}} className="p-3 bg-green-100/30 fixed bottom-10 right-10 text-center 
               hover:shadow-xl hover:-translate-y-2 
               transition-all duration-200 ease-out">
			<div>
				<Link to="/ecobot-ai"><img src={ChatBotImg} alt="Chatbot" className="w-10 h-10" /></Link>
			</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;

