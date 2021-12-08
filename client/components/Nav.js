import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AppBar,
  Button,
  Drawer,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, animateScroll as scroll } from 'react-scroll';
import { socialData } from '../data/social.js';
import Social from './Social.js';

const SECTIONS = [
  { name: 'Intro', offset: 0 },
  { name: 'Skills', offset: 0 },
  { name: 'Projects', offset: 0 },
];

const Nav = () => {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const useStyles = makeStyles({
    link: {
      color: theme.palette.secondary.main,
      fontFamily: theme.typography.fontFamily,
      fontSize: 18,
      textTransform: 'none',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    menuButton: { fontSize: 40, fill: theme.palette.secondary.main },
    root: {
      backgroundColor: '#232323',
      boxShadow: '0px 0px 0px transparent',
      paddingTop: 5,
    },
    socials: {},
    toolBar: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 8,
      },
    },
  });
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolBar}>
        <Grid container justifyContent="space-between">
          <Grid
            className={classes.socials}
            item
            container
            alignItems="center"
            spacing={2}
            xs={5}
          >
            {socialData.map((social, index) => (
              <Social
                classNames={[social.className, 'socialAccent']}
                fileName={social.fileName}
                aValues={social.aValues}
                key={index}
              />
            ))}
          </Grid>
          <Grid item container direction="row" justifyContent="flex-end" xs={7}>
            {SECTIONS.map((section, index) => {
              return (
                <Grid item key={index}>
                  <Button className={classes.button}>
                    <Link
                      id="nav"
                      className={classes.link}
                      to={section.name.toLowerCase()}
                      smooth={true}
                      offset={section.offset}
                      duration={700}
                    >
                      {section.name}
                    </Link>
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
