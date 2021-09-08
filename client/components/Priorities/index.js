import React from 'react';
import { Grid, Card, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { prioritiesData } from '../../data/priorities.js';
import Priority from './Priority';

const useStyles = makeStyles({
  root: {
    color: 'black',
    width: '60%',
    margin: 'auto',
  },
});

const Priorities = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid justifyContent="space-around" container direction="row">
        {prioritiesData.map((priority, index) => (
          <Grid item key={index}>
            <Priority priority={priority} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Priorities;
