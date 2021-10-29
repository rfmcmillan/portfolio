import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useInView, InView } from 'react-intersection-observer';

const ThankYou = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {},
    card: {
      backgroundColor: theme.palette.text.primary,
      margin: 'auto',
      marginBottom: 75,
      padding: '20px 60px 20px 60px',
      width: '40%',
    },
    contain: {},
    text: { width: 600, margin: 'auto', textAlign: 'center', color: 'white' },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <section className={classes.root}>
      <Grid className={classes.contain}>
        <Paper
          className={classes.card}
          elevation={4}
          id="thank-you"
          name="thank-you"
        >
          <div ref={ref}>
            <InView
              as="div"
              onChange={(inView, entry) => {
                if (inView) entry.target.id = 'thank-you';
              }}
            >
              <Typography variant="h6" className={classes.text}>
                Thank you to Jen for supporting me while I learn and to Stew for
                introducing me to programming.
              </Typography>
            </InView>
          </div>
        </Paper>
      </Grid>
    </section>
  );
};

export default ThankYou;
