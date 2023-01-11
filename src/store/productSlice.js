import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: "pending",
  },
  reducers: {
    addProductsToStore(state, action) {
      const newProducts = action.payload;

      state.products = newProducts.products;
      state.status = newProducts.status;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
