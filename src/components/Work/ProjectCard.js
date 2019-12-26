import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  display: inline-block;
  padding: 5px 5px;
  margin: 5px 5px;
  border: 1px solid black;
  background: rgb(32, 44, 57);
`;

const ProjectCardTitle = styled.a`
  padding: 10px 10px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  white-space: nowrap;
`;

const ProjectCard = function({ project }) {
  return (
    <ProjectCardContainer>
      <ProjectCardTitle
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.name}
      </ProjectCardTitle>
    </ProjectCardContainer>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
export default ProjectCard;
