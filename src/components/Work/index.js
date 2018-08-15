import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

import './work.css';

import projects from './projects';

class Work extends Component {
  render() {
    return (
      <div className="WorkSection">
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    );
  }
}

export default Work;
