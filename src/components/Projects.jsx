import React, { useEffect } from 'react';
import '../css/Projects.css';

const projectsData = [
  {
    id: 1,
    title: "AlgoVue - DSA Visualizer",
    description: "AlgoVue is an interactive platform designed to visualize algorithms, making complex concepts easier to understand through animations.",
    image: "/image1.PNG", 
    icons: ["https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"],
    link: "https://algovue-orcin.vercel.app/"
  },
  {
    id: 2,
    title: "StrengthHub Fitness - Premium Gym Landing Page",
    description: "A high-conversion landing page for a premium fitness center. Built with a focus on 'Deep Space' aesthetics.",
    image: "/image2.PNG",
    icons: ["https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"],
    link: "https://strengthhub-fitness.vercel.app/"
  }
];

export default function Projects() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName("card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id='Projects' className="projects-section">
      <h1 className="projects-header">
        A selection of <span className="text-purple">recent projects</span>
      </h1>
      
      <div className='project-wrapper'>
        {projectsData.map((project) => (
          <div 
            className='card' 
            key={project.id} 
            style={{ "--bg-image": `url(${project.image})` }} // Passing image to CSS
          >
            <div className="card-spotlight"></div>

            {/* The image is now handled via the CSS variable */}
            <div className='card-img'>
               <div className="img-overlay"></div>
            </div>
            
            <div className='card-info'>
              <h2 className='card-title'>{project.title}</h2>
              <p className='card-desc'>{project.description}</p>
              
              <div className='card-tags'>
                <div className="tag-container">
                  {project.icons.map((icon, index) => (
                    <div key={index} className='tag' style={{ zIndex: 10 - index }}>
                      <img src={icon} alt="tech" className="tag-icon" />
                    </div>
                  ))}
                </div>
                
                <a href={project.link} target="_blank" rel="noreferrer" className="live-link">
                  Check Live Site <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}