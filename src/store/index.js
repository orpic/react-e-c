import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
