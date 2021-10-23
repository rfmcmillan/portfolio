import React from 'react';
import { Box, Card, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { prioritiesData } from '../../data/priorities.js';
import Priority from './Priority';

const Priorities = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    contain: { backgroundColor: theme.palette.primary.main, height: 400 },
    root: {
      color: theme.palette.text.primary,
      width: 720,
      margin: 'auto',
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.contain} container alignItems="center">
        <Card className={classes.root} elevation={4}>
          <Grid justifyContent="center" container direction="row">
            {prioritiesData.map((priority, index) => (
              <Grid item>
                <Priority priority={priority} index={index} />
              </Grid>
            ))}
          </Grid>
        </Card>
      </Grid>
    </div>
  );
};

export default Priorities;
