import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useInView, InView } from 'react-intersection-observer';

const Footer = () => {
  const theme = useTheme();
  const useStyles = makeStyles({});
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <section className="section" id="footer" name="footer">
      <div ref={ref} className={classes.root}>
        <InView
          as="div"
          onChange={(inView, entry) => {
            if (inView) entry.target.id = 'footer';
          }}
        ></InView>
      </div>
    </section>
  );
};

export default Footer;
