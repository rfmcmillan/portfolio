import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import { useInView, InView } from 'react-intersection-observer';

const Projects = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    description: {
      color: theme.palette.text.primary,
      fontSize: 20,
      textAlign: 'center',
      paddingBottom: '1em',
      width: '100%',
    },
    projects: {
      margin: 20,
    },
    title: {
      color: theme.palette.text.primary,
      fontSize: 32,
      fontWeight: 500,
      marginBottom: '.2em',
    },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.contrastText,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '75px',
        paddingBottom: '50px',
      }}
      name="projects"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography className={classes.title} variant="h2">
          Projects
        </Typography>
        <Typography className={classes.description}>
          Some examples of my work during my time at Fullstack Academy.
        </Typography>
      </Box>
      <InView
        as="div"
        onChange={(inView, entry) => {
          if (inView) entry.target.id = 'projects';
        }}
      >
        <Box className={classes.projects} sx={{ display: 'flex' }}>
          {projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </Box>
      </InView>
    </Box>
  );
};

export default Projects;
