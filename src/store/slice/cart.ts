import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CartItem, Variant } from "../../../types";
import { CartState } from "../state";

const initialState: CartState = {
  totalNumberOfCartItems: 0,
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
      state.totalNumberOfCartItems = state.items.reduce(
        (prev: number, current: CartItem) => {
          return prev + current.quantity;
        },
        0
      );
    },
    removeVariantFromCart: (state, action: PayloadAction<string>) => {
      const itemExists = state.items.find(
        (_variant) => _variant.item.id === action.payload
      );
      if (itemExists) {
        state.totalNumberOfCartItems =
          state.totalNumberOfCartItems - itemExists?.quantity;
        state.items = state.items.filter(
          (_variant) => _variant.item.id !== action.payload
        );
      }
    },
    increaseCartVariantQuantity: (state, action: PayloadAction<string>) => {
      const itemExists = state.items.find(
        (_variant) => _variant.item.id === action.payload
      );
      if (itemExists) {
        state.totalNumberOfCartItems = state.totalNumberOfCartItems + 1;
        state.items = state.items.map((_variant) => {
          if (_variant.item.id === action.payload) {
            return {
              ..._variant,
              quantity: _variant.quantity + 1,
            };
          }
          return _variant;
        });
      }
    },
  },
});

export const {
  addVariantToCart,
  removeVariantFromCart,
  increaseCartVariantQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
