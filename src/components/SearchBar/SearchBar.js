import { TextField } from "@material-ui/core";
import React from "react";
import { useStyles } from "../styles"

const SearchBar = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.search}>
      {/** 
      <input
        type="text"
        
        placeholder="Pesquise por um livro"
      />
      */}
      <TextField
        variant='outlined'
        className='search'
        onChange={props.onChange}
        placeholder="Pesquise por um livro"
        fullWidth
      />
    </div>
  );
};

export default SearchBar;
