import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import productSlice from "./productSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    search: searchSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
