import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    terms: [],
    inputValue: "",
  },
  reducers: {
    addSearchTerms(state, action) {
      state.terms = action.payload;
    },
    clearSearchTerms(state) {
      state.terms = [];
    },
    updateInputValue(state, action) {
      state.inputValue = action.payload;
    },
    clearInputValue(state) {
      state.inputValue = "";
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
