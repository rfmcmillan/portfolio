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
import SkillBubble from '../SkillBubble';

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
    root: { width: 350, height: 700, margin: 15, paddingBottom: 15 },
    rootSkills: { width: 350, height: 650, margin: 15, paddingBottom: 15 },
    skillList: { width: 225, margin: '10px 0px 20px 0px ' },
    stackTitle: {
      fontSize: 22,
      fontWeight: 500,
      textAlign: 'center',
      marginTop: 15,
    },
    text: { margin: 15 },
    title: { fontSize: 22, fontWeight: 600 },
    type: { marginBottom: 15, color: theme.palette.text.secondary },
  });
  const classes = useStyles({ button: { height: 20, width: 20 } });

  useEffect(() => {
    setShowSkills(false);
  }, []);

  return (
    <div id="card-container">
      <div id="product-card">
        <Paper
          id="side-a"
          elevation={3}
          className={showSkills ? classes.rootSkills : classes.root}
        >
          <Grid
            className={classes.contain}
            container
            direction="column"
            justifyContent="space-between"
          >
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
            <Grid container>
              {project.stack.map((skill) =>
                skill.logo ? (
                  <SkillBubble logo={skill.logo} title={skill.title} />
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
    </div>
  );
};

export default ProjectCard;
