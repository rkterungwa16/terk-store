import { Brand } from "./brand";
import { Color } from "./color";
import { Currency } from "./currency";
import { Product } from "./product";
import { Variant } from "./variant";

export type FetchVariantResponse = {
  selectedVariant: Variant;
  productVariants: Variant[];
  currency?: Currency;
  brand?: Brand;
  product?: Product;
  colors?: Color[];
};
