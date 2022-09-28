import { Brand } from "./brand";
import { Currency } from "./currency";
import { Product } from "./product";

export type Variant = {
  id: string;
  productId: string;
  availableStock: number;
  images: string[];
  color: {
    name: string;
    hexCode: string;
  };
  product?: Product;
  brand?: Brand;
  currency?: Currency;
  price?: {
    currency: string;
    amount: number;
  };
};
