import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data";
const Portfolio = () => {
  return (
    <div className="portfolio-section py-5" style={{ background: "#e9ecef" }}>
      <div className="container">
        <h2 className="mb-4">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
