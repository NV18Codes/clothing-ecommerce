import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, onSuccess }) => {
  const { setUser } = useApp();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  // Demo credentials
  const demoCredentials = [
    { email: 'demo@clothingstore.com', password: 'demo123', name: 'Demo User' },
    { email: 'admin@clothingstore.com', password: 'admin123', name: 'Admin User' },
    { email: 'customer@clothingstore.com', password: 'customer123', name: 'Customer User' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (isSignUp) {
      // Validation for sign up
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setIsLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        setIsLoading(false);
        return;
      }

      if (!formData.agreeToTerms) {
        setError('Please agree to the terms and conditions');
        setIsLoading(false);
        return;
      }

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Create user account
        setUser({
          id: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email
        });

        onSuccess();
        onClose();
      } catch (error) {
        setError('Something went wrong. Please try again.');
      }
    } else {
      // Sign in logic
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Check demo credentials
        const user = demoCredentials.find(
          cred => cred.email === formData.email && cred.password === formData.password
        );

        if (user) {
          setUser({
            id: user.email,
            name: user.name,
            email: user.email
          });
          onSuccess();
          onClose();
        } else {
          setError('Invalid email or password. Please try again.');
        }
      } catch (error) {
        setError('Something went wrong. Please try again.');
      }
    }

    setIsLoading(false);
  };

  const handleDemoLogin = (credentials) => {
    setFormData(prev => ({
      ...prev,
      email: credentials.email,
      password: credentials.password
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    });
    setError('');
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="auth-modal-content">
          <div className="auth-header">
            <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
            <p>
              {isSignUp 
                ? 'Join us and start your sustainable fashion journey' 
                : 'Sign in to continue shopping'
              }
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {isSignUp && (
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <div className="input-group">
                    <User size={20} className="input-icon" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <div className="input-group">
                    <User size={20} className="input-icon" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-group">
                <Mail size={20} className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <Lock size={20} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={isSignUp ? 'Create a password' : 'Enter your password'}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-group">
                  <Lock size={20} className="input-icon" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}

            {isSignUp && (
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <span>
                    I agree to the{' '}
                    <a href="/terms" className="terms-link">
                      Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="terms-link">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary auth-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading"></div>
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </>
              ) : (
                isSignUp ? 'Create Account' : 'Sign In'
              )}
            </button>
          </form>

          {!isSignUp && (
            <div className="demo-credentials">
              <h4>Demo Credentials</h4>
              <div className="demo-buttons">
                {demoCredentials.map((cred, index) => (
                  <button
                    key={index}
                    className="demo-btn"
                    onClick={() => handleDemoLogin(cred)}
                  >
                    {cred.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="auth-footer">
            <p>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button onClick={toggleMode} className="toggle-mode">
                {isSignUp ? 'Sign in here' : 'Sign up here'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
