import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./SearchBar.module.css";
import { searchActions } from "../../store/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.search.inputValue);

  const textInputHandler = (event) => {
    const textValue = event.target.value;
    dispatch(searchActions.updateInputValue(textValue));
  };

  const clearButtonHandler = () => {
    dispatch(searchActions.clearSearchTerms());
    dispatch(searchActions.clearInputValue());
  };

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
