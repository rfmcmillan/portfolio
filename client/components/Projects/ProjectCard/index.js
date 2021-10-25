import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  List,
  Link,
  Paper,
  Typography,
  Fade,
} from '@material-ui/core';
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
      justifyContent: 'space-between',
    },
    description: { fontSize: 20, minHeight: 130 },
    image: { width: '100%', borderRadius: '.2em .2em 0em 0em', minHeight: 200 },
    root: { width: 350, margin: '1rem' },
    skillList: { width: 225, height: 430, margin: '10px 0px 20px 0px ' },
    stackTitle: { fontSize: 20, textAlign: 'center' },
    text: { margin: '1rem' },
    title: { fontSize: 22, fontWeight: 600 },
    type: { marginBottom: '1rem', color: theme.palette.text.secondary },
  });
  const classes = useStyles({ button: { height: 20, width: 20 } });

  useEffect(() => {
    setShowSkills(false);
  }, []);

  return (
    <Paper
      elevation={3}
      className={classes.root}
      onMouseEnter={() => {
        setShowSkills(true);
      }}
      onMouseLeave={() => {
        setShowSkills(false);
      }}
    >
      {!showSkills ? (
        // <Fade appear={true} in={true} timeout={800}>
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
                </Button>
              ))}
            </Box>
          )}
        </Box>
      ) : (
        /* </Fade> */
        <Fade appear={true} in={true} timeout={800}>
          <Box className={classes.card}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box component="span">
                <Typography className={classes.stackTitle}>
                  Tech Stack
                </Typography>
              </Box>
              <Box className={classes.skillList}>
                {project.stack.map((skill, index) => (
                  <SkillItem
                    className={classes.skillItem}
                    skill={skill}
                    key={index}
                  />
                ))}
              </Box>
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
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </Fade>
      )}
    </Paper>
  );
};

export default ProjectCard;
