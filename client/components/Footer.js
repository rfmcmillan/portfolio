import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Grid, Link, Typography } from '@material-ui/core';
import { useInView, InView } from 'react-intersection-observer';
import { socialData } from '../data/social.js';
import Social from './Social.js';

const Footer = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    and: {
      fontSize: 22,
      fontWeight: 400,
      padding: '0px 6px 0px 6px',
    },
    credit: { fontSize: 22, fontWeight: 500 },
    name: {
      fontSize: 22,
      fontWeight: 200,
      textDecoration: 'underline',
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.primary.contrastText,
      fontWeight: 400,
    },
    root: {
      padding: '30px 150px 30px 150px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <section className={classes.root} id="footer" name="footer">
      <div ref={ref} className={classes.root}>
        <InView
          as="div"
          onChange={(inView, entry) => {
            if (inView) entry.target.id = 'footer';
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Grid className={classes.socials} container spacing={2}>
              {socialData.map((social, index) => (
                <Social
                  classNames={[social.className, 'socialAccent']}
                  fileName={social.fileName}
                  aValues={social.aValues}
                  key={index}
                />
              ))}
            </Grid>
            <Box
              sx={{
                width: 425,
                display: 'flex',
                alignItems: 'flex-end',
                flexDirection: 'column',
              }}
            >
              <Typography className={classes.credit}>
                Design Inspired by
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  className={classes.name}
                  href="https://www.benlammers.dev/"
                >
                  Ben Lammers
                </Link>
                <Typography className={classes.and}>and</Typography>
                <Link
                  className={classes.name}
                  href="https://codepen.io/KaioRocha/pen/YoEVvZ"
                >
                  Kaio Almeida
                </Link>
              </Box>
            </Box>
          </Box>
        </InView>
      </div>
    </section>
  );
};

export default Footer;
