import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useInView, InView } from 'react-intersection-observer';

const Intro = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    about: {
      fontSize: 20,
      textAlign: 'center',
      width: '50vw',
    },
    name: {
      fontSize: 32,
      fontWeight: 500,
      marginBottom: '.2em',
    },
    root: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.contrastText,
      padding: '75px 0 75px 0',
      margin: 'auto',
    },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <section className="section" id="intro" name="intro">
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
                Hi, I'm Russ
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.about} variant="body1">
                a full-stack engineer with a background in architecture. Prior
                to 2021, I was focused on designing sustainable homes. Now,
                after completing the 26-week software engineering program at
                Fullstack Academy I am ready to begin my career in software
                development.
              </Typography>
            </Grid>
          </Grid>
        </InView>
      </div>
    </section>
  );
};

export default Intro;
