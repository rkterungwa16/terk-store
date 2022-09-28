import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import cartReducer from './slice/cart';
import productReducer from './slice/product';

const middleware = [thunk];
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer
  },
  middleware: [...middleware],
  devTools: process.env.NODE_ENV !== 'production',
});
