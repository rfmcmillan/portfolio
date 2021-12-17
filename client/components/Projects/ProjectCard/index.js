import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillItem from '../../Skills/SkillItem';
import SkillBubble from '../SkillBubble';

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  const [showSkills, setShowSkills] = useState(false);
  const useStyles = makeStyles({
    button: {
      borderRadius: 30,
      color: theme.palette.text.primary,
      margin: 5,
      width: '90%',
    },
    contain: { height: '100%' },
    description: {
      fontSize: 18,
      minHeight: 120,
      [theme.breakpoints.down('xs')]: {
        fontSize: 16,
        minHeight: 0,
      },
    },
    image: {
      width: '100%',
      borderRadius: '3px 3px 0px 0px',
      minHeight: 200,
      borderBottom: `1px solid #e8e8e8`,
      [theme.breakpoints.down('xs')]: {
        minHeight: 0,
      },
    },
    root: {
      width: 350,
      minHeight: 650,
      margin: 15,
      paddingBottom: 15,
      [theme.breakpoints.down('xs')]: {
        width: '90vw',
        margin: 5,
        minHeight: 300,
      },
    },
    stackTitle: {
      fontSize: 22,
      fontWeight: 500,
      textAlign: 'center',
      marginTop: 15,
    },
    text: { margin: 15 },
    title: { fontSize: 22, fontWeight: 500 },
    type: { marginBottom: 15, color: theme.palette.text.secondary },
  });
  const classes = useStyles();

  return (
    <Grid item>
      <div>
        <Paper id="side-a" elevation={3} className={classes.root}>
          <Grid
            className={classes.contain}
            container
            direction="column"
            justifyContent="space-between"
          >
            <Box>
              <a href={project.buttons[0].link}>
                <img
                  className={classes.image}
                  src={project.image}
                  alt={project.title}
                />
              </a>
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
            </Box>
            <Grid
              className={classes.skills}
              item
              container
              justifyContent="center"
            >
              {project.stack.map((skill) =>
                skill.logo ? (
                  <SkillBubble
                    key={skill.title}
                    logo={skill.logo}
                    title={skill.title}
                  />
                ) : (
                  ''
                )
              )}
            </Grid>
            {project.buttons && (
              <Grid item container direction="column" alignItems="center">
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
              </Grid>
            )}
          </Grid>
        </Paper>
      </div>
    </Grid>
  );
};

export default ProjectCard;
