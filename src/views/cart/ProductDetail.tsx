import { FC } from "react";
import { CartItem, FetchVariantResponse } from "../../../types";
import { StandardButton } from "../../components/buttons";
import { ProductSizes, ProductColors } from "../../components/product";

import styles from "./styles.module.css";

type Props = {
  productVariant?: FetchVariantResponse;
};

export const ProductDetail: FC<Props> = ({ productVariant }) => (
  <div className={styles.Product__details}>
    <span className={styles.Product__brand}>{productVariant?.brand?.name}</span>
    <span className={styles.Product__name}>
      {productVariant?.product?.name}
    </span>
    <span className={styles["Product__price"]}>
      {`${productVariant?.currency?.symbol}${
        productVariant?.product?.price.find(
          (_product) => _product.currency === productVariant?.currency?.id
        )?.amount
      }`}
    </span>
    <ProductSizes sizes={productVariant?.product?.sizes ?? []} />
    <ProductColors
      colors={productVariant?.colors ?? []}
      currentColor={productVariant?.selectedVariant.color}
    />
  </div>
);
