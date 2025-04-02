import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectScreenshot from "/github-user-finder.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="project-card">
        <img src={projectScreenshot} alt="GitHub User Finder" className="project-image" />
        <div className="project-info">
          <h3 className="project-title">GitHub User Finder</h3>
          <p className="project-description">
            A React-based application that fetches and displays GitHub user profiles.
          </p>
          <div className="project-links">
            <a href="https://github.com/yourgithub/github-user-finder" target="_blank" rel="noopener noreferrer" className="project-btn">
              <FaGithub className="icon" /> GitHub
            </a>
            <a href="https://github-user-finder-rust.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn">
              <FaExternalLinkAlt className="icon" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
