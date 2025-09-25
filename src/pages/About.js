import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Award, Globe, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '10K+', label: 'Products Sold' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Sustainable Materials' }
  ];

  const values = [
    {
      icon: <Heart size={48} />,
      title: 'Passion for Fashion',
      description: 'We believe fashion should be an expression of your personality while respecting the planet.'
    },
    {
      icon: <Globe size={48} />,
      title: 'Environmental Responsibility',
      description: 'Every decision we make considers the impact on our environment and future generations.'
    },
    {
      icon: <Users size={48} />,
      title: 'Community First',
      description: 'We support fair trade practices and ensure our workers are treated with dignity and respect.'
    },
    {
      icon: <Award size={48} />,
      title: 'Quality Excellence',
      description: 'We never compromise on quality, ensuring every piece meets our high standards.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Our Story</h1>
            <p>
              Founded in 2019, we started with a simple mission: to create beautiful, 
              sustainable fashion that doesn't compromise on style or ethics. Today, 
              we're proud to be a leading force in the sustainable fashion movement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To revolutionize the fashion industry by creating beautiful, sustainable 
                clothing that empowers people to express their style while protecting 
                our planet. We believe that fashion and sustainability can coexist, 
                and we're proving it every day.
              </p>
              <p>
                Our commitment extends beyond just creating clothes. We're building a 
                community of conscious consumers who care about the impact of their 
                choices on the environment and society.
              </p>
              <Link to="/sustainability" className="btn btn-primary">
                Learn About Our Impact
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mission-image">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=500&fit=crop" 
                alt="Our Mission" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate people behind our brand</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face" 
                alt="Sarah Johnson" 
              />
              <h3>Sarah Johnson</h3>
              <p>Founder & CEO</p>
              <span>Passionate about sustainable fashion and ethical business practices.</span>
            </div>
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                alt="Michael Chen" 
              />
              <h3>Michael Chen</h3>
              <p>Head of Design</p>
              <span>Creative visionary with 10+ years in sustainable fashion design.</span>
            </div>
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" 
                alt="Emily Davis" 
              />
              <h3>Emily Davis</h3>
              <p>Sustainability Director</p>
              <span>Environmental scientist dedicated to making fashion more sustainable.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Journey</h2>
            <p>
              Be part of the sustainable fashion revolution. Explore our collections 
              and discover how style and sustainability can work together.
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

export default About;
