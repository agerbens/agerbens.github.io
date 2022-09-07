import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';

import Paragraph from '../Paragraph';
import Title from '../Title';

import { projects } from './projects';

const ProjectCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const WorkContainer = styled.div`
  justify-content: center;
  max-width: 1024px;
  margin: 50px auto;
`;

export const Work = () => (
  <WorkContainer>
    <Title>My Work</Title>
    <Paragraph>
      I am currently employed at Synapse Studios in Tempe, AZ since 2013,
      starting out as a QA engineer before transitioning to become a Web
      Application Developer in January 2015.
    </Paragraph>

    <Paragraph>
      Prior to that I worked at Arizona Public Services in Phoenix, AZ, as an IT
      Systems Analyst and Application Support Intern.
    </Paragraph>

    <Title>Projects I've worked on:</Title>
    <ProjectCardGroup>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </ProjectCardGroup>
  </WorkContainer>
);
