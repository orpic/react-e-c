import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./SearchBar.module.css";
import { searchActions } from "../../store/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  // input value from the store
  // store is the one truth
  const searchText = useSelector((state) => state.search.inputValue);

  // input change listener + controlled input
  const textInputHandler = (event) => {
    const textValue = event.target.value;
    // updating value aat store
    dispatch(searchActions.updateInputValue(textValue));
  };

  //clear button - cleans the search
  const clearButtonHandler = () => {
    // store clean
    dispatch(searchActions.clearSearchTerms());
    // input value store clean
    dispatch(searchActions.clearInputValue());
  };

  //convert into free text array and send data
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
