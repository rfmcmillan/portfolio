import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useInView, InView } from "react-intersection-observer";

const ThankYou = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.primary.contrastText,
      paddingBottom: "25px",
      paddingTop: "25px",
      height: "80px",
    },
    card: {
      backgroundColor: "#e0e0e0",
      color: theme.palette.text.primary,
      margin: "auto",
      padding: "20px 60px 20px 60px",
      width: "40vw",
      position: "relative",
      top: "50px",
      [theme.breakpoints.up("md")]: {
        width: "60vw",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    contain: {},
    text: { width: "80%", margin: "auto", textAlign: "center" },
  });
  const classes = useStyles();
  const { ref } = useInView({ threshold: 0 });
  return (
    <section className={classes.root}>
      <Grid ref={ref} className={classes.contain}>
        <InView
          as="div"
          onChange={(inView, entry) => {
            if (inView) entry.target.id = "thank-you";
          }}
        >
          <Paper
            className={classes.card}
            elevation={4}
            id="thank-you"
            name="thank-you"
          >
            <div ref={ref}>
              <Typography variant="h6" className={classes.text}>
                Thank you to Jen for supporting me while I learn and to Stew for
                encouraging me to pursue software engineering.
              </Typography>
            </div>
          </Paper>
        </InView>
      </Grid>
    </section>
  );
};

export default ThankYou;
