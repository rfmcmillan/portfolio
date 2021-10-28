import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

const SkillBubble = (props) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    image: {
      // backgroundColor: 'white',
      height: '60%',
      minWidth: 20,
      padding: 9,
    },
    root: {
      width: 50,
      height: 50,
      backgroundColor: '#EEEEEE',
      borderRadius: 25,
    },
  });
  const classes = useStyles();

  const { logo, title } = props;
  return (
    <Grid item className={classes.root}>
      {' '}
      {logo ? (
        <img
          className={classes.image}
          src={logo ? logo : ''}
          alt={logo ? `${title} logo` : ''}
        />
      ) : (
        <Box className={classes.image} />
      )}
    </Grid>
  );
};

export default SkillBubble;
