import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CartItem, Variant, FetchVariantResponse } from "../../../types";
import { CartState } from "../state";

const initialState: CartState = {
  totalNumberOfCartItems: 0,
  items: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addVariantToCart: (state, action: PayloadAction<FetchVariantResponse>) => {
      const itemExists = state.items.find(
        (_variant) =>
          _variant.item.selectedVariant.id === action.payload.selectedVariant.id
      );
      if (!itemExists) {
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
        const price = action.payload.product?.price.find(
          (_price) => _price.currency === action?.payload?.currency?.id
        );
        const amount = price?.amount ?? 0;
        state.totalAmount = state.totalAmount + amount;
      }

      if (itemExists) {
        const price = itemExists.item.product?.price.find(
          (_price) => _price.currency === action?.payload?.currency?.id
        );
        const amount = price?.amount ?? 0;
        state.totalAmount = state.totalAmount + amount;
        state.totalNumberOfCartItems = state.totalNumberOfCartItems + 1;
        state.items = state.items.map((_variant) => {
          if (
            _variant.item.selectedVariant.id ===
            action.payload.selectedVariant.id
          ) {
            return {
              ..._variant,
              quantity: _variant.quantity + 1,
            };
          }
          return _variant;
        });
      }
    },
    removeVariantFromCart: (state, action: PayloadAction<string>) => {
      const itemExists = state.items.find(
        (_variant) => _variant.item.selectedVariant.id === action.payload
      );

      if (itemExists) {
        const price = itemExists.item.product?.price.find(
          (_price) => _price.currency === itemExists.item?.currency?.id
        );
        const amount = price?.amount ?? 0;
        state.totalAmount = state.totalAmount - amount;
        if (itemExists?.quantity - 1 > 0) {
          state.totalNumberOfCartItems = state.totalNumberOfCartItems - 1;
          state.items = state.items.map((_item) => {
            if (_item.item.selectedVariant.id === action.payload) {
              return {
                ..._item,
                quantity: _item.quantity - 1,
              };
            }
            return _item;
          });
        }

        if (itemExists?.quantity - 1 === 0) {
          state.totalAmount = state.totalAmount - amount;
          state.totalNumberOfCartItems = state.totalNumberOfCartItems - 1;
          state.items = state.items.filter(
            (_variant) => _variant.item.selectedVariant.id !== action.payload
          );
        }
      }
    },
    increaseCartVariantQuantity: (state, action: PayloadAction<string>) => {
      const itemExists = state.items.find(
        (_variant) => _variant.item.selectedVariant.id === action.payload
      );

      if (itemExists) {
        const price = itemExists.item.product?.price.find(
          (_price) => _price.currency === itemExists.item?.currency?.id
        );

        const amount = price?.amount ?? 0;
        state.totalAmount = state.totalAmount + amount;
        state.totalNumberOfCartItems = state.totalNumberOfCartItems + 1;
        state.items = state.items.map((_variant) => {
          if (_variant.item.selectedVariant.id === action.payload) {
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
