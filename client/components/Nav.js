import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const SECTIONS = ['About', 'Skills', 'Projects', 'Timeline'];

const Nav = () => {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
    },
  });
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Grid container spacing={4} direction="row" justifyContent="center">
          {SECTIONS.map((section, index) => {
            return (
              <Grid item key={index}>
                <Typography>{section}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
