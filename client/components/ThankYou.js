import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { useInView, InView } from 'react-intersection-observer';

const ThankYou = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      margin: 'auto',
      padding: '20px 60px 20px 60px',
      width: '40%',
    },
    text: { width: 600, margin: 'auto', textAlign: 'center' },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <Paper className={classes.root} id="thank-you" name="thank-you">
      <div ref={ref}>
        <InView
          as="div"
          onChange={(inView, entry) => {
            if (inView) entry.target.id = 'thank-you';
          }}
        >
          <Typography variant="h6" className={classes.text}>
            Thank you to Stew for introducing me to programming and to Jen for
            supporting me throughout.
          </Typography>
        </InView>
      </div>
    </Paper>
  );
};

export default ThankYou;
