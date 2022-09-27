import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import cartReducer from './slice/cart';

const middleware = [thunk];
export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  middleware: [...middleware],
  devTools: process.env.NODE_ENV !== 'production',
});
