import { RootState } from "./state";

export const cartSelector = (state: RootState) => state.cart;
export const productSelector = (state: RootState) => state.product;

