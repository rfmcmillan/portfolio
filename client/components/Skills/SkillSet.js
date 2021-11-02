import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillItem from './SkillItem';
import { useInView, InView } from 'react-intersection-observer';

const SkillSet = ({ data }) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    container: { width: '50%', margin: 'auto', marginBottom: '1em' },
    phrase: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily,
      paddingBottom: '.4em',
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
        <Grid className={classes.container} container wrap="wrap">
          {data.items.map((skill) => (
            <Grid key={skill.title} item xs={3}>
              <SkillItem skill={skill} />
            </Grid>
          ))}
        </Grid>
      </InView>
    </div>
  );
};

export default SkillSet;
