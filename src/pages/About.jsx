import React, { useState } from 'react';
import { FaPython, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiDjango, SiFlask, SiFastapi, SiMongodb, SiPostgresql, SiGit, SiGithub, SiJavascript } from 'react-icons/si';
import './About.css';

const skillLinks = {
  Python: "https://docs.python.org/3/",
  Django: "https://docs.djangoproject.com/en/stable/",
  Flask: "https://flask.palletsprojects.com/en/2.3.x/",
  FastAPI: "https://fastapi.tiangolo.com/",
  "React.js": "https://react.dev/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "Node.js": "https://nodejs.org/en/docs/",
  MongoDB: "https://www.mongodb.com/docs/",
  PostgreSQL: "https://www.postgresql.org/docs/",
  Git: "https://git-scm.com/doc",
  GitHub: "https://docs.github.com/en",
  AWS: "https://aws.amazon.com/documentation/"
};

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "AWS", icon: <FaAws /> }
];

const experiences = [
  {
    company: "LetsTute",
    role: "Project Manager",
    tenure: "Jan 2025 - Present",
    logo: "/LT.png",
    link: "https://www.letstute.com/"
  },
  {
    company: "The Saviour’s Institute",
    role: "Physics Teacher",
    tenure: "Mar 2024 - Oct 2024",
    logo: "/TSI.png",
    hoverLogo: "/TSI-Hover.png",
    link: "https://www.thesavioursinstitute.com/index.html"
  },
  {
    company: "Aktines Consulting Pvt. Ltd.",
    role: "Software Developer",
    tenure: "Aug 2023 - Jan 2024",
    logo: "/Aktines.png",
    link: "https://www.aktines.com/"
  },
  {
    company: "The Hobby Tribe",
    role: "Full Stack Web Developer (Intern)",
    tenure: "2022",
    logo: "/THT.png",
    link: "https://www.thehobbytribe.com/"
  },
  {
    company: "Hari Krishna Exports",
    role: "Full Stack Web Developer (Intern)",
    tenure: "2021",
    logo: "/HK.png",
    link: "https://www.hk.co/"
  }
];

const About = () => {
  const [hoveredExp, setHoveredExp] = useState(null);

  return (
    <div className="about-container">
      {/* Work Experience Section (Left) */}
      <div className="quadrant experience">
        <h2>Work Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <a 
              key={index} 
              href={exp.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="experience-card"
              onMouseEnter={() => setHoveredExp(exp.company)}
              onMouseLeave={() => setHoveredExp(null)}
            >
              {/* Left Side: Text */}
              <div className="experience-info">
                <div className="company-name">{exp.company}</div>
                <div className="position">{exp.role}</div>
                <div className="tenure">{exp.tenure}</div>
              </div>

              {/* Right Side: Logo */}
              <img 
                src={exp.hoverLogo && hoveredExp === exp.company ? exp.hoverLogo : exp.logo} 
                alt={`${exp.company} Logo`} 
                className="company-logo"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Skills Section (Right) */}
      <div className="quadrant skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <a 
              key={index} 
              href={skillLinks[skill.name]} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="skill"
              aria-label={`Learn more about ${skill.name}`}
            >
              <span>{skill.name}</span>
              {skill.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
