import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { KeyboardArrowDown } from '@material-ui/icons';
import { Link, animateScroll as scroll } from 'react-scroll';

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
      <div className="arrow-container animated fadeInDown">
        <div className="arrow-2">
          <i className="fa fa-angle-down">
            <Link to={'about'} smooth={true}>
              <KeyboardArrowDown />
            </Link>
          </i>
        </div>
        <div className="arrow-1 animated hinge infinite zoomIn"></div>
      </div>
    </div>
  );
};

export default Banner;
