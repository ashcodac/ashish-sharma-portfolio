import React, { useState } from 'react';
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker
} from 'react-icons/fa';
import {
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiJsonwebtokens
} from 'react-icons/si';
import { CgArrowsExchangeAlt } from 'react-icons/cg'; // CI/CD
import './About.css';

const skillLinks = {
  Python: "https://docs.python.org/3/",
  "React.js": "https://react.dev/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "Node.js": "https://nodejs.org/en/docs/",
  MongoDB: "https://www.mongodb.com/docs/",
  PostgreSQL: "https://www.postgresql.org/docs/",
  Git: "https://git-scm.com/doc",
  GitHub: "https://docs.github.com/en",
  AWS: "https://aws.amazon.com/documentation/",
  Docker: "https://docs.docker.com/",
  Postman: "https://learning.postman.com/docs/getting-started/introduction/",
  JWT: "https://jwt.io/introduction",
  "CI/CD": "https://www.atlassian.com/continuous-delivery"
};

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },  // Node.js before TypeScript
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> }, // Added TypeScript here
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "CI/CD", icon: <CgArrowsExchangeAlt /> }
];



const experiences = [
  {
    company: "LetsTute",
    role: "Project Manager",
    tenure: "Jan 2025 - Mar 2025",
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
    company: "The Hobby Tribe",
    role: "Full Stack Web Developer (Intern)",
    tenure: "2022",
    logo: "/THT.png",
    link: "https://www.thehobbytribe.com/"
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
              <div className="experience-info">
                <div className="company-name">{exp.company}</div>
                <div className="position">{exp.role}</div>
                <div className="tenure">{exp.tenure}</div>
              </div>
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
