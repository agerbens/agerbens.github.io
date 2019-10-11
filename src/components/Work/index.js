import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

import './work.scss';

import projects from './projects';

class Work extends Component {
  render() {
    return (
      <div className="WorkSection">
        <div className="WorkTitle">My Work</div>
        <p className="WorkContent">
          I have been employed at Synapse Studios in Tempe, AZ for the last 6
          years, starting out in 2013 as a QA engineer before transitioning to
          become a Web Application Developer in January 2015.
        </p>

        <p className="WorkContent">
          Prior to that I worked at Arizona Public Services in Phoenix, AZ, as
          an IT Systems Analyst and Application Support Intern.
        </p>

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
