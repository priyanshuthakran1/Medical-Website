import React from "react";
import { Link } from "react-router-dom";
import Medic from "./Medic";
import "./Home.css"; // Import CSS for styling

const Home = () => (
  <div className="home-container">
    <div className="hero-section">
      <h1 className="medic-h">Welcome to my meddic Page</h1>
      
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
  </div>
);

export default Home;
