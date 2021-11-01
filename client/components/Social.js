import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const Social = ({ icon, aValues, classNames = [] }) => {
  const { ariaLabel, ...otherAValues } = aValues;

  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      width: '50px',
      height: '50px',
      border: `2px solid ${theme.palette.primary.contrastText}`,
      borderRadius: '30px',
      margin: 3,
      fill: theme.palette.primary.contrastText,
      color: theme.palette.primary.contrastText,
    },
  });
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
