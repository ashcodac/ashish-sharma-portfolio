import React from "react";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Ashish Sharma</Link>
        
        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            {/* Resume Button - Visible Only on Desktop */}
            <li className="nav-item d-none d-lg-block">
              <a href="/Ashish-Sharma.pdf" download className="nav-link resume-btn">
                <FaFileDownload className="resume-icon" /> Resume
              </a>
            </li>
          </ul>

          {/* Resume Button - Inside Dropdown for Mobile */}
          <div className="d-lg-none text-center mt-2">
            <a href="/Ashish-Sharma.pdf" download className="nav-link resume-btn">
              <FaFileDownload className="resume-icon" /> Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
