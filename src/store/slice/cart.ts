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
      // check cart items to see if selected variant exist
      const itemExists = state.items.find(
        (_variant) =>
          _variant.item.selectedVariant.id === action.payload.selectedVariant.id
      );

      //if it doesn't
      if (!itemExists) {
        //add item
        //increase quantity by 1
        state.items.push({
          quantity: 1,
          item: action.payload,
        });

        //calculate total number of items in the cart based on the quantity of each
        state.totalNumberOfCartItems = state.items.reduce(
          (prev: number, current: CartItem) => {
            return prev + current.quantity;
          },
          0
        );

        //find price of the item in the currency currently selected
        const price = action.payload.product?.price.find(
          (_price) => _price.currency === action?.payload?.currency?.id
        );

        console.log('cart items',state.items)
        //add price amount to total amount
        const amount = price?.amount ?? 0;
        state.totalAmount = state.totalAmount + amount;
      }

      //if it does
      if (itemExists) {

        //find price of the item in the currency currently selected
        const price = itemExists.item.product?.price.find(
          (_price) => _price.currency === action?.payload?.currency?.id
        );

        //add price amount to total amount
        const amount = price?.amount ?? 0;
        state.totalAmount = state.totalAmount + amount;

        //calculate total number of items in the cart based on the quantity of each(add 1 to previous quantity value)
        state.totalNumberOfCartItems = state.totalNumberOfCartItems + 1;

        //do you need to add totalNumberOfCartItems after increasing quantity of cart
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
