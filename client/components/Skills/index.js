import React from 'react';
import { skillsData } from '../../data/skills.js';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillItem from './SkillItem';
import SkillSet from './SkillSet';

const Skills = () => {
  const useStyles = makeStyles({
    root: { textAlign: 'center' },
    header: { fontSize: 30 },
    container: { width: '66%', margin: 'auto' },
  });
  const classes = useStyles();
  return (
    <section>
      <div className={classes.root}>
        <Typography className={classes.header} variant="h2">
          Skill Set
        </Typography>
        <Typography variant="body1">
          A variety of frameworks, libraries and languages that I have had the
          opportunity to work with.
        </Typography>
      </div>
      <ul>
        {skillsData.map((skillSet, index) => (
          <SkillSet data={skillSet} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
