import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { KeyboardArrowDown } from '@material-ui/icons';

const Banner = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: 'black',
      height: '100vh',
    },

    name: {
      paddingTop: 'calc(50% - 35em)',
      textAlign: 'center',
    },
  });
  const classes = useStyles();
  return (
    // <div className={classes.root}>
    //   <Grid className={classes.name}>
    //     <Typography className="name" variant="h1">
    //       Russel McMillan
    //     </Typography>
    //     <hr className="divider" color="black" />
    //     <Typography className="name" variant="h2">
    //       Full Stack Developer
    //     </Typography>
    //   </Grid>
    // </div>
    <div className="container">
      <div className="box">
        <div className="title">
          <span id="block-1"></span>
          <h1 id="full-name">
            Russ McMillan<span id="dot"></span>
          </h1>
        </div>

        <div className="role">
          <div className="block-2"></div>
          <p id="job-function">Full Stack Engineer</p>
        </div>
      </div>
      <div class="arrow-container animated fadeInDown">
        <div class="arrow-2">
          <i class="fa fa-angle-down">
            <KeyboardArrowDown />
          </i>
        </div>
        <div class="arrow-1 animated hinge infinite zoomIn"></div>
      </div>
    </div>
  );
};

export default Banner;
