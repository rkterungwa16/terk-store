import { FC, useState } from "react";
import Image from "next/image";

import { CategoryNames } from "../../../enums";
import { FetchVariantResponse, Category, Currency } from "../../../types";
import styles from "./styles.module.css";
import { ProductColors, ProductSizes } from "../../components/product";

type Props = {
  productVariant: FetchVariantResponse | null;
  // categories: Category[];
  // currencies: Currency[];
  // category: CategoryNames;
  // currency: Currency;
};
export const Product: FC<Props> = ({ productVariant }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const handleSelectImageClick = (index: number) => {
    return () => {
      setSelectedImage(index);
    };
  };
  return (
    <div className={styles.Product}>
      <div className={styles["Product__image--wrapper"]}>
        <div className={styles["Product__images--desktop"]}>
          {productVariant?.selectedVariant?.images.map((_img, index) => (
            <div
              onClick={handleSelectImageClick(index)}
              key={_img}
              className={styles["Product__side--image"]}
            >
              <Image
                src={productVariant?.selectedVariant?.images[index] ?? ""}
                alt={`${productVariant?.selectedVariant.color.name}-${index}`}
                height={80}
                width={79}
              />
            </div>
          ))}
        </div>
        <div className={styles["Product__image--main"]}>
          <Image
            src={productVariant?.selectedVariant.images[selectedImage] ?? ""}
            alt={`${productVariant?.selectedVariant.color.name}-${selectedImage}`}
            height={511}
            width={610}
          />
          <div className={styles["Product__images--mobile"]}>
            {productVariant?.selectedVariant?.images.map((_img, index) => (
              <div
                onClick={handleSelectImageClick(index)}
                key={_img}
                className={styles["Product__side--image"]}
              >
                <Image
                  src={productVariant?.selectedVariant?.images[index] ?? ""}
                  alt={`${productVariant?.selectedVariant.color.name}-${index}`}
                  height={80}
                  width={79}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.Product__details}>
        <span className={styles.Product__brand}>
          {productVariant?.brand?.name}
        </span>
        <span className={styles.Product__name}>
          {productVariant?.product?.name}
        </span>
        <ProductSizes sizes={productVariant?.product?.sizes ?? []} />
        <ProductColors
          colors={productVariant?.colors ?? []}
          currentColor={productVariant?.selectedVariant.color}
        />
        <span className={styles["Product__price--title"]}>Price:</span>
        <span className={styles["Product__price"]}>
          {`${productVariant?.currency?.symbol}${
            productVariant?.product?.price.find(
              (_product) => _product.currency === productVariant?.currency?.id
            )?.amount
          }`}
        </span>
      </div>
    </div>
  );
};
