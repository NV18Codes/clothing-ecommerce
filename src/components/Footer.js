import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Clothing Store</h3>
            <p>
              Your destination for sustainable and stylish fashion. 
              We believe in creating beautiful clothing that doesn't 
              compromise on ethics or the environment.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/about">About Us</Link>
            <Link to="/shop/men">Men's Collection</Link>
            <Link to="/shop/women">Women's Collection</Link>
            <Link to="/collection">Collections</Link>
            <Link to="/sustainability">Sustainability</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-section">
            <h3>Customer Service</h3>
            <Link to="/contact">Help Center</Link>
            <Link to="/contact">Size Guide</Link>
            <Link to="/contact">Shipping Info</Link>
            <Link to="/contact">Returns & Exchanges</Link>
            <Link to="/contact">Track Your Order</Link>
            <Link to="/contact">FAQ</Link>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <MapPin size={16} />
              <span>123 Fashion Street, Style City, SC 12345</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>hello@clothingstore.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Clothing Store. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
