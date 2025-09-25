import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Minus, Plus, Share2, Truck, RotateCcw, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { products } from '../data/mockData';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, addToWishlist, wishlist } = useApp();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      const foundProduct = products.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      if (foundProduct) {
        setSelectedSize(foundProduct.sizes[0]);
        setSelectedColor(foundProduct.colors[0]);
      }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      addToCart(product, selectedSize, selectedColor, quantity);
      alert('Product added to cart!');
    } else {
      alert('Please select size and color');
    }
  };

  const handleAddToWishlist = () => {
    if (product) {
      addToWishlist(product);
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  if (isLoading) {
    return (
      <div className="product-detail-loading">
        <div className="container">
          <div className="loading-skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-title"></div>
              <div className="skeleton-price"></div>
              <div className="skeleton-description"></div>
              <div className="skeleton-options"></div>
              <div className="skeleton-buttons"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  const isInWishlistProduct = wishlist.some(item => item.id === product?.id);

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
              {product.isNew && <span className="new-badge">New</span>}
              {product.originalPrice > product.price && (
                <span className="sale-badge">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-header">
              <h1>{product.name}</h1>
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < Math.floor(product.rating) ? '#ffd700' : 'none'}
                      color={i < Math.floor(product.rating) ? '#ffd700' : '#ddd'}
                    />
                  ))}
                </div>
                <span className="rating-text">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="product-price">
              <span className="current-price">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="product-options">
              <div className="option-group">
                <label>Size</label>
                <div className="size-options">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="option-group">
                <label>Color</label>
                <div className="color-options">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="option-group">
                <label>Quantity</label>
                <div className="quantity-selector">
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-actions">
              <button 
                className="btn btn-primary add-to-cart"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={20} />
                Add to Cart
              </button>
              <button 
                className={`btn btn-outline wishlist ${isInWishlistProduct ? 'active' : ''}`}
                onClick={handleAddToWishlist}
              >
                <Heart size={20} />
                {isInWishlistProduct ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
              <button className="btn btn-outline share">
                <Share2 size={20} />
                Share
              </button>
            </div>

            {/* Product Features */}
            <div className="product-features">
              <div className="feature">
                <Truck size={24} />
                <div>
                  <h4>Free Shipping</h4>
                  <p>On orders over ₹2,999</p>
                </div>
              </div>
              <div className="feature">
                <RotateCcw size={24} />
                <div>
                  <h4>Easy Returns</h4>
                  <p>30-day return policy</p>
                </div>
              </div>
              <div className="feature">
                <Shield size={24} />
                <div>
                  <h4>Secure Payment</h4>
                  <p>100% secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="product-tabs">
          <div className="tab-content">
            <div className="tab-section">
              <h3>Product Details</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="label">Material</span>
                  <span className="value">100% Organic Cotton</span>
                </div>
                <div className="detail-item">
                  <span className="label">Care Instructions</span>
                  <span className="value">Machine wash cold, tumble dry low</span>
                </div>
                <div className="detail-item">
                  <span className="label">Origin</span>
                  <span className="value">Made in India</span>
                </div>
                <div className="detail-item">
                  <span className="label">Sustainability</span>
                  <span className="value">GOTS Certified, Fair Trade</span>
                </div>
              </div>
            </div>

            <div className="tab-section">
              <h3>Size Guide</h3>
              <div className="size-guide">
                <table>
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Chest (inches)</th>
                      <th>Waist (inches)</th>
                      <th>Length (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>S</td>
                      <td>36-38</td>
                      <td>30-32</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>38-40</td>
                      <td>32-34</td>
                      <td>29</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>40-42</td>
                      <td>34-36</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>42-44</td>
                      <td>36-38</td>
                      <td>31</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
