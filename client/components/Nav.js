import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AppBar,
  Button,
  Grid,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { socialData } from '../data/social.js';
import Social from './Social.js';

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sectionElements, setSectionElements] = useState([]);
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const useStyles = makeStyles({
    button: {
      color: theme.palette.secondary.main,
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 3,
        paddingRight: 3,
        maxWidth: 70,
        minWidth: 30,
      },
    },
    link: {
      color: theme.palette.secondary.main,
      fontFamily: theme.typography.fontFamily,
      fontSize: 18,
      textTransform: 'none',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
      [theme.breakpoints.down('xs')]: {},
    },
    menuButton: {
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
        paddingLeft: 0,
        width: 20,
      },
    },
    menuIcon: {
      fontSize: 40,
      color: theme.palette.secondary.main,
    },
    root: {
      backgroundColor: '#232323',
      boxShadow: '0px 0px 0px transparent',
      paddingTop: 5,
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
      },
    },
    socials: {},
    toolBar: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 8,
        paddingRight: 0,
      },
    },
  });
  const classes = useStyles();

  useEffect(() => {
    const array = Array.from(document.getElementsByTagName('section'));
    setSectionElements(array);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (scrollY) => {
    window.scroll({ top: scrollY, left: 0, behavior: 'smooth' });
  };

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolBar}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid
            className={classes.socials}
            item
            container
            alignItems="center"
            spacing={matches ? 1 : 2}
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

          {matches ? (
            <div id="nav">
              <Button
                size="small"
                className={classes.menuButton}
                onClick={handleClick}
              >
                <MenuIcon className={classes.menuIcon} />
              </Button>
              <Menu
                keepMounted
                onClick={handleClose}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
              >
                {sectionElements.map((section, index) => {
                  return (
                    <MenuItem
                      onClick={() => handleScroll(section.offsetTop)}
                      key={index}
                    >
                      {section.title}
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          ) : (
            <Grid
              id="nav"
              item
              container
              direction="row"
              justifyContent="flex-end"
              xs={7}
            >
              {sectionElements.map((section, index) => {
                return (
                  <Grid item key={index}>
                    <Button
                      onClick={() => handleScroll(section.offsetTop)}
                      className={classes.button}
                    >
                      {section.title}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
