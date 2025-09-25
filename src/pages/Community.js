import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2, User, Calendar, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import './Community.css';

const Community = () => {
  const [activeTab, setActiveTab] = useState('stories');

  const communityStories = [
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        location: 'New York'
      },
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      title: 'My Sustainable Fashion Journey',
      content: 'I\'ve been shopping with this brand for over a year now, and I love how every piece makes me feel confident while knowing I\'m making a positive impact on the environment.',
      likes: 42,
      comments: 8,
      date: '2024-01-15',
      tags: ['sustainability', 'fashion', 'lifestyle']
    },
    {
      id: 2,
      user: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        location: 'San Francisco'
      },
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=400&fit=crop',
      title: 'Perfect Office Look',
      content: 'This blazer is perfect for my office meetings. The quality is outstanding and it fits like a dream. Highly recommend!',
      likes: 28,
      comments: 5,
      date: '2024-01-12',
      tags: ['office', 'blazer', 'quality']
    },
    {
      id: 3,
      user: {
        name: 'Emily Davis',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        location: 'London'
      },
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=400&fit=crop',
      title: 'Summer Collection Love',
      content: 'The new summer collection is absolutely gorgeous! I love the floral patterns and the sustainable materials used.',
      likes: 35,
      comments: 12,
      date: '2024-01-10',
      tags: ['summer', 'floral', 'collection']
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Sustainable Fashion Workshop',
      date: '2024-02-15',
      time: '2:00 PM - 4:00 PM',
      location: 'New York Fashion Center',
      description: 'Join us for an interactive workshop on sustainable fashion practices and styling tips.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Community Meetup',
      date: '2024-02-22',
      time: '6:00 PM - 8:00 PM',
      location: 'San Francisco Store',
      description: 'Connect with fellow fashion enthusiasts and learn about our latest sustainable initiatives.',
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Fashion Show & Launch',
      date: '2024-03-01',
      time: '7:00 PM - 9:00 PM',
      location: 'London Fashion Week',
      description: 'Be the first to see our new collection at our exclusive fashion show event.',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=250&fit=crop'
    }
  ];

  const socialStats = [
    { platform: 'Instagram', followers: '125K', icon: <Instagram size={24} /> },
    { platform: 'Facebook', followers: '89K', icon: <Facebook size={24} /> },
    { platform: 'Twitter', followers: '67K', icon: <Twitter size={24} /> }
  ];

  return (
    <div className="community">
      {/* Hero Section */}
      <section className="community-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Community</h1>
            <p>
              Join thousands of fashion enthusiasts who are making a difference 
              through sustainable fashion choices.
            </p>
            <div className="social-stats">
              {socialStats.map((stat, index) => (
                <div key={index} className="social-stat">
                  <div className="social-icon">{stat.icon}</div>
                  <div className="social-info">
                    <span className="followers">{stat.followers}</span>
                    <span className="platform">{stat.platform}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Tabs */}
      <section className="community-tabs">
        <div className="container">
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === 'stories' ? 'active' : ''}`}
              onClick={() => setActiveTab('stories')}
            >
              Community Stories
            </button>
            <button 
              className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
            <button 
              className={`tab-btn ${activeTab === 'social' ? 'active' : ''}`}
              onClick={() => setActiveTab('social')}
            >
              Social Media
            </button>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      {activeTab === 'stories' && (
        <section className="community-stories">
          <div className="container">
            <div className="stories-grid">
              {communityStories.map(story => (
                <div key={story.id} className="story-card">
                  <div className="story-image">
                    <img src={story.image} alt={story.title} />
                  </div>
                  <div className="story-content">
                    <div className="story-header">
                      <div className="user-info">
                        <img src={story.user.avatar} alt={story.user.name} className="user-avatar" />
                        <div>
                          <h4>{story.user.name}</h4>
                          <span className="user-location">
                            <MapPin size={14} />
                            {story.user.location}
                          </span>
                        </div>
                      </div>
                      <span className="story-date">
                        <Calendar size={14} />
                        {new Date(story.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3>{story.title}</h3>
                    <p>{story.content}</p>
                    <div className="story-tags">
                      {story.tags.map(tag => (
                        <span key={tag} className="tag">#{tag}</span>
                      ))}
                    </div>
                    <div className="story-actions">
                      <button className="action-btn">
                        <Heart size={16} />
                        {story.likes}
                      </button>
                      <button className="action-btn">
                        <MessageCircle size={16} />
                        {story.comments}
                      </button>
                      <button className="action-btn">
                        <Share2 size={16} />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events */}
      {activeTab === 'events' && (
        <section className="community-events">
          <div className="container">
            <div className="events-grid">
              {events.map(event => (
                <div key={event.id} className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <div className="event-details">
                      <div className="event-detail">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="event-detail">
                        <User size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-detail">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p>{event.description}</p>
                    <button className="btn btn-primary">Register Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Media */}
      {activeTab === 'social' && (
        <section className="community-social">
          <div className="container">
            <div className="social-content">
              <h2>Follow Us on Social Media</h2>
              <p>Stay connected and be the first to see our latest collections and updates.</p>
              <div className="social-links">
                <a href="https://instagram.com/clothingstore" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <Instagram size={24} />
                  <span>@clothingstore</span>
                </a>
                <a href="https://facebook.com/clothingstore" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <Facebook size={24} />
                  <span>Clothing Store</span>
                </a>
                <a href="https://twitter.com/clothingstore" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <Twitter size={24} />
                  <span>@clothingstore</span>
                </a>
              </div>
              <div className="social-feed">
                <div className="feed-item">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop" alt="Social post" />
                </div>
                <div className="feed-item">
                  <img src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=300&fit=crop" alt="Social post" />
                </div>
                <div className="feed-item">
                  <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop" alt="Social post" />
                </div>
                <div className="feed-item">
                  <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop" alt="Social post" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Join Community CTA */}
      <section className="join-community">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Community</h2>
            <p>
              Be part of a community that values sustainable fashion and positive change. 
              Share your style, get inspired, and make a difference together.
            </p>
            <div className="cta-actions">
              <button className="btn btn-primary">Join Now</button>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
