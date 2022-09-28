import { CartItem, FetchProductResponse } from "../../types";

export interface CartState {
  totalNumberOfCartItems: number;
  items: CartItem[];
}

export interface ProductState {
  selectedVariant: FetchProductResponse | null;
  products: FetchProductResponse[];
}

export interface RootState {
  cart: CartState;
  product: ProductState;
}
