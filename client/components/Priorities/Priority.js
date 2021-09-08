import React from 'react';
import { Typography, Grid, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { prioritiesData } from '../../data/priorities.js';
import { Reorder } from '@material-ui/icons';

const Priority = ({ priority }) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      maxWidth: 200,
    },
  });
  const classes = useStyles();

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>{<priority.icon />}</Grid>
      <Grid item>
        <Typography
          variant="body1"
          className="text--lg font--bold font--heading"
        >
          {priority.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" className="text--md">
          {priority.text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Priority;
