import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const Social = (props) => {
  console.log("props:", props);
  const { fileName, aValues, classNames = [] } = props;
  const { ariaLabel, href, ...otherAValues } = aValues;

  const theme = useTheme();
  const useStyles = makeStyles({
    image: {
      filter:
        "invert(52%) sepia(40%) saturate(688%) hue-rotate(123deg) brightness(93%) contrast(88%)",
    },
    root: {
      width: "50px",
      height: "50px",
      border: `2px solid ${theme.palette.secondary.main}`,
      borderRadius: "30px",
      margin: 3,
      [theme.breakpoints.down("sm")]: { width: "40px", height: "40px" },
      [theme.breakpoints.down("xs")]: {
        width: "35px",
        height: "35px",
        border: `1px solid ${theme.palette.secondary.main}`,
        margin: 3,
      },
    },
  });
  const classes = useStyles();
  return (
    <Grid item id={classNames[0]} className={classes.root}>
      <a href={href}>
        <img
          className={classes.image}
          src={fileName}
          aria-label={ariaLabel}
          {...otherAValues}
        />
      </a>
    </Grid>
  );
};

export default Social;
