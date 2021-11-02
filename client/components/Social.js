import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const Social = ({ fileName, aValues, classNames = [] }) => {
  const { ariaLabel, ...otherAValues } = aValues;

  const theme = useTheme();
  const useStyles = makeStyles({
    image: {
      filter:
        'invert(67%) sepia(7%) saturate(3032%) hue-rotate(183deg) brightness(148%) contrast(112%)',
    },
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
      <img
        className={classes.image}
        src={fileName}
        aria-label={ariaLabel}
        {...otherAValues}
      />
    </Grid>
  );
};

export default Social;
