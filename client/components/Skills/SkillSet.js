import React from 'react';
import { skillsData } from '../../data/skills.js';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillItem from './SkillItem';

const SkillSet = ({ data }) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {},
    container: { width: '66%', margin: 'auto' },
  });
  const classes = useStyles();
  return (
    <div>
      <Box display="inline" fontFamily={theme.typography.fontFamily}>
        {data.phrase}
      </Box>
      <Grid className={classes.container} container wrap="wrap" spacing={3}>
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
