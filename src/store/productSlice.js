import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: "pending",
  },
  reducers: {
    addProductsToStore: (state, action) => {
      state.products = action.payload;
    },
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
