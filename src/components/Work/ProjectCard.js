import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectCard extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
  };
  render() {
    const { project } = this.props;
    return (
      <div className="ProjectCard">
        <a
          className="ProjectCardTitle"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.name}
        </a>
      </div>
    );
  }
}

export default ProjectCard;
