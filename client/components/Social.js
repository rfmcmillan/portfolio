import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const Social = ({ fileName, aValues, classNames = [] }) => {
  const { ariaLabel, href, ...otherAValues } = aValues;

  const theme = useTheme();
  const useStyles = makeStyles({
    image: {
      filter:
        // 'invert(100%) sepia(0%) saturate(0%) hue-rotate(75deg) brightness(111%) contrast(96%)',
        'invert(64%) sepia(43%) saturate(6086%) hue-rotate(149deg) brightness(100%) contrast(101%)',
    },
    root: {
      width: '50px',
      height: '50px',
      border: `2px solid #00BCD4`,
      borderRadius: '30px',
      margin: 3,
      fill: theme.palette.primary.contrastText,
      color: theme.palette.primary.contrastText,
    },
  });
  const classes = useStyles();
  return (
    <Grid item id={classNames[0]} className={classes.root}>
      <a href={href}>
        <img
          className={classes.image}
          src={fileName}
          aria-label={ariaLabel}
          {...otherAValues}
        />
      </a>
    </Grid>
  );
};

export default Social;
