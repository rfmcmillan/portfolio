import React from 'react';
import { Card, Fade, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { prioritiesData } from '../../data/priorities.js';
import Priority from './Priority';
import { useInView, InView } from 'react-intersection-observer';

const Priorities = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    contain: {
      backgroundColor: theme.palette.secondary.contrastText,
      height: 150,
    },
    card: {
      color: theme.palette.text.primary,
      width: 720,
      margin: 'auto',
    },
    root: {},
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <div className={classes.root}>
      <Grid className={classes.contain} container alignItems="center">
        <Card ref={ref} className={classes.card} elevation={4}>
          <InView
            as="div"
            onChange={(inView, entry) => {
              if (inView) entry.target.id = 'priorities';
            }}
          >
            <Grid justifyContent="center" container direction="row">
              {prioritiesData.map((priority, index) => (
                <Grid item key={priority.title}>
                  <Priority priority={priority} />
                </Grid>
              ))}
            </Grid>
          </InView>
        </Card>
      </Grid>
    </div>
  );
};

export default Priorities;
