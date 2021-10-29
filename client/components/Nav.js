import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AppBar, Button, Grid, Slide, Toolbar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';
import { socialData } from '../data/social.js';
import Social from './Social.js';

const SECTIONS = [
  { name: 'About', offset: 0 },
  { name: 'Skills', offset: 130 },
  { name: 'Projects', offset: 0 },
];

const Nav = () => {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });
  const theme = useTheme();
  const useStyles = makeStyles({
    link: {
      color: 'black',
      fontFamily: theme.typography.fontFamily,
      fontSize: 18,
      textTransform: 'none',
    },
    root: {
      color: 'black',
      backgroundColor: theme.palette.primary.main,
    },
    socials: {
      marginLeft: 5,
    },
  });
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
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
        <Grid container direction="row" justifyContent="flex-end">
          {SECTIONS.map((section, index) => {
            return (
              <Grid item key={index}>
                <Button>
                  <Link
                    id="nav"
                    className={classes.link}
                    to={section.name.toLowerCase()}
                    smooth={true}
                    offset={section.offset}
                  >
                    {section.name}
                  </Link>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
