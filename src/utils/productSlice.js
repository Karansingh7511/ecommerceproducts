import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    addproducts:null,
    filterproduct: null,
  },
  reducers: {
    filterProducts: (state, action) => {
      state.filterproduct = action.payload;
    },
    addProducts: (state, action) =>{
        state.addproducts = action.payload;
    },
  },
});

export const { filterProducts, addProducts } = productSlice.actions;

export default productSlice.reducer;