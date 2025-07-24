import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS for styling

const Home = () => (
  <div className="home-container">
    <div className="hero-section">
      <h1 className="medic-h">Welcome to Medic Page</h1>

      <p className="php">
        Your trusted health companion for medical recommendations.
      </p>

      <Link to="/medic">
        <button className="start-btn">Let's Get Started</button>
      </Link>

      <p className="php">
        You can also buy medicines from{" "}
        <a
          href="https://www.netmeds.com/healthstore?source_attribution=ADW-CPC-Search-NMS-Brand&utm_source=ADW-CPC-Search-NMS-Brand&utm_medium=CPC&utm_campaign=ADW-CPC-Search-NMS-Brand&gad_source=1&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s1xWK_eep1IPv5C_Me74ukPNy9bbqC8EB7MMa9c9f89tEtYbnyy6a8aAlrCEALw_wcB"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netmeds
        </a>
      </p>
    </div>

    {/* AI Section */}
    <div className="ai-card">
      <h2 className="ai-title">Try Our AI-Based Predictor</h2>
      <p className="ai-description">
        Discover intelligent health suggestions powered by AI. Our system leverages modern machine learning to recommend possible conditions based on your symptoms.
      </p>
      <a
        href="https://hackai.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="ai-button"
      >
        Explore HackAI
      </a>
    </div>
  </div>
);

export default Home;
