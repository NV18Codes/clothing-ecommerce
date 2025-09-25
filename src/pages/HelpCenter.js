import React from 'react';
import { Search, MessageCircle, Phone, Mail } from 'lucide-react';
import './HelpCenter.css';

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, select your desired items, choose size and color, and click 'Add to Cart'. Then proceed to checkout to complete your purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, PayPal, and other secure payment methods. All transactions are encrypted and secure."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 2-4 business days within India. Express shipping is available for 1-2 business days. International shipping may take 7-14 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items with tags attached. Returns are free and easy through our online portal."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide from our Bangalore facility. Shipping costs and delivery times vary by destination."
    }
  ];

  const contactMethods = [
    {
      icon: <MessageCircle size={24} />,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Start Chat"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Support",
      description: "Call us at +91 80 1234 5678",
      action: "Call Now"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Support",
      description: "Send us an email",
      action: "Send Email"
    }
  ];

  return (
    <div className="help-center">
      <div className="help-header">
        <div className="container">
          <h1>Help Center</h1>
          <p>Find answers to your questions or get in touch with our support team</p>
          
          <div className="search-box">
            <Search size={20} />
            <input type="text" placeholder="Search for help..." />
          </div>
        </div>
      </div>

      <div className="help-content">
        <div className="container">
          <div className="help-sections">
            {/* Contact Methods */}
            <section className="contact-methods">
              <h2>Get in Touch</h2>
              <div className="contact-grid">
                {contactMethods.map((method, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-icon">{method.icon}</div>
                    <h3>{method.title}</h3>
                    <p>{method.description}</p>
                    <button className="btn btn-primary">{method.action}</button>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Help */}
            <section className="additional-help">
              <h2>Still Need Help?</h2>
              <p>If you can't find what you're looking for, our support team is here to help.</p>
              <div className="help-actions">
                <button className="btn btn-primary">Contact Support</button>
                <button className="btn btn-outline">View All Topics</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
