import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { products, collections, testimonials } from '../data/mockData';
import './Home.css';

const Home = () => {
  const { addToCart, addToWishlist } = useApp();
  const featuredProducts = products.filter(product => product.isFeatured);

  const handleAddToCart = (product) => {
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Sustainable Fashion for Modern Living</h1>
            <p>
              Discover our curated collection of ethically made, 
              environmentally conscious clothing that doesn't compromise on style.
            </p>
            <div className="hero-actions">
              <Link to="/shop/men" className="btn btn-primary">
                Shop Men's Collection
                <ArrowRight size={16} />
              </Link>
              <Link to="/shop/women" className="btn btn-secondary">
                Shop Women's Collection
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop" 
              alt="Sustainable Fashion" 
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Handpicked items from our latest collection</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button 
                      className="wishlist-btn"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      <Heart size={20} />
                    </button>
                    <button 
                      className="quick-view-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                  {product.isNew && <span className="new-badge">New</span>}
                  {product.originalPrice > product.price && (
                    <span className="sale-badge">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < Math.floor(product.rating) ? '#ffd700' : 'none'}
                        color={i < Math.floor(product.rating) ? '#ffd700' : '#ddd'}
                      />
                    ))}
                    <span>({product.reviews})</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice > product.price && (
                      <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <Link to={`/product/${product.id}`} className="btn btn-outline">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="collections">
        <div className="container">
          <div className="section-header">
            <h2>Our Collections</h2>
            <p>Explore our curated collections</p>
          </div>
          <div className="collections-grid">
            {collections.map(collection => (
              <div key={collection.id} className="collection-card">
                <div className="collection-image">
                  <img src={collection.image} alt={collection.name} />
                  <div className="collection-overlay">
                    <Link to="/collection" className="btn btn-primary">
                      View Collection
                    </Link>
                  </div>
                </div>
                <div className="collection-info">
                  <h3>{collection.name}</h3>
                  <p>{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Highlight */}
      <section className="sustainability-highlight">
        <div className="container">
          <div className="sustainability-content">
            <div className="sustainability-text">
              <h2>Committed to Sustainability</h2>
              <p>
                Every piece in our collection is designed with the environment in mind. 
                From organic cotton to recycled materials, we're working towards a 
                more sustainable future for fashion.
              </p>
              <Link to="/sustainability" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="sustainability-image">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop" 
                alt="Sustainable Fashion" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Real feedback from our community</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < testimonial.rating ? '#ffd700' : 'none'}
                      color={i < testimonial.rating ? '#ffd700' : '#ddd'}
                    />
                  ))}
                </div>
                <p>"{testimonial.comment}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest updates and exclusive offers</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
