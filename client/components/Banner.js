import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const Banner = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      color: 'black',
      backgroundColor: theme.palette.primary.main,
      height: '100vh',
    },

    name: {
      paddingTop: 'calc(50% - 35em)',
      textAlign: 'center',
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.name}>
        <Typography className="name" variant="h1">
          Russel McMillan
        </Typography>
        <hr className="divider" color="black" />
        <Typography className="name" variant="h2">
          Full Stack Developer
        </Typography>
      </Grid>
    </div>
  );
};

export default Banner;
