import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Ashish Sharma
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
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
