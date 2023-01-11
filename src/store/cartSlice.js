import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },

  reducers: {
    addItemsToCart(state, action) {
      //getting the new item to be added
      const newItem = action.payload;
      //searching if we have that item in cart
      const existingItem = state.items.find((item) => item.id === newItem.id);
      //
      state.totalQuantity++;
      //
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          imageUrl: newItem.imageUrl,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          type: newItem.type,
          type: newItem.type,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
  },
});
