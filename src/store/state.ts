import { CartItems, FetchProductResponse } from "../../types";

export interface CartState {
  items: CartItems;
}

export interface ProductState {
  selectedVariant: FetchProductResponse | null;
  products: FetchProductResponse[];
}

export interface RootState {
  cartState: CartState;
  productState: ProductState;
}
