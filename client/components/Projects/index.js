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
    description: {
      color: theme.palette.text.primary,
      fontSize: 20,
      textAlign: 'center',
      paddingBottom: '1em',
      width: '100%',
    },
    title: {
      color: theme.palette.text.primary,
      fontSize: 32,
      fontWeight: 500,
      marginBottom: '.2em',
    },
  });
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '7em',
        paddingBottom: '12em',
      }}
      name="projects"
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography className={classes.title} variant="h2">
          Projects
        </Typography>
        <Typography className={classes.description}>
          Some examples of my work during my time at Fullstack Academy.
        </Typography>
      </Box>
      <Box className={classes.projects} sx={{ display: 'flex' }}>
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
