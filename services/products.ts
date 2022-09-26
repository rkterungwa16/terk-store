import categories from "../data/categories.json";
import brands from "../data/brands.json";
import products from "../data/products.json";
import variants from "../data/variants.json";
import currencies from "../data/currencies.json";

import { Variant, Currency, Brand, Product } from "../types";

export type FetchProductsResponse = {
  brand?: Brand;
  currency?: Currency;
  product?: Product;
} & Variant;

export function fetchProducts(category: string, currency: string): FetchProductsResponse[] {
  const selectedCategory = categories.find(
    (_category) => _category.name === category
  );

  const selectedCurrency = currencies.find(
    (_currency) => _currency.code === currency
  );

  const categoryProducts = products.filter(
    (product) => product.category === selectedCategory?.id
  );

  const categoryVariants = variants.filter(
    (_variant) =>
      !!categoryProducts.find(
        (_categoryProduct) => _categoryProduct.id === _variant.productId
      )
  );

  const modifiedVariants: {
    [x: string]: Variant[];
  } = categoryVariants.reduce((prev: any, current: Variant) => {
    const product = categoryProducts.find(
      (_product) => _product.id === current.productId
    );
    const brand = brands.find((_brand) => _brand.id === product?.brand);
    const currency = currencies.find(
      (_currency) =>
        _currency.id ===
        product?.price.find(
          (_productPrice) => _productPrice.currency === selectedCurrency?.id
        )?.currency
    );
    if (prev[current.productId]) {
      return {
        ...prev,
        [current.productId]: [
          ...prev[current.productId],
          {
            ...current,
            product,
            brand,
            currency,
          },
        ],
      };
    }
    return {
      ...prev,
      [current.productId]: [
        {
          ...current,
          product,
          brand,
          currency,
        },
      ],
    };
  }, {});
  return Object.values(modifiedVariants).map(
    (_variant: Variant[]) => _variant[0]
  );
}
