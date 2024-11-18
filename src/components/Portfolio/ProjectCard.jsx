import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
