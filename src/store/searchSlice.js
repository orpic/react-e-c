import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    terms: [],
  },
  reducers: {
    addSearchTerms(state, action) {
      state.terms = action.payload;
    },
    clearSearchTerms() {
      state.terms = [];
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
