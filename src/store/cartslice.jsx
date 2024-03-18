// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    subTotal: 0,
    tax: 0,
    total: 0,
  },
  reducers: {
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    calculatePrice: (state) => {
      let sum = 0;
      state.items.forEach((i) => (sum += i.price * i.quantity));
      state.subTotal = sum;
      state.tax = +(state.subTotal * 0.18).toFixed();
      state.total = state.subTotal + state.tax;
    },
  },
});

export const {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  addToCart,
  calculatePrice,
} = cartSlice.actions;

export default cartSlice.reducer;
