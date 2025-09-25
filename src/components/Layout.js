import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { cartItemsCount, user, setUser } = useApp();
  const location = useLocation();
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = () => {
    setUser(null);
    setShowUserMenu(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collection', path: '/collection' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo">
              Clothing Store
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav">
              <ul className="nav-links">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className={location.pathname === link.path ? 'active' : ''}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              {/* Search - Hidden on mobile */}
              <div className="search-container">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
              </div>

              {/* Cart */}
              <Link to="/cart" className="cart-link">
                <ShoppingBag size={22} />
                {cartItemsCount > 0 && (
                  <span className="cart-badge">{cartItemsCount}</span>
                )}
              </Link>

              {/* User Menu */}
              {user ? (
                <div className="user-menu" ref={userMenuRef}>
                  <button 
                    className="user-btn"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                  >
                    <User size={22} />
                    <span className="user-name">{user.name.split(' ')[0]}</span>
                    <ChevronDown size={16} />
                  </button>
                  {showUserMenu && (
                    <div className="user-dropdown">
                      <Link to="/profile" className="dropdown-item">
                        <User size={16} />
                        Profile
                      </Link>
                      <Link to="/orders" className="dropdown-item">
                        <ShoppingBag size={16} />
                        Orders
                      </Link>
                      <button onClick={handleSignOut} className="dropdown-item sign-out">
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/signin" className="shop-now-btn">
                  Shop Now
                </Link>
              )}

              {/* Mobile Menu Toggle */}
              <button className="mobile-toggle" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-nav-content">
              <ul className="mobile-nav-links">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={location.pathname === link.path ? 'active' : ''}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mobile-actions">
                <div className="mobile-search">
                  <Search size={20} />
                  <input type="text" placeholder="Search products..." />
                </div>
                
                {user ? (
                  <div className="mobile-user">
                    <p>Welcome, {user.name}!</p>
                    <button onClick={handleSignOut} className="btn btn-outline">
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="mobile-auth">
                    <Link to="/signin" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      Shop Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
