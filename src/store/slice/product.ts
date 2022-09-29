import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { FetchProductResponse, FetchVariantResponse } from "../../../types";
import { ProductState } from "../state";

const initialState: ProductState = {
  selectedVariant: null,
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectVariant: (state, action: PayloadAction<FetchVariantResponse>) => {
      state.selectedVariant = action.payload;
    },
    fetchProducts: (state, action: PayloadAction<FetchProductResponse[]>) => {
      state.products = action.payload;
    },
  },
});

export const { selectVariant, fetchProducts } = productSlice.actions;

export default productSlice.reducer;
