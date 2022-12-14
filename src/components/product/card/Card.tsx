import { FC, useEffect, useState } from "react";
import Image from "next/image";
import classnames from "classnames";

import { Card } from "../../../components/card/Card";

import styles from "./styles.module.css";

import { addVariantToCart, selectVariant } from "../../../store/slice";
import { FetchVariantResponse } from "../../../../types";
import { IconButton } from "../../../components/buttons";
import { CartIcon } from "../../../components/icons";
import { ButtonColor } from "../../../components/buttons/constants";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../../store/selectors";

type Props = {
  imageUrl?: string;
  name?: string;
  brand?: string;
  price?: number;
  currencySymbol?: string;
  variantId?: string;
  availableStock?: number;
  productVariant: FetchVariantResponse;
};

export const ProductCard: FC<Props> = ({
  imageUrl,
  name,
  brand,
  price,
  currencySymbol,
  variantId,
  availableStock = 0,
  productVariant,
}) => {
  const [cartIconIsVisible, setCartIconVisible] = useState(false);
  const handleMouseEnter = () => {
    setCartIconVisible(true);
  };
  const handleMouseLeave = () => {
    setCartIconVisible(false);
  };
  const dispatch = useDispatch();

  return (
    <Link href={`/${availableStock > 0 ? `product/${variantId}` : "#"}`}>
      <a>
        <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className={styles["ProductCard__image--container"]}>
            <Image
              className={classnames({
                [styles["ProductCard__notavailable--image"]]:
                  availableStock === 0,
              })}
              height={330}
              width={359}
              alt={name}
              src={imageUrl ?? ""}
            />
            {availableStock === 0 && (
              <span className={styles.ProductCard__notavailable}>
                OUT OF STOCK
              </span>
            )}
            {cartIconIsVisible && (

                  <div className={styles.ProductCard__cart} onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      addVariantToCart({...productVariant, selectedVariant:productVariant as any})
                    );
                  }}>
                    <IconButton color={ButtonColor.PRIMARY}>
                      <CartIcon fill="#ffffff" />
                    </IconButton>
                  </div>

            )}
          </div>
          <div className={styles["ProductCard__product--details"]}>
            <span
              className={classnames(
                styles.ProductCard__text,
                styles["ProductCard__product--name"]
              )}
            >{`${brand} ${name}`}</span>
            <span
              className={classnames(
                styles.ProductCard__text,
                styles["ProductCard__product--price"]
              )}
            >{`${currencySymbol}${price}`}</span>
          </div>
        </Card>
      </a>
    </Link>
  );
};
