import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { useInView, InView } from "react-intersection-observer";

const Intro = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    about: {
      fontSize: 20,
      textAlign: "center",
      width: "50vw",
      [theme.breakpoints.down("xs")]: {
        fontSize: 16,
        width: "75vw",
      },
    },
    name: {
      fontSize: 32,
      fontWeight: 500,
      marginBottom: ".2em",
      [theme.breakpoints.down("xs")]: {
        marginBottom: ".4em",
        fontSize: 24,
      },
    },
    root: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.contrastText,
      padding: "75px 0 75px 0",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        padding: "40px 0 40px 0",
      },
    },
  });
  const classes = useStyles();
  const { ref } = useInView({ threshold: 0 });

  return (
    <section className="section" id="intro" data-title="Intro">
      <div ref={ref} className={classes.root}>
        <InView
          as="div"
          onChange={(inView, entry) => {
            if (inView) entry.target.id = "description";
          }}
        >
          <Grid container alignItems="center" direction="column">
            <Grid item>
              <Typography className={classes.name} variant="h2">
                Hi, I&apos;m Russ
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.about} variant="body1">
                a full stack engineer with a background in architecture. Prior
                to 2021, I was focused on designing sustainable homes and
                creating incredible experiences for people in the form of
                buildings. Now, after completing the software engineering
                program at Fullstack Academy, I am ready to use the same
                attention to detail I used as an architect to craft incredible
                user experiences in the form of software.
              </Typography>
            </Grid>
          </Grid>
        </InView>
      </div>
    </section>
  );
};

export default Intro;
