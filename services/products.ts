import categories from "../data/categories.json";
import brands from "../data/brands.json";
import products from "../data/products.json";
import variants from "../data/variants.json";
import currencies from "../data/currencies.json";

import { Variant, FetchProductResponse, Color } from "../types";

export function fetchProducts(
  category: string,
  currency: string
): FetchProductResponse[] {
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
    const price = product?.price.find(
      (_productPrice) => _productPrice.currency === selectedCurrency?.id
    )
    const currency = currencies.find(
      (_currency) =>
        _currency.id === price?.currency
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
            price
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
          price
        },
      ],
    };
  }, {});
  return Object.values(modifiedVariants).map((_variant: Variant[]) => {
    const checkProductInstock = _variant.reduce(
      (prev: number, current: Variant) => {
        return prev + current.availableStock;
      },
      0
    );
    const aggrVariantColors = _variant.reduce(
      (
        prev: { variantId: string; colorDetails: Color }[],
        current: Variant
      ) => {
        return [
          ...prev,
          {
            variantId: current.id,
            colorDetails: current.color,
          },
        ];
      },
      []
    );
    const firstVariantInstock = _variant.find(
      (_variantInStock) => !!_variantInStock.availableStock
    );
    return {
      productVariants: _variant,
      variant: firstVariantInstock,
      colors: aggrVariantColors,
      inStock: !!checkProductInstock,
    };
  });
}
