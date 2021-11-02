import React from 'react';
import { skillsData } from '../../data/skills.js';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SkillItem from './SkillItem';
import SkillSet from './SkillSet';

const Skills = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      paddingBottom: '4em',
      paddingTop: 200,
    },
    header: {
      fontSize: 32,
      fontWeight: 500,
      marginBottom: '.2em',
    },
    skills: {
      backgroundColor: theme.palette.secondary.main,
      marginTop: 0,
      paddingTop: 16,
      marginLeft: 0,
      marginBlockStart: 0,
      paddingInlineStart: 0,
    },
    subTitle: {
      fontSize: 20,
      textAlign: 'center',
      paddingBottom: '1em',
    },
  });
  const classes = useStyles();
  return (
    <section className={classes.root} name="skills">
      <div>
        <Typography className={classes.header} variant="h2">
          Skill Set
        </Typography>
        <Typography className={classes.subTitle} variant="body1">
          A variety of frameworks, libraries and languages that I have had the
          opportunity to work with.
        </Typography>
      </div>
      <ul className={classes.skills}>
        {skillsData.map((skillSet, index) => (
          <SkillSet data={skillSet} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
