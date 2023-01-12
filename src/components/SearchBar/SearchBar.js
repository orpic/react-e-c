import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./SearchBar.module.css";
import { searchActions } from "../../store/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  // local - controlled input field
  const [searchText, setSearchText] = useState("");

  //clear button - cleans the search terms
  const clearButtonHandler = () => {
    //local input clean
    setSearchText("");
    //store clean
    dispatch(searchActions.clearSearchTerms());
  };

  // input change listener + controlled input
  const textInputHandler = (event) => {
    const textValue = event.target.value;
    setSearchText(textValue);
  };

  //splitting into free text and sending data
  const searchHandler = () => {
    const searchList = searchText.split(" ");

    dispatch(searchActions.addSearchTerms(searchList));
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
