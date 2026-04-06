import React from 'react';
import '../css/Skills.css';

const skills = [
  { name: "React", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", size: "large" },
  { name: "JavaScript", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", size: "medium" },
  { name: "Tailwind CSS", level: "Intermediate", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", size: "medium" },
  { name: "Node.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", size: "small" },
  { name: "Python", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", size: "small" },
  { name: "Java", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", size: "large" },
  { name: "MongoDB", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", size: "medium" },
  { name: "C", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", size: "small" },
  { name: "SQL", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", size: "small" },
  { name: "Express", level: "Intermediate", icon: "https://cdn.simpleicons.org/express/white", size: "medium" },
  { name: "HTML5", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", size: "small" },
  { name: "CSS3", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", size: "small" },
  { name: "Framer Motion", level: "Expert", icon: "https://cdn.simpleicons.org/framer/0055FF", size: "small" },
  { name: "Git", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", size: "small" },
];

const Skills = () => {
  return (
    <section id='Skills' className="skills-section">
      <div className="skills-container">
        <h2 className="skills-header">
          Technical <span className="text-purple">Arsenal</span>
        </h2>
        
        <div className="bento-grid">
          {skills.map((skill, index) => (
            <div key={index} className={`skill-card ${skill.size}`}>
              <div className="skill-content">
                <div className="icon-box">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                </div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
              </div>
              <div className="card-bg-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;