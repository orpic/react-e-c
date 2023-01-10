import React from "react";
// eslint-disable-next-line
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <>
      <div className={classes.border}>
        <div className={classes.search}>
          <input className={classes.input} />
          <button className={classes.clearButton}>Clear</button>
          <button className={classes.searchButton}>Search</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
