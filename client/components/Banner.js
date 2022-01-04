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
      color: theme.palette.text.primary,
      height: '100vh',
    },
    name: {
      textAlign: 'center',
    },
  });
  const classes = useStyles();
  return (
    <div className="container">
      <div className="box">
        <div className="title">
          <span id="block-1"></span>
          <h1 id="full-name">Russ McMillan</h1>
        </div>
        <div className="role">
          <div className="block-2"></div>
          <div className="block-2-remain"></div>
          <p id="job-function">Front End Developer</p>
        </div>
      </div>
      <div id="arrow-container" className="animated fadeInDown">
        <div className="arrow-2">
          <i className="fa fa-angle-down">
            <Link to={'intro'} smooth={true} duration={700}>
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
