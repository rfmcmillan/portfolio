import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '50px',
    height: '50px',
  },
});

const Social = ({ icon, aValues, classNames = [] }) => {
  const { ariaLabel, ...otherAValues } = aValues;
  console.log('classNames:', classNames[0]);
  const classes = useStyles();
  return (
    <Grid item id={classNames[0]} className={classes.root}>
      <a aria-label={ariaLabel} {...otherAValues}>
        {icon}
      </a>
    </Grid>
  );
};

export default Social;
