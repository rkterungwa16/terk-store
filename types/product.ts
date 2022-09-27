export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  sizes: string[];
  inStock?: boolean;
  price: {
    currency: string;
    amount: number;
  }[];
};
