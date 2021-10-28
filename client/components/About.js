import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useInView, InView } from 'react-intersection-observer';

const About = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    about: {
      color: theme.palette.text.primary,
      fontSize: 20,
      textAlign: 'center',
      width: '50vw',
    },
    name: {
      color: theme.palette.text.primary,
      fontSize: 32,
      fontWeight: 500,
      marginBottom: '.2em',
    },
    root: {
      color: 'black',
      backgroundColor: 'white',

      padding: '100px 0 100px 0',
      margin: 'auto',
    },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <section className="section" id="about" name="about">
      <div ref={ref} className={classes.root}>
        <InView
          as="div"
          onChange={(inView, entry) => {
            if (inView) entry.target.id = 'description';
          }}
        >
          <Grid container alignItems="center" direction="column">
            <Grid item>
              <Typography className={classes.name} variant="h2">
                Hi, I'm Russel
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.about} variant="body1">
                A full stack engineer with a background in architecture. Prior
                to 2021, I was focused on designing homes. Now, after completing
                the 26-week software engineering program at Fullstack Academy, I
                am ready to combine my love of problem-solving with my passion
                for clean and simple design to create software that is both
                powerful and wonderful to use.
              </Typography>
            </Grid>
          </Grid>
        </InView>
      </div>
    </section>
  );
};

export default About;
