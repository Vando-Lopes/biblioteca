import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../styles"

function Title() {
  const classes = useStyles()
  return (
    <Typography variant="h3" className={classes.title}>
      {process.env.REACT_APP_TITLE}
    </Typography>
  );
}

export default Title;
