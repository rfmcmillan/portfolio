import React, { useEffect, useState } from 'react';
import { Typography, Divider, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: 'black',
    textAlign: 'center',
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <header>
      <Container className={classes.root}>
        <Typography variant="h1">Russel McMillan</Typography>
        <Divider />
        <Typography variant="h2">Full Stack Developer</Typography>
      </Container>
    </header>
  );
};

export default Banner;
