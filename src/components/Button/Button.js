import React from "react";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from "../styles"

const Button = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.button}>
      <IconButton size="large" onClick={props.onClick}>
        <SearchIcon fontSize="inherit" color="inherit" />
      </IconButton>
    </div>
  );
};

export default Button;
