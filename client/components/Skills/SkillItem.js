import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Grid, Paper, Typography, Slide } from '@material-ui/core';
import { useInView, InView } from 'react-intersection-observer';

const SkillItem = ({ skill }) => {
  let { logo, title } = skill;
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.primary.contrastText,
      height: 35,
      margin: 8,
      [theme.breakpoints.down('xs')]: {
        width: 175,
      },
    },
    image: {
      backgroundColor: 'white',
      height: '80%',
      minWidth: 30,
      padding: 3,
    },
    text: {
      fontSize: 18,
      fontWeight: 500,
      textAlign: 'center',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        fontSize: 16,
      },
    },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <Grid item>
      <Paper className={classes.root} square>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {logo ? (
            <img
              className={classes.image}
              src={logo ? logo : ''}
              alt={logo ? `${title} logo` : ''}
            />
          ) : (
            <Box className={classes.image} />
          )}

          <Typography
            className={classes.text}
            fontFamily={theme.typography.fontFamily}
          >
            {title}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SkillItem;
