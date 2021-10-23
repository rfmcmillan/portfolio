import React from 'react';
import { skillsData } from '../../data/skills.js';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillItem from './SkillItem';

const SkillSet = ({ data }) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    container: { width: '50%', margin: 'auto', marginBottom: '1em' },
    phrase: {
      color: theme.palette.text.primary,
      fontSize: 20,
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily,
      paddingBottom: '.4em',
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.phrase}>{data.phrase}</Box>
      <Grid className={classes.container} container wrap="wrap" spacing={2}>
        {data.items.map((skill, index) => (
          <Grid item xs={3}>
            <SkillItem skill={skill} key={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SkillSet;
