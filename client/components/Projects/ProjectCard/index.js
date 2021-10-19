import React, { useState } from 'react';
import { Box, List, Link, Paper, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillItem from '../../Skills/SkillItem';

const ProjectCard = ({ project }) => {
  const useStyles = makeStyles({
    root: { width: 350 },
    title: { fontSize: 22, fontWeight: 500 },
  });
  const classes = useStyles({ button: { height: 20, width: 20 } });
  console.log('project.buttons:', project.buttons);
  return (
    <Paper className={classes.root}>
      <Box>
        <img src={project.image} alt={project.title} />
        <Box>
          <Typography className={classes.title} variant="h3">
            {project.title}
          </Typography>
          <Typography>{project.description}</Typography>
        </Box>
      </Box>
      <Box>
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
      </Box>
    </Paper>
  );
};

export default ProjectCard;
