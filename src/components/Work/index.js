import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

import './work.css';

import projects from './projects';

class Work extends Component {
  render() {
    return (
      <div className="WorkSection">
        <div className="WorkTitle">Projects I've worked on:</div>
        <div className="ProjectCardGroup">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
