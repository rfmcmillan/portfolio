import React from 'react';
import { Typography, Box, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import { useInView, InView } from 'react-intersection-observer';

const Projects = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const useStyles = makeStyles({
    description: {
      fontSize: 20,
      textAlign: 'center',
      paddingBottom: '1em',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        fontSize: 16,
        width: '90vw',
      },
    },
    projects: {
      [theme.breakpoints.down('xs')]: {
        margin: 5,
      },
    },
    title: {
      fontSize: 32,
      fontWeight: 500,
      marginBottom: '.2em',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '.4em',
        fontSize: 24,
      },
    },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '75px',
        paddingBottom: '75px',
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
        <Grid
          className={classes.projects}
          alignItems={matches ? 'center' : undefined}
          direction={matches ? 'column' : 'row'}
          container
        >
          {projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </Grid>
      </InView>
    </Box>
  );
};

export default Projects;
