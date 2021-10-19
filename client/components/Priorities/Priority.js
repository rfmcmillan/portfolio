import React from 'react';
import { Typography, Grid, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { prioritiesData } from '../../data/priorities.js';
import { Reorder } from '@material-ui/icons';

const Priority = ({ priority, index }) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    icon: { transform: 'scale(2)' },
    lastRoot: {
      maxWidth: 240,

      padding: '2rem',
    },
    root: {
      maxWidth: 240,
      minHeight: 260,
      padding: '2rem',
      borderRight: '1px solid #d3d3d3',
    },
    text: { textAlign: 'center', marginTop: '.5rem', fontSize: 18 },
    title: { marginTop: '1.5rem', fontWeight: 500, fontSize: 22 },
  });
  const classes = useStyles();

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      className={index < 2 ? classes.root : classes.lastRoot}
    >
      <Grid item>{<priority.icon className={classes.icon} />}</Grid>
      <Grid item>
        <Typography className={classes.title} variant="body1">
          {priority.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.text} variant="body2">
          {priority.text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Priority;
