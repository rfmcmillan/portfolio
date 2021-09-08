import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const About = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      color: 'black',
      backgroundColor: theme.palette.primary.main,
      paddingTop: 100,
      margin: 'auto',
    },
    about: {
      width: '50vw',
      marginBottom: 100,
    },
    name: {
      fontSize: 36,
      marginBottom: 20,
    },
  });
  const classes = useStyles();

  return (
    <section className="section" id="about">
      <div className={classes.root}>
        <Grid container alignItems="center" direction="column">
          <Grid item>
            <Typography className={classes.name} variant="h2">
              Hi, I'm Russel
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.about} variant="body1">
              A self-motivated and team-minded full stack engineer with a
              background in architecture and finance. Prior to 2021, I was
              focused on designing and developing homes that are sustainable,
              affordable and, of course, wonderful to live in. Now, after
              completing the 26-week software engineering program at Fullstack
              Academy, I am ready to combine my love of problem-solving with my
              passion for design to create software that is both powerful and
              wonderful to use.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default About;
