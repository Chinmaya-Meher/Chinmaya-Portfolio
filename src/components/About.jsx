import React, { useState } from 'react';
import '../css/About.css';

const About = () => {
  // State to track if the email was recently copied
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "chinmaya.at.work14@gmail.com";
    
    // Copy to clipboard without showing an alert popup
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      // Reset the button text back to original after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const techItems = [
    { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Express", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlDx-wmb9kv0mAr6Ff4eG1y9dwUCJ9sYXPQ&s" },
    { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "Aceternity", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Dthl_XgdTNq-e5FNZ-k45Uy9rFJIRf903w&s" }
  ];

  return (
    <section id="About" className="about-section">
      <div className="bento-container">
        
        {/* LEFT COLUMN */}
        <div className="column-left">
          
          <div className="box box-a">
            <div className="box-content align-bottom-left">
              <h2 className="title-lg">
                Full-stack developer focused on building real-world products
              </h2>
              <p className="desc-md">
                Turning complex problems into fast, scalable, and user-centric web applications.
              </p>
            </div>
          </div>

          <div className="row-bottom">
            <div className="column-split-b">
              
              <div className="box box-b-top">
                <div className="box-content align-top-left">
                  <p className="desc-xl">
                    Tech enthusiast with a <span className="text-gradient">passion for development.</span>
                  </p>
                </div>
              </div>

              {/* Interactive Email Box */}
              <div className="box box-b-bottom bg-glow">
                <div className="box-content align-center">
                  <h2 className="cta-title">Do you want to start a project together?</h2>
                  <button 
                    className={`btn-copy ${copied ? 'copied' : ''}`} 
                    onClick={handleCopyEmail}
                  >
                    {/* The button text changes based on the 'copied' state */}
                    {copied ? "Email Copied! ✅" : "Copy My Email"}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="box box-c">
              <div className="scoop-img-container">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                  alt="Tech Mesh" 
                  className="scoop-bg-img" 
                />
              </div>
              <div className="box-content align-bottom-left">
                <span className="label">The Inside Scoop</span>
                <p className="title-md">
                  Currently exploring Real-time Systems and Advanced Animation Libraries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="column-right">
          
          <div className="box box-d">
            <div className="box-content align-top-left">
              <span className="label">Growth Mindset</span>
              <h2 className="title-md">My Tech Stack</h2>
              
              <div className="tech-stack-grid">
                {techItems.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <img src={tech.icon} alt={tech.name} className="tech-logo" />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="box box-e">
            <div className="box-content align-bottom-left">
              <span className="label">Active Project</span>
              <h2 className="title-md text-purple">INVOICEGUARD</h2>
              <p className="desc-sm">
                An AI-driven platform that validates invoices and detects fraudulent 
                billing patterns for Indian SMEs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;