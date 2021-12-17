import React from 'react';
import { Grid, Box, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillItem from './SkillItem';
import { useInView, InView } from 'react-intersection-observer';

const SkillSet = ({ data }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const useStyles = makeStyles({
    container: {
      width: '60vw',
      margin: 'auto',
      marginBottom: '1em',
    },
    phrase: {
      color: theme.palette.text.primary,
      fontSize: 20,
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily,
      paddingBottom: '.4em',
      [theme.breakpoints.down('xs')]: {
        fontSize: 16,
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <div>
      <Box className={classes.phrase}>{data.phrase}</Box>
      <InView
        as="div"
        onChange={(inView, entry) => {
          if (inView) entry.target.id = 'skills';
        }}
      >
        <Grid
          className={classes.container}
          container
          direction={matches ? 'column' : 'row'}
          alignItems="center"
        >
          {data.items.map((skill) => (
            <Grid key={skill.title} item xs={matches ? undefined : 3}>
              <SkillItem skill={skill} />
            </Grid>
          ))}
        </Grid>
      </InView>
    </div>
  );
};

export default SkillSet;
