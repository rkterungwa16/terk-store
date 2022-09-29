import { CartItem, FetchProductResponse, FetchVariantResponse } from "../../types";

export interface CartState {
  totalNumberOfCartItems: number;
  items: CartItem[];
}

export interface ProductState {
  selectedVariant: FetchVariantResponse | null;
  products: FetchProductResponse[];
}

export interface RootState {
  cart: CartState;
  product: ProductState;
}
