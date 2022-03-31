import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity:
            state.products[existingIndex].quantity + +action.payload.quantity,
        };
      } else {
        let tempProductItem = {
          ...action.payload,
          quantity: +action.payload.quantity,
        };
        state.products.push(tempProductItem);
        state.quantity = state.quantity + 1;
      }

      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
