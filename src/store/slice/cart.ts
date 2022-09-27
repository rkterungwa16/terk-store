import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Variant } from "../../../types";
import { CartState } from '../state';

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addVariantToCart: (state, action: PayloadAction<Variant>) => {
      state.items.push({
        quantity: 1,
        item: action.payload,
      });
    },
    removeVariantFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (_variant) => _variant.item.id !== action.payload
      );
    },
  },
});

export const { addVariantToCart, removeVariantFromCart } = cartSlice.actions;

export default cartSlice.reducer;
