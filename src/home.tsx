import React from "react";
import "./styles/Banner.css";
import "./styles/TrustedBrands.css"; // New CSS file for the brands section
import heroImage from "./assets/hero.png"; // Example image import

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="banner">
        <nav className="navbar">
          <div className="nav-links">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Events</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="nav-buttons">
            <a href="#">Support</a>
            <a href="#">Login</a>
            <button className="demo-btn">Demo</button>
          </div>
        </nav>
        <div className="banner-content">
          <h1>Transforming Social Media for the Telecoms Industry!</h1>
          <p>
            Our AI-powered social media post generator helps telecom businesses
            create engaging content and build customer loyalty.
          </p>
        </div>
        <div className="banner-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>

      {/* Trusted Brands Section */}
      <section className="trusted-brands">
        <h2>Trusted by thousands of top DTC brands</h2>
        <div className="brand-container">
          <img src="/src/assets/brand1.png" alt="Brand 1" />
          <img src="/src/assets/brand2.png" alt="Brand 2" />
          <img src="/src/assets/brand3.png" alt="Brand 3" />
          <img src="/src/assets/brand4.png" alt="Brand 4" />
        </div>
        <div className="scroll-indicator">— · · · ·</div>
      </section>
    </div>
  );
};

export default Home;
