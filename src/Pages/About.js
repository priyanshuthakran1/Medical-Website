import React from "react";
import "../App.css";

const About = () => (
  <div className="about-container">
    <div className="about-content">
      <h2>About Us</h2>
      <p>
        Welcome to <span className="highlight">Medic Page</span>, your trusted health companion. Our platform helps users find 
        the right medicines by simply entering a disease name. With a vast database of medical recommendations, we aim to provide 
        <strong> accurate, reliable, and up-to-date </strong> information to improve healthcare accessibility.
      </p>

      <h3>Our Mission</h3>
      <p>
        At <span className="highlight">Medic Page</span>, we believe that <strong>knowledge empowers health.</strong> Our goal is to 
        make medical information easily accessible to everyone, helping individuals make informed decisions about their well-being.
      </p>

      <h3>How It Works</h3>
      <div className="steps">
        <div className="step">
          <span>1️⃣</span>
          <strong>Search a Disease</strong>
          <p>Type in the name of a disease or condition.</p>
        </div>
        <div className="step">
          <span>2️⃣</span>
          <strong>Get Medicine Recommendations</strong>
          <p>Instantly receive a list of recommended medicines from trusted medical sources.</p>
        </div>
        <div className="step">
          <span>3️⃣</span>
          <strong>Stay Informed</strong>
          <p>Learn about symptoms, treatments, and precautions to take.</p>
        </div>
      </div>

      <h3>Why Choose Us?</h3>
      <ul className="features">
        <li>✅ <strong>Reliable Information</strong> – Our database is built with input from medical experts.</li>
        <li>✅ <strong>User-Friendly</strong> – Easy search functionality for quick results.</li>
        <li>✅ <strong>Up-to-Date Data</strong> – Regularly updated medicine recommendations.</li>
      </ul>

      <p className="disclaimer">
        ⚠️ <strong>Disclaimer:</strong> Our platform provides general medical information, but we always recommend 
        consulting a <strong>healthcare professional</strong> before taking any medication.
      </p>
    </div>
  </div>
);

export default About;
