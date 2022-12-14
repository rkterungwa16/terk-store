import brands from "../data/brands.json";
import products from "../data/products.json";
import variants from "../data/variants.json";
import currencies from "../data/currencies.json";
import { Variant, FetchVariantResponse } from "../types";

export function fetchVariant(
  id: string,
  currency: string
): FetchVariantResponse {
  const selectedVariant = variants.find(
    (_variant) => _variant.id === id
  ) as Variant;

  const productVariants = variants.filter((_variant) => _variant.productId === selectedVariant.productId);

  const selectedProduct = products.find(
    (product) => product.id === selectedVariant?.productId
  );

  const productBrand = brands.find(
    (_brand) => _brand.id === selectedProduct?.brand
  );
  const productCurrency = currencies.find(
    (_currency) => _currency.code === currency
  );

  const productColors = productVariants.map((_variant) => ({
    ..._variant.color,
    variantId: _variant.id
  }))

  return {
    selectedVariant,
    productVariants,
    currency: productCurrency,
    brand: productBrand,
    product: selectedProduct,
    colors: productColors
  };
}
