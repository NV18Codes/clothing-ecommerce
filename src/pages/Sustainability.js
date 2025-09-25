import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, Users, Globe, ArrowRight, CheckCircle, Award, Heart } from 'lucide-react';
import { sustainabilityInitiatives } from '../data/mockData';
import './Sustainability.css';

const Sustainability = () => {
  const impactStats = [
    { number: '85%', label: 'Reduction in Water Usage', icon: <Leaf size={32} /> },
    { number: '100%', label: 'Organic Cotton from India', icon: <Recycle size={32} /> },
    { number: '50K+', label: 'Trees Planted in India', icon: <Globe size={32} /> },
    { number: '0', label: 'Plastic Waste', icon: <Users size={32} /> }
  ];

  const materials = [
    {
      name: 'Organic Cotton',
      percentage: 60,
      description: 'Sourced from Indian farms, grown without harmful pesticides, using 91% less water than conventional cotton.',
      benefits: ['Reduced water usage', 'No harmful chemicals', 'Supports Indian farmers', 'Biodegradable']
    },
    {
      name: 'Recycled Polyester',
      percentage: 25,
      description: 'Made from recycled plastic bottles, reducing waste and energy consumption.',
      benefits: ['Reduces plastic waste', 'Lower energy consumption', 'Durable and long-lasting', 'Easy to care for']
    },
    {
      name: 'Hemp',
      percentage: 10,
      description: 'One of the most sustainable fibers, requiring minimal water and no pesticides.',
      benefits: ['Minimal water usage', 'No pesticides needed', 'Carbon negative', 'Naturally antimicrobial']
    },
    {
      name: 'Tencel',
      percentage: 5,
      description: 'Made from sustainably sourced wood pulp using a closed-loop process.',
      benefits: ['Closed-loop process', 'Biodegradable', 'Soft and comfortable', 'Wrinkle-resistant']
    }
  ];

  const certifications = [
    {
      name: 'GOTS Certified',
      description: 'Global Organic Textile Standard ensures organic status of textiles.',
      icon: <Award size={48} />
    },
    {
      name: 'Fair Trade',
      description: 'Ensures fair wages and safe working conditions for all workers.',
      icon: <Users size={48} />
    },
    {
      name: 'Carbon Neutral',
      description: 'We offset all our carbon emissions through verified programs.',
      icon: <Globe size={48} />
    },
    {
      name: 'B-Corp Certified',
      description: 'Certified B Corporation meeting high standards of social and environmental performance.',
      icon: <Heart size={48} />
    }
  ];

  return (
    <div className="sustainability">
      {/* Hero Section */}
      <section className="sustainability-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Sustainability at Our Core</h1>
            <p>
              We believe fashion should be a force for good. Every decision we make 
              considers the impact on our planet and future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-stats">
        <div className="container">
          <div className="stats-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="initiatives">
        <div className="container">
          <div className="section-header">
            <h2>Our Sustainability Initiatives</h2>
            <p>How we're making a positive impact on the environment</p>
          </div>
          <div className="initiatives-grid">
            {sustainabilityInitiatives.map(initiative => (
              <div key={initiative.id} className="initiative-card">
                <div className="initiative-icon">
                  <span className="icon-emoji">{initiative.icon}</span>
                </div>
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="materials">
        <div className="container">
          <div className="section-header">
            <h2>Sustainable Materials</h2>
            <p>Every fiber we use is carefully chosen for its environmental impact</p>
          </div>
          <div className="materials-content">
            {materials.map((material, index) => (
              <div key={index} className="material-card">
                <div className="material-header">
                  <h3>{material.name}</h3>
                  <div className="material-percentage">
                    <div className="percentage-bar">
                      <div 
                        className="percentage-fill" 
                        style={{ width: `${material.percentage}%` }}
                      ></div>
                    </div>
                    <span>{material.percentage}%</span>
                  </div>
                </div>
                <p className="material-description">{material.description}</p>
                <div className="material-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {material.benefits.map((benefit, i) => (
                      <li key={i}>
                        <CheckCircle size={16} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <div className="container">
          <div className="section-header">
            <h2>Our Certifications</h2>
            <p>Third-party verified standards that ensure our commitment to sustainability</p>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">{cert.icon}</div>
                <h3>{cert.name}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="supply-chain">
        <div className="container">
          <div className="supply-chain-content">
            <div className="supply-chain-text">
              <h2>Transparent Supply Chain</h2>
              <p>
                We believe in complete transparency about where our clothes come from. 
                Every step of our supply chain is carefully monitored to ensure ethical 
                practices and environmental responsibility.
              </p>
              <div className="supply-chain-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Material Sourcing</h4>
                    <p>We source materials from certified organic and sustainable farms.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Manufacturing</h4>
                    <p>Our manufacturing partners follow strict environmental and labor standards.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Packaging</h4>
                    <p>All packaging is made from recycled and biodegradable materials.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Delivery</h4>
                    <p>We use carbon-neutral shipping methods for all deliveries.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="supply-chain-image">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=500&fit=crop" 
                alt="Sustainable Supply Chain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="future-goals">
        <div className="container">
          <div className="section-header">
            <h2>Our Future Goals</h2>
            <p>Our commitment to continuous improvement in sustainability</p>
          </div>
          <div className="goals-grid">
            <div className="goal-card">
              <h3>2024 Goals</h3>
              <ul>
                <li>100% renewable energy in all facilities</li>
                <li>Zero waste to landfill</li>
                <li>50% reduction in packaging materials</li>
                <li>Launch take-back program for old clothes</li>
              </ul>
            </div>
            <div className="goal-card">
              <h3>2025 Goals</h3>
              <ul>
                <li>Carbon negative operations</li>
                <li>100% circular design principles</li>
                <li>Partner with 100% sustainable suppliers</li>
                <li>Launch repair and upcycling services</li>
              </ul>
            </div>
            <div className="goal-card">
              <h3>2030 Vision</h3>
              <ul>
                <li>Net positive environmental impact</li>
                <li>Regenerative agriculture partnerships</li>
                <li>Industry-leading sustainability standards</li>
                <li>Global community of conscious consumers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sustainability-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Mission</h2>
            <p>
              Every purchase you make supports our mission to create a more 
              sustainable fashion industry. Together, we can make a difference.
            </p>
            <div className="cta-actions">
              <Link to="/shop/men" className="btn btn-primary">
                Shop Sustainable Men's
                <ArrowRight size={16} />
              </Link>
              <Link to="/shop/women" className="btn btn-secondary">
                Shop Sustainable Women's
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
