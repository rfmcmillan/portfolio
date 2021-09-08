import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { prioritiesData } from '../../data/priorities.js';
import Priority from './Priority';

const useStyles = makeStyles({
  root: {
    color: 'black',
    backgroundColor: '#7CD2B3',
    textAlign: 'center',
    paddingTop: 100,
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

const Priorities = () => {
  return (
    <Grid container direction="row">
      {prioritiesData.map((priority, index) => (
        <Grid item key={index}>
          <Priority priority={priority} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Priorities;
