import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signup } from './pages';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Communities from './pages/Communities';
import Initiatives from './pages/Initiative';
import Support from './pages/Support';
import Learn from './pages/Learn';
import Contact from './pages/Contact';
import EcoShop from './pages/EcoShop';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/support' element={<Support />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/initiatives' element={<Initiatives />} />
        <Route path='/eco-shop' element={<EcoShop />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/communities' element={<Communities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
