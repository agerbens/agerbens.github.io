import React from 'react';

import './Work.css';

import { ProjectCard } from './ProjectCard';
import { projects } from './projects';

export const Work = () => (
  <div className="work-container">
    <div className="work-title">My Work</div>
    <div className="work-paragraph">
      I am currently employed at Synapse Studios in Tempe, AZ since 2013,
      starting out as a QA engineer before transitioning to become a Web
      Application Developer in January 2015.
    </div>

    <div className="work-paragraph">
      Prior to that I worked at Arizona Public Services in Phoenix, AZ, as an IT
      Systems Analyst and Application Support Intern.
    </div>

    <div className="workTitle">Projects I've worked on:</div>
    <div className="work-project-card-group">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </div>
);
