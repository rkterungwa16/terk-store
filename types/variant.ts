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
};
