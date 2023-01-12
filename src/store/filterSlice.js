import { createSlice } from "@reduxjs/toolkit";

const initState = {
  color: [
    {
      value: "grey",
      checkState: false,
    },
    {
      value: "purple",
      checkState: false,
    },
    {
      value: "red",
      checkState: false,
    },
    {
      value: "white",
      checkState: false,
    },
    {
      value: "blue",
      checkState: false,
    },
    {
      value: "green",
      checkState: false,
    },
  ],
  gender: [
    {
      value: "men",
      checkState: false,
    },
    {
      value: "women",
      checkState: false,
    },
  ],
  type: [
    {
      value: "polo",
      checkState: false,
    },
    {
      value: "hoodie",
      checkState: false,
    },
    {
      value: "basic",
      checkState: false,
    },
  ],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initState,

  reducers: {
    toggleColorFliter(state, action) {
      state.color.forEach((color) => {
        if (color.value === action.payload.value) {
          color.checkState = action.payload.checkState;
          //   console.log(action.payload.value, action.payload.checkState);
        }
      });
    },

    toggleGenderFliter(state, action) {
      state.gender.forEach((gender) => {
        if (gender.value === action.payload.value) {
          gender.checkState = action.payload.checkState;
        }
      });
    },

    toggleTypeFliter(state, action) {
      state.type.forEach((type) => {
        if (type.value === action.payload.value) {
          type.checkState = action.payload.checkState;
        }
      });
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
