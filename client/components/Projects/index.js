import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';

const Projects = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    projects: {
      margin: 20,
    },
  });
  const classes = useStyles();

  return (
    <section>
      <Box>
        <Typography variant="h2">Projects</Typography>
        <Typography>
          Reinforcing my knowledge practically by applying new skills and
          open-source frameworks to complete personal projects.
        </Typography>
      </Box>
      <Box className={classes.projects}>
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Box>
    </section>
  );
};

export default Projects;
