import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/chinmaya--meher?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg", color: "#0077B5" },
    { name: "GitHub", url: "https://github.com/Chinmaya-Meher", icon: "https://cdn.simpleicons.org/github/white", color: "#ffffff" },
    { name: "Instagram", url: "https://www.instagram.com/chinmaya._.meher_?igsh=MWg0dzJ2bmdoOWFqcQ==", icon: "https://cdn.simpleicons.org/instagram/E4405F", color: "#E4405F" },
  ];

  return (
    <section id="Contact" className="contact-section">
      {/* Background Mesh for extra depth */}
      <div className="contact-mesh"></div>
      
      <div className="contact-container">
        <div className="contact-badge">Available for projects</div>
        <h2 className="contact-header">Let's build <span className="text-purple">together.</span></h2>
        
        <div className="social-pills-container">
          {socials.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              className="social-pill"
              style={{ 
                "--hover-color": link.color,
                animationDelay: `${i * 0.1}s` 
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="pill-shimmer"></div>
              <img src={link.icon} alt={link.name} className="pill-icon" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        <div className="contact-footer">
          <p>Or shoot a DM on any platform</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;