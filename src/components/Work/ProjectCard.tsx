import React from 'react';

import './ProjectCard.css';

type Props = {
  project: {
    name: string;
    url: string;
  };
};
export const ProjectCard = function ({ project }: Props) {
  return (
    <div className="project-card-container">
      <a
        className="project-card-title"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.name}
      </a>
    </div>
  );
};
