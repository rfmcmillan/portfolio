import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Link, Typography, useMediaQuery } from '@material-ui/core';
import { useInView, InView } from 'react-intersection-observer';
import { socialData } from '../data/social.js';
import Social from './Social.js';

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const useStyles = makeStyles({
    and: {
      fontSize: 20,
      fontWeight: 400,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    contain: {},
    credit: {
      fontSize: 20,
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    designCredit: {
      [theme.breakpoints.down('sm')]: {
        marginTop: 15,
      },
    },
    name: {
      fontSize: 20,
      fontWeight: 200,
      textDecoration: 'underline',
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.primary.contrastText,
      fontWeight: 400,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    root: {
      padding: '30px 150px 30px 150px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.down('sm')]: {
        padding: '50px 10px 50px 10px',
        fontSize: 16,
      },
    },
    socials: { width: '150px', paddingBottom: 20 },
  });
  const classes = useStyles();
  const { ref, inView, entry } = useInView({ threshold: 0 });

  return (
    <section className={classes.root} name="footer">
      <div ref={ref}>
        <InView
          as="div"
          onChange={(inView, entry) => {
            if (inView) entry.target.id = 'footer';
          }}
        >
          <Grid
            container
            className={classes.contain}
            justifyContent="space-between"
            alignItems="center"
            direction={matches ? 'column' : undefined}
          >
            <Grid
              className={classes.socials}
              item
              container
              spacing={matches ? 1 : 2}
              xs={matches ? undefined : 6}
              alignItems="center"
              justifyContent={matches ? 'space-between' : undefined}
            >
              {socialData.map((social, index) => (
                <Social
                  classNames={[social.className, 'socialAccent']}
                  fileName={social.fileName}
                  aValues={social.aValues}
                  key={index}
                />
              ))}
            </Grid>

            {matches ? (
              <Grid
                className={classes.designCredit}
                item
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Grid item>
                  <Typography className={classes.credit}>Design by</Typography>
                </Grid>
                <Grid item>
                  <Link
                    className={classes.name}
                    href="https://www.benlammers.dev/"
                  >
                    Ben Lammers
                  </Link>
                </Grid>
                <Grid item>
                  <Typography className={classes.and}>and</Typography>
                </Grid>
                <Grid item>
                  <Link
                    className={classes.name}
                    href="https://codepen.io/KaioRocha/pen/YoEVvZ"
                  >
                    Kaio Almeida
                  </Link>
                </Grid>
              </Grid>
            ) : (
              <Grid
                className={classes.designCredit}
                item
                container
                alignItems="flex-end"
                direction={matches ? 'row' : 'column'}
                xs={matches ? undefined : 6}
              >
                <Grid item xs={6}>
                  <Typography className={classes.credit}>Design by</Typography>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  justifyContent="flex-end"
                  spacing={1}
                >
                  <Grid item>
                    <Link
                      className={classes.name}
                      href="https://www.benlammers.dev/"
                    >
                      Ben Lammers
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.and}>and</Typography>
                  </Grid>
                  <Grid item>
                    <Link
                      className={classes.name}
                      href="https://codepen.io/KaioRocha/pen/YoEVvZ"
                    >
                      Kaio Almeida
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </InView>
      </div>
    </section>
  );
};

export default Footer;
