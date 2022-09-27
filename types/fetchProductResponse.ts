import { Brand } from "./brand";
import { Currency } from "./currency";
import { Product } from "./product";
import { Variant } from "./variant";
import { Color } from './color';

export type FetchProductResponse = {
  brand?: Brand;
  currency?: Currency;
  product?: Product;
  variant?: Variant;
  colors?: {
    variantId: string;
    colorDetails: Color;
  }[];
  productVariants?: Variant[];
};
