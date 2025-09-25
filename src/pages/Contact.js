import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, HelpCircle, ShoppingBag } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Visit Our Store',
      details: ['123 Fashion Street', 'Style City, SC 12345', 'United States'],
      action: 'Get Directions'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri: 9AM-6PM', 'Sat-Sun: 10AM-4PM'],
      action: 'Call Now'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: ['hello@clothingstore.com', 'support@clothingstore.com', 'press@clothingstore.com'],
      action: 'Send Email'
    },
    {
      icon: <Clock size={24} />,
      title: 'Store Hours',
      details: ['Monday - Friday: 9AM - 8PM', 'Saturday: 10AM - 6PM', 'Sunday: 12PM - 5PM'],
      action: 'View All Hours'
    }
  ];

  const faqItems = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all items in original condition. Items must be unworn, with tags attached, and in original packaging.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days within the US. Express shipping is available for 1-2 business days. International shipping takes 7-14 business days.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by location.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and various local payment methods depending on your location.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in your account dashboard.'
    },
    {
      question: 'Do you have a size guide?',
      answer: 'Yes, we provide detailed size guides for all our products. You can find them on each product page or in our help center.'
    }
  ];

  const supportTopics = [
    {
      icon: <ShoppingBag size={24} />,
      title: 'Order Support',
      description: 'Help with orders, shipping, and returns',
      link: '#'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      link: '#'
    },
    {
      icon: <HelpCircle size={24} />,
      title: 'Help Center',
      description: 'Browse our comprehensive help articles',
      link: '#'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>
              We'd love to hear from you. Whether you have a question about our products, 
              need help with an order, or just want to say hello, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
                <button className="contact-action">{info.action}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-map-layout">
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="product">Product Question</option>
                    <option value="sustainability">Sustainability</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <MapPin size={48} />
                <h3>Visit Our Store</h3>
                <p>123 Fashion Street, Style City, SC 12345</p>
                <button className="btn btn-outline">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Topics */}
      <section className="support-topics">
        <div className="container">
          <div className="section-header">
            <h2>Need Help?</h2>
            <p>Choose the best way to get the help you need</p>
          </div>
          <div className="support-grid">
            {supportTopics.map((topic, index) => (
              <div key={index} className="support-card">
                <div className="support-icon">{topic.icon}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <a href={topic.link} className="support-link">Get Help</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our products and services</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
