import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper, Typography, Box } from '@material-ui/core';

const SkillItem = ({ skill }) => {
  let { logo, title } = skill;
  const theme = useTheme();
  const useStyles = makeStyles({
    root: { backgroundColor: '#EEEEEE', height: 35 },
    image: {
      width: 30,
      padding: 3,
      backgroundColor: 'white',
      height: '80%',
    },
    text: { fontSize: 18, fontWeight: 500, textAlign: 'center', width: '100%' },
  });

  const classes = useStyles();
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
        <img
          className={classes.image}
          src={logo ? logo : ''}
          alt={logo ? `${title} logo` : ''}
        />

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
