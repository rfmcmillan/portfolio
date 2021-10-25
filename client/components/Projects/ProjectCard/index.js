import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
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
    contain: { height: '100%' },
    description: { fontSize: 20, minHeight: 130 },
    image: { width: '100%', borderRadius: '5px 5px 0px 0px', minHeight: 200 },
    root: { width: 350, height: 600, margin: 15, paddingBottom: 15 },
    skillList: { width: 225, margin: '10px 0px 20px 0px ' },
    stackTitle: { fontSize: 20, textAlign: 'center' },
    text: { margin: 15 },
    title: { fontSize: 22, fontWeight: 600 },
    type: { marginBottom: 15, color: theme.palette.text.secondary },
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
      <Grid
        className={classes.contain}
        container
        direction="column"
        justifyContent="space-between"
      >
        {!showSkills ? (
          // <Fade appear={true} in={true} timeout={800}>
          <Box>
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
          </Box>
        ) : (
          /* </Fade> */
          <Fade appear={true} in={true} timeout={800}>
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
          </Fade>
        )}
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
  );
};

export default ProjectCard;
