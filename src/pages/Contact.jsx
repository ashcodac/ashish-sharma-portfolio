import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <img src="/profile-image.png" alt="Profile" className="profile-image" />
        <h2>Contact Me</h2>
        <p>Let's connect! Reach out via email or social media.</p>
        <div className="contact-links">
          <a href="https://github.com/ashcodac" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ashcodac" target="_blank" rel="noopener noreferrer" className="contact-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:ashcodac18@gmail.com" className="contact-icon">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
