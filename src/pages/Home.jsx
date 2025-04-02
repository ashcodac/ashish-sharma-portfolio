import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        {/* Left Section - Profile Image */}
        <div className="home-left">
          <img
            src="/profile-image.png"
            alt="Ashish Sharma"
            className="profile-image"
          />
        </div>

        {/* Right Section - Content */}
        <div className="home-right">
          <h1>Hi, I'm Ashish Sharma</h1>
          <p className="tagline">Full Stack Developer | React & Python Enthusiast</p>
          <p className="intro-text">
            Passionate about building scalable, user-friendly applications. 
            Let's create something amazing together!
          </p>
          <div className="home-buttons">
            <Link to="/projects" className="home-btn">View Projects</Link>
            <Link to="/contact" className="home-btn">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
