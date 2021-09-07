import React, { useEffect, useState } from 'react';
import { Typography, Divider, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Social from './Social.js';

import { socialData } from '../data/social.js';

const useStyles = makeStyles({
  root: {
    color: 'black',
    //maybe backgroundColor: #C0D9D9
    backgroundColor: '#7CD2B3',
    height: '100vh',
  },
  socials: {
    marginLeft: 5,
  },
  divider: {
    width: '30%',
  },
  name: {
    paddingTop: 'calc(50% - 35em)',
    textAlign: 'center',
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.socials} container spacing={2}>
        {socialData.map((social, index) => (
          <Social
            classNames={[social.className, 'socialAccent']}
            icon={social.icon}
            aValues={social.aValues}
            key={index}
          />
        ))}
      </Grid>
      <Grid className={classes.name}>
        <Typography variant="h1">Russel McMillan</Typography>
        <hr color="black" className={classes.divider} />
        <Typography variant="h2">Full Stack Developer</Typography>
      </Grid>
    </div>
  );
};

export default Banner;
