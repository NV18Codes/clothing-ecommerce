import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Layout from './components/Layout';
import AuthModal from './components/AuthModal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ShopMen from './pages/ShopMen';
import ShopWomen from './pages/ShopWomen';
import Collection from './pages/Collection';
import Community from './pages/Community';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HelpCenter from './pages/HelpCenter';
import SizeGuide from './pages/SizeGuide';
import './App.css';

// Inner App component that can use context
const AppContent = () => {
  const { showAuthModal, handleAuthSuccess, closeAuthModal } = useApp();

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/men" element={<ShopMen />} />
            <Route path="/shop/women" element={<ShopWomen />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/community" element={<Community />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/size-guide" element={<SizeGuide />} />
          </Routes>
        </Layout>
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={closeAuthModal}
          onSuccess={handleAuthSuccess}
        />
      </div>
    </Router>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
