export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  sizes: string[];
  price: {
    currency: string;
    amount: number;
  }[];
};
