import React from 'react';
import { skillsData } from '../../data/skills.js';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import SkillSet from './SkillSet';

const Skills = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      backgroundColor: '#e0e0e0',
      color: theme.palette.secondary.contrastText,
      paddingBottom: 75,
      paddingTop: 75,
    },
    header: {
      fontSize: 32,
      fontWeight: 500,
      marginBottom: '.2em',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '.4em',
        fontSize: 24,
      },
    },
    skills: {
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
      [theme.breakpoints.down('xs')]: {
        fontSize: 16,
      },
    },
  });
  const classes = useStyles();
  return (
    <section className={classes.root} name="skills">
      <div>
        <Typography className={classes.header} variant="h2">
          Skill Set
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
