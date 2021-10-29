import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Grid, Tooltip } from '@material-ui/core';

const SkillBubble = (props) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    image: {
      width: '60%',
      minWidth: 20,
      // padding: 9,
      maxWidth: 48,
    },
    root: {
      width: 50,
      height: 50,
      backgroundColor: '#EEEEEE',
      borderRadius: 25,
      margin: 2,
    },
  });
  const classes = useStyles();

  const { logo, title } = props;
  return (
    <Tooltip title={title} placement="top">
      <Grid
        className={classes.root}
        item
        container
        alignItems="center"
        justifyContent="center"
      >
        {' '}
        {logo ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              className={classes.image}
              src={logo ? logo : ''}
              alt={logo ? `${title} logo` : ''}
            />
          </Box>
        ) : (
          <Box className={classes.image} />
        )}
      </Grid>
    </Tooltip>
  );
};

export default SkillBubble;
