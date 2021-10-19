import React, { useState } from 'react';
import { Box, List, Link, Paper, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillItem from '../../Skills/SkillItem';

const ProjectCard = ({ project }) => {
  const useStyles = makeStyles({
    card: {
      height: 600,
    },
    description: { fontSize: 20 },
    image: { width: '100%' },
    root: { width: 350, margin: '1rem' },
    text: { margin: '1rem' },
    title: { fontSize: 22, fontWeight: 600, marginBottom: '1rem' },
  });
  const classes = useStyles({ button: { height: 20, width: 20 } });
  console.log('project.buttons:', project.buttons);
  return (
    <Paper className={classes.root}>
      <Box className={classes.card}>
        <img
          className={classes.image}
          src={project.image}
          alt={project.title}
        />
        <Box className={classes.text}>
          <Typography className={classes.title} variant="h3">
            {project.title}
          </Typography>
          <Typography className={classes.description}>
            {project.description}
          </Typography>
        </Box>
      </Box>
      {/* <Box>
        <Box>
          <Typography>{project.role}</Typography>
          <Typography>{project.type}</Typography>
        </Box>
        <Box>
          <Box component="span">
            <Typography>Tech Stack</Typography>
          </Box>
          <ul>
            {project.stack.map((skill, index) => (
              <SkillItem skill={skill} key={index} />
            ))}
          </ul>
        </Box>
        {project.buttons && (
          <Box>
            {project.buttons.map((button, index) => (
              <Link
                className={classes.button}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={button.linkAriaLabel}
                key={index}
                onFocus={() => setFlip(true)}
              >
                <span>{button.text}</span>
              </Link>
            ))}
          </Box>
        )}
      </Box> */}
    </Paper>
  );
};

export default ProjectCard;
