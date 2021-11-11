import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper, Typography, Box, Slide } from '@material-ui/core';
import { useInView, InView } from 'react-intersection-observer';

const SkillItem = ({ skill }) => {
  let { logo, title } = skill;
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.primary.contrastText,
      height: 35,
      margin: 8,
    },
    image: {
      backgroundColor: 'white',
      height: '80%',
      minWidth: 30,
      padding: 3,
    },
    text: { fontSize: 18, fontWeight: 500, textAlign: 'center', width: '100%' },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
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
  );
};

export default SkillItem;
