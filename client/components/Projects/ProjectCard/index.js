import React, { useState } from 'react';

import SkillItem from '../../skill-item';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div>
        <img src={project.image} alt={project.title} />
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <span>{isMobile ? 'Tap' : 'Hover'} Card for Details</span>
      </div>
      <div>
        <div>
          <p>{project.role}</p>
          <p>{project.type}</p>
        </div>
        <div>
          <span>Tech Stack</span>
          <ul>
            {project.stack.map((skill, index) => (
              <SkillItem skill={skill} key={index} />
            ))}
          </ul>
        </div>
        {project.buttons && (
          <div>
            {project.buttons.map((button, index) => (
              <a
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={button.linkAriaLabel}
                key={index}
                onFocus={() => setFlip(true)}
              >
                <span>{button.text}</span>
                {button.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
