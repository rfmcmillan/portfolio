import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '50px',
    height: '50px',
  },
  linkedin: {
    width: '30px',
  },
});

const Social = ({ icon, aValues, classNames = [] }) => {
  const { ariaLabel, ...otherAValues } = aValues;

  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <a aria-label={ariaLabel} {...otherAValues}>
        {icon}
      </a>
    </Grid>
  );
};

export default Social;
