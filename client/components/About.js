import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useInView, InView } from 'react-intersection-observer';

const About = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    image: { width: '25vw' },
    root: { paddingTop: 80, paddingBottom: 30, backgroundColor: '#f0f0f0' },
    text: { textAlign: 'center', width: '25vw' },
    title: {
      fontSize: 32,
      fontWeight: 500,
      marginBottom: '.2em',
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
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography className={classes.title} variant="h2">
                About
              </Typography>
            </Grid>
            <Grid item>
              <img className={classes.image} src="./assets/about.jpeg" />
            </Grid>
            <Grid item>
              <Typography className={classes.text}>
                When I'm not coding, you can find me spending time with my
                family, hiking, reading, and playing backgammon.
              </Typography>
            </Grid>
          </Grid>
        </InView>
      </div>
    </section>
  );
};

export default About;
