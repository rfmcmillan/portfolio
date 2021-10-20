import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';
import { socialData } from '../data/social.js';
import Social from './Social.js';

const SECTIONS = ['About', 'Skills', 'Projects'];

const Nav = () => {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });
  const theme = useTheme();
  const useStyles = makeStyles({
    link: { fontFamily: theme.typography.fontFamily },
    root: {
      color: 'black',
      backgroundColor: theme.palette.primary.main,
    },
    socials: {
      marginLeft: 5,
    },
  });
  const classes = useStyles();

  console.log('socialData:', socialData);
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
                    className={classes.link}
                    to={section.toLowerCase()}
                    smooth={true}
                  >
                    {section}
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
