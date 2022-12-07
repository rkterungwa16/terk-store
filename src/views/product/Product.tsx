import { FC, useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { CategoryNames } from "../../../enums";
import { addVariantToCart } from "../../../src/store/slice/cart";
import { FetchVariantResponse, Category, Currency } from "../../../types";
import styles from "./styles.module.css";
import { ProductColors, ProductSizes } from "../../components/product";
import { StandardButton } from "../../components/buttons";
import { cartSelector } from "../../store/selectors";

type Props = {
  productVariant: FetchVariantResponse | null;
  // categories: Category[]
  // currencies: Currency[];
  // category: CategoryNames;
  // currency: Currency;
};
export const Product: FC<Props> = ({ productVariant }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
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
          size="sm"
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
        <div className={styles.Product__btn}>
          <StandardButton
            size="base"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              console.log(productVariant);
              dispatch(
                addVariantToCart(productVariant as FetchVariantResponse)
              );
            }}
          >
            ADD TO CART
          </StandardButton>
        </div>
        <span className={styles.Product__description}>
          {productVariant?.product?.description}
        </span>
      </div>
    </div>
  );
};
