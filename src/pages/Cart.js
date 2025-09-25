import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Cart.css';

const Cart = () => {
  const { 
    cart, 
    cartTotal, 
    cartItemsCount, 
    updateCartQuantity, 
    removeFromCart, 
    clearCart 
  } = useApp();

  const handleQuantityChange = (cartId, newQuantity) => {
    updateCartQuantity(cartId, newQuantity);
  };

  const handleRemoveItem = (cartId) => {
    removeFromCart(cartId);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="container">
          <div className="empty-cart-content">
            <ShoppingBag size={64} />
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <div className="empty-cart-actions">
              <Link to="/shop/men" className="btn btn-primary">
                Shop Men's Collection
              </Link>
              <Link to="/shop/women" className="btn btn-secondary">
                Shop Women's Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{cartItemsCount} item{cartItemsCount !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-items-header">
              <h2>Items</h2>
              <button onClick={handleClearCart} className="clear-cart-btn">
                Clear Cart
              </button>
            </div>
            
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.cartId} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <div className="item-options">
                      <span className="item-size">Size: {item.size}</span>
                      <span className="item-color">Color: {item.color}</span>
                    </div>
                    <div className="item-price">
                      <span className="current-price">₹{item.price.toLocaleString()}</span>
                      {item.originalPrice > item.price && (
                        <span className="original-price">₹{item.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>

                  <div className="item-quantity">
                    <label>Quantity</label>
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="item-total">
                    <span className="total-price">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>

                  <div className="item-actions">
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.cartId)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-shipping">Free</span>
              </div>
              
              <div className="summary-row">
                <span>Tax</span>
                <span>₹{(cartTotal * 0.18).toLocaleString()}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{(cartTotal * 1.18).toLocaleString()}</span>
              </div>

              <div className="summary-actions">
                <Link to="/checkout" className="btn btn-primary checkout-btn">
                  Proceed to Checkout
                </Link>
                <Link to="/shop/men" className="btn btn-outline continue-shopping">
                  <ArrowLeft size={16} />
                  Continue Shopping
                </Link>
              </div>

              <div className="summary-features">
                <div className="feature">
                  <div className="feature-icon">🚚</div>
                  <div className="feature-text">
                    <strong>Free Shipping</strong>
                    <span>On orders over ₹2,999</span>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🔄</div>
                  <div className="feature-text">
                    <strong>Easy Returns</strong>
                    <span>30-day return policy</span>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🔒</div>
                  <div className="feature-text">
                    <strong>Secure Payment</strong>
                    <span>100% secure checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
