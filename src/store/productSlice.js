import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        addProductsToStore(state, action)
    }
});