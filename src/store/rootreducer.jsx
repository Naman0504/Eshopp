// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import cartslice from "./cartslice";

const rootReducer = combineReducers({
  cart: cartslice,
});

export default rootReducer;
