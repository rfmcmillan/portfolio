import React, { useState } from 'react';
import { Box, Button, List, Link, Paper, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillItem from '../../Skills/SkillItem';

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  const [showSkills, setShowSkills] = useState(false);
  const useStyles = makeStyles({
    button: {
      borderRadius: 30,
      color: theme.palette.text.primary,
      margin: 5,
      width: 300,
    },
    card: {
      height: 600,
    },
    description: { fontSize: 20, minHeight: 130 },
    image: { width: '100%', borderRadius: '.2em .2em 0em 0em', minHeight: 200 },
    root: { width: 350, margin: '1rem', '&:hover': { backgroundColor: 'red' } },
    text: { margin: '1rem' },
    title: { fontSize: 22, fontWeight: 600 },
    type: { marginBottom: '1rem', color: theme.palette.text.secondary },
  });
  const classes = useStyles({ button: { height: 20, width: 20 } });
  return (
    <Paper
      elevation={3}
      className={classes.root}
      onMouseOver={() => {
        setShowSkills(true);
        console.log(showSkills);
      }}
      onMouseOut={() => {
        setShowSkills(false);
        console.log(showSkills);
      }}
    >
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

          <Box>
            <Typography>{project.role}</Typography>
            <Typography className={classes.type} variant="subtitle2">
              {project.type}
            </Typography>
          </Box>
          <Typography className={classes.description}>
            {project.description}
          </Typography>
        </Box>
        {project.buttons && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {project.buttons.map((button, index) => (
              <Button
                className={classes.button}
                variant="contained"
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                onFocus={() => setFlip(true)}
              >
                {button.text}
                {/* {button.icon} */}
              </Button>
            ))}
          </Box>
        )}
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
