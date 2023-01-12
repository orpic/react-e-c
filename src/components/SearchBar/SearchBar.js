import React, { useState } from "react";
// eslint-disable-next-line
import classes from "./SearchBar.module.css";

const SearchBar = ({ onDataChange }) => {
  // controlled input field
  const [searchText, setSearchText] = useState("");

  //clear button - cleans the input label
  const clearButtonHandler = () => {
    setSearchText("");
    onDataChange([]);
  };

  // Input Change Listener
  const textInputHandler = (event) => {
    const textValue = event.target.value;
    setSearchText(textValue);
  };

  //splitting into free text and sending data
  const searchHandler = () => {
    const searchList = searchText.split(" ");
    // console.log(searchList);
    onDataChange(searchList);
  };

  return (
    <>
      <div className={classes.border}>
        <div className={classes.search}>
          <input
            value={searchText}
            onChange={textInputHandler}
            className={classes.input}
          />
          <button onClick={clearButtonHandler} className={classes.clearButton}>
            Clear
          </button>
          <button onClick={searchHandler} className={classes.searchButton}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
