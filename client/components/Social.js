import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '50px',
    height: '50px',
    border: '2px solid #262626',
    borderRadius: '30px',
    margin: 3,
  },
});

const Social = ({ icon, aValues, classNames = [] }) => {
  const { ariaLabel, ...otherAValues } = aValues;
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
