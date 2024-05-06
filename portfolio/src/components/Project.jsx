import React from 'react';

function Project({ title, image, description, url, repo }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
        <a href={repo} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;