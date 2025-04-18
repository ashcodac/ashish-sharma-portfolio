import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectScreenshot from "/github-user-finder.png"; // GitHub User Finder Image
import taskforgeScreenshot from "/taskforge.png"; // TaskForge Image

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>

      <div className="projects-cards-wrapper">
        {/* GitHub User Finder Project */}
        <div className="project-card">
          <img src={projectScreenshot} alt="GitHub User Finder" className="project-image" />
          <div className="project-info">
            <h3 className="project-title">GitHub User Finder</h3>
            <p className="project-description">
            A React app that searches GitHub profiles via API, showing repos, followers, and stats. Features real-time search with debouncing and dark/light mode. Built with React, TailwindCSS, and Vite.
            </p>
            <div className="project-links">
              <a href="https://github.com/ashcodac/github-user-finder" target="_blank" rel="noopener noreferrer" className="project-btn">
                <FaGithub className="icon" /> GitHub
              </a>
              <a href="https://github-user-finder-rust.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn">
                <FaExternalLinkAlt className="icon" /> Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* TaskForge Project */}
        <div className="project-card">
          <img src={taskforgeScreenshot} alt="TaskForge" className="project-image" />
          <div className="project-info">
            <h3 className="project-title">TaskForge</h3>
            <p className="project-description">
            A full-stack productivity dashboard with React & Python backends (FastAPI/Flask). Features Kanban tasks, dark mode, and trash/recovery system. Planning JWT auth & Docker deployment.
            </p>
            <div className="project-links">
              <a href="https://github.com/ashcodac/TaskForge" target="_blank" rel="noopener noreferrer" className="project-btn">
                <FaGithub className="icon" /> GitHub
              </a>
              <a href="https://taskforge-b98gekzoa-ashishsharma7s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn">
                <FaExternalLinkAlt className="icon" /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
