import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { collections, products } from '../data/mockData';
import './Collection.css';

const Collection = () => {
  const { addToCart, addToWishlist } = useApp();

  const handleAddToCart = (product) => {
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  const getCollectionProducts = (collectionId) => {
    const collection = collections.find(c => c.id === collectionId);
    if (!collection) return [];
    return products.filter(product => collection.products.includes(product.id));
  };

  return (
    <div className="collection">
      {/* Hero Section */}
      <section className="collection-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Collections</h1>
            <p>
              Discover our carefully curated collections, each telling a unique story 
              through sustainable fashion designed for the modern Indian lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="collections-section">
        <div className="container">
          <div className="collections-grid">
            {collections.map(collection => (
              <div key={collection.id} className="collection-card">
                <div className="collection-image">
                  <img src={collection.image} alt={collection.name} />
                  <div className="collection-overlay">
                    <h3>{collection.name}</h3>
                    <p>{collection.description}</p>
                    <Link to={`#collection-${collection.id}`} className="btn btn-primary">
                      Explore Collection
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Collections */}
      {collections.map(collection => {
        const collectionProducts = getCollectionProducts(collection.id);
        
        return (
          <section key={collection.id} id={`collection-${collection.id}`} className="collection-detail">
            <div className="container">
              <div className="collection-header">
                <h2>{collection.name}</h2>
                <p>{collection.description}</p>
              </div>
              
              <div className="collection-products">
                <div className="products-grid">
                  {collectionProducts.map(product => (
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
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="collection-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Can't Find What You're Looking For?</h2>
            <p>
              Explore our full range of men's and women's collections to discover 
              more sustainable fashion options.
            </p>
            <div className="cta-actions">
              <Link to="/shop/men" className="btn btn-primary">
                Shop Men's Collection
              </Link>
              <Link to="/shop/women" className="btn btn-secondary">
                Shop Women's Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
