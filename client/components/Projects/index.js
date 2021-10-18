import React from 'react';

import ProjectCard from './project-card';

import { projectsData } from '../../data';

const Projects = () => {
  return (
    <section>
      <div>
        <h2>Projects</h2>
        <p>
          Reinforcing my knowledge practically by applying new skills and
          open-source frameworks to complete personal projects.
        </p>
      </div>
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
