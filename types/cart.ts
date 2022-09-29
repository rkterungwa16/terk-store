import { Variant, FetchVariantResponse } from ".";

export type CartItem = {
  quantity: number;
  item: FetchVariantResponse;
};
