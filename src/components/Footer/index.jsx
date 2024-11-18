import React from 'react';
import { socialLinks } from '../../data';

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <div className="container text-center">
        <h2>Contact Me</h2>
        <div className="mb-4">
          {socialLinks.map((social, index) => (
            social.link && ( // Check if the link is not empty
              <a 
                key={index} 
                href={social.link} 
                className="mx-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className={`${social.icon} fs-3`}></i>
              </a>
            )
          ))}
        </div>
        <p className="mt-3">&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
