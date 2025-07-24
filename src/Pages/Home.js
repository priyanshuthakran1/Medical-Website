"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Diagnosis",
      description: "Advanced algorithms analyze your symptoms for accurate health insights",
    },
    {
      icon: "⚡",
      title: "Instant Results",
      description: "Get immediate recommendations without waiting for appointments",
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Verified",
      description: "All suggestions reviewed by certified medical professionals",
    },
    {
      icon: "🎯",
      title: "Personalized Care",
      description: "Tailored health advice based on your symptoms and history",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      text: "Medic Page helped me identify my symptoms quickly and accurately!",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "General Practitioner",
      text: "Impressive accuracy. Great tool for preliminary health assessment.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Healthcare Worker",
      text: "Intuitive interface with reliable results. Perfect for quick consultations.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "50K+", label: "Happy Users" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "24/7", label: "Support" },
    { number: "1000+", label: "Conditions" },
  ]

  return (
    <div className="home-container">
      {/* Enhanced Hero Section */}
      <div className={`hero-section ${isVisible ? "fade-in" : ""}`}>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">❤️</span>
            Trusted Healthcare Companion
          </div>

          <h1 className="medic-h">
            Welcome to <span className="highlight">Medic Page</span>
          </h1>

          <p className="hero-subtitle">
            Your trusted health companion for intelligent medical recommendations, powered by cutting-edge AI
            technology.
          </p>

          <div className="hero-buttons">
            <Link to="/medic">
              <button className="start-btn primary">
                <span>Get Started</span>
                <span className="btn-icon">→</span>
              </button>
            </Link>

            <a
              href="https://www.netmeds.com/healthstore?source_attribution=ADW-CPC-Search-NMS-Brand&utm_source=ADW-CPC-Search-NMS-Brand&utm_medium=CPC&utm_campaign=ADW-CPC-Search-NMS-Brand&gad_source=1&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s1xWK_eep1IPv5C_Me74ukPNy9bbqC8EB7MMa9c9f89tEtYbnyy6a8aAlrCEALw_wcB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="start-btn secondary">
                <span>Buy Medicines</span>
                <span className="btn-icon">🏪</span>
              </button>
            </a>
          </div>

          <div className="trust-indicators">
            <div className="trust-item">
              <span className="trust-icon">🛡️</span>
              <span>HIPAA Compliant</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🩺</span>
              <span>Doctor Verified</span>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose Medic Page?</h2>
          <p className="section-subtitle">Experience the future of healthcare with our innovative platform</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced AI Section */}
      <div className="ai-card enhanced">
        <div className="ai-background">
          <div className="ai-content">
            <div className="ai-icon-large">🤖</div>
            <h2 className="ai-title">
              <span className="sparkle">✨</span>
              AI-Powered Health Predictor
            </h2>
            <p className="ai-description">
              Experience next-generation healthcare technology. Our advanced AI system analyzes thousands of medical
              patterns to provide intelligent health insights.
            </p>

            <div className="ai-stats">
              <div className="ai-stat">
                <div className="ai-stat-number">99.2%</div>
                <div className="ai-stat-label">Prediction Accuracy</div>
              </div>
              <div className="ai-stat">
                <div className="ai-stat-number">{"<"}3s</div>
                <div className="ai-stat-label">Response Time</div>
              </div>
              <div className="ai-stat">
                <div className="ai-stat-number">500+</div>
                <div className="ai-stat-label">Medical Conditions</div>
              </div>
            </div>

            <a
              href="https://hackai.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ai-button enhanced"
            >
              <span>Explore HackAI</span>
              <span className="external-icon">🔗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">Join thousands of satisfied users who trust Medic Page</p>
        </div>

        <div className="testimonial-carousel">
          <div className="testimonial-card active">
            <div className="stars">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <span key={i} className="star">
                  ⭐
                </span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonials[currentTestimonial].name.charAt(0)}</div>
              <div className="author-info">
                <div className="author-name">{testimonials[currentTestimonial].name}</div>
                <div className="author-role">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? "active" : ""}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Take Control of Your Health?</h2>
          <p className="cta-subtitle">Join thousands who have discovered the power of AI-driven healthcare</p>

          <div className="cta-buttons">
            <Link to="/medic">
              <button className="cta-btn primary">
                Start Free Assessment
                <span className="btn-arrow">→</span>
              </button>
            </Link>
            <button className="cta-btn secondary">Learn More</button>
          </div>

          <div className="cta-features">
            <div className="cta-feature">
              <span className="cta-icon">📞</span>
              <span>24/7 Support Available</span>
            </div>
            <div className="cta-feature">
              <span className="cta-icon">💬</span>
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
