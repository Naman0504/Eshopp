// store.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
