import brands from "../data/brands.json";
import products from "../data/products.json";
import variants from "../data/variants.json";
import currencies from "../data/currencies.json";
import { Currency, Brand, Variant,Product } from "../types";

export type FetchVariantResponse = {
  currency?: Currency;
  brand?: Brand;
  product?: Product;
} & Variant;

export function fetchVariant(
  id: string,
  currency: string
): FetchVariantResponse {
  const selectedVariant = variants.find(
    (_variant) => _variant.id === id
  ) as Variant;

  const selectedProduct = products.find(
    (product) => product.id === selectedVariant?.productId
  );

  const productBrand = brands.find(
    (_brand) => _brand.id === selectedProduct?.brand
  );
  const productCurrency = currencies.find(
    (_currency) => _currency.code === currency
  );

  return {
    ...selectedVariant,
    currency: productCurrency,
    brand: productBrand,
    product: selectedProduct
  };
}
