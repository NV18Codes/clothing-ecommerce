import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, Lock, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useApp();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    
    // Payment Information
    paymentMethod: 'razorpay',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing Information
    sameAsShipping: true,
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
    
    // Additional Information
    orderNotes: ''
  });

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would:
      // 1. Validate form data
      // 2. Create order in backend
      // 3. Process payment with Razorpay
      // 4. Send confirmation email
      
      // For demo purposes, we'll just clear the cart and redirect
      clearCart();
      alert('Order placed successfully! You will receive a confirmation email shortly.');
      navigate('/');
    } catch (error) {
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    const razorpayLoaded = await loadRazorpayScript();
    if (!razorpayLoaded) {
      alert('Razorpay SDK failed to load. Please try again.');
      return;
    }

    const options = {
      key: 'rzp_test_1234567890', // Replace with your actual Razorpay key
      amount: Math.round(cartTotal * 1.18 * 100), // Amount in paise
      currency: 'INR',
      name: 'Clothing Store',
      description: 'Order Payment',
      image: '/logo192.png',
      order_id: 'order_' + Date.now(), // Replace with actual order ID from backend
      handler: function (response) {
        console.log('Payment successful:', response);
        handlePlaceOrder();
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: formData.address,
        order_notes: formData.orderNotes,
      },
      theme: {
        color: '#000000',
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const steps = [
    { number: 1, title: 'Shipping', icon: <MapPin size={20} /> },
    { number: 2, title: 'Payment', icon: <CreditCard size={20} /> },
    { number: 3, title: 'Review', icon: <Lock size={20} /> }
  ];

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <div className="checkout-steps">
            {steps.map(step => (
              <div 
                key={step.number} 
                className={`step ${currentStep >= step.number ? 'active' : ''} ${currentStep === step.number ? 'current' : ''}`}
              >
                <div className="step-icon">{step.icon}</div>
                <span>{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="checkout-content">
          <div className="checkout-form">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <div className="form-step">
                <h2>Shipping Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="address">Address *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                </div>
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleNextStep}
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <div className="form-step">
                <h2>Payment Method</h2>
                <div className="payment-methods">
                  <div className="payment-option">
                    <input
                      type="radio"
                      id="razorpay"
                      name="paymentMethod"
                      value="razorpay"
                      checked={formData.paymentMethod === 'razorpay'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="razorpay" className="payment-label">
                      <div className="payment-info">
                        <h3>Razorpay Payment</h3>
                        <p>Pay securely with UPI, Net Banking, Cards, or Wallets</p>
                        <div className="payment-icons">
                          <span>💳</span>
                          <span>🏦</span>
                          <span>📱</span>
                          <span>💳</span>
                        </div>
                      </div>
                    </label>
                  </div>
                  
                  <div className="payment-option">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="card" className="payment-label">
                      <div className="payment-info">
                        <h3>Credit/Debit Card</h3>
                        <p>Pay with your credit or debit card</p>
                      </div>
                    </label>
                  </div>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div className="card-details">
                    <div className="form-group">
                      <label htmlFor="cardName">Name on Card *</label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cardNumber">Card Number *</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date *</label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cvv">CVV *</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={handlePrevStep}
                  >
                    <ArrowLeft size={16} />
                    Back to Shipping
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleNextStep}
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review Order */}
            {currentStep === 3 && (
              <div className="form-step">
                <h2>Review Your Order</h2>
                
                <div className="order-summary">
                  <h3>Order Items</h3>
                  <div className="order-items">
                    {cart.map(item => (
                      <div key={item.cartId} className="order-item">
                        <img src={item.image} alt={item.name} />
                        <div className="item-info">
                          <h4>{item.name}</h4>
                          <p>Size: {item.size} | Color: {item.color}</p>
                          <span>Qty: {item.quantity}</span>
                        </div>
                        <span className="item-price">₹{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="shipping-summary">
                  <h3>Shipping Address</h3>
                  <div className="address-info">
                    <p><strong>{formData.firstName} {formData.lastName}</strong></p>
                    <p>{formData.address}</p>
                    <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                    <p>{formData.country}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Email: {formData.email}</p>
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={handlePrevStep}
                  >
                    <ArrowLeft size={16} />
                    Back to Payment
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={formData.paymentMethod === 'razorpay' ? handleRazorpayPayment : handlePlaceOrder}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="loading"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock size={16} />
                        Place Order
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="checkout-summary">
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
                <span>Tax (18%)</span>
                <span>₹{(cartTotal * 0.18).toLocaleString()}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{(cartTotal * 1.18).toLocaleString()}</span>
              </div>

              <div className="security-badges">
                <div className="badge">
                  <Lock size={16} />
                  <span>Secure Checkout</span>
                </div>
                <div className="badge">
                  <span>🔒</span>
                  <span>SSL Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
