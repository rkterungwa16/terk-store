import { FC, useState } from "react";
import Image from "next/image";

import { Card } from "../../components/card/Card";

import styles from "./styles.module.css";
import classnames from "classnames";
import { IconButton } from "../../components/buttons";
import { CartIcon } from "../../components/icons";
import { ButtonColor } from "../../components/buttons/constants";

type Props = {
  imageUrl?: string;
  name?: string;
  brand?: string;
  price?: number;
  currencySymbol?: string;
};
export const ProductCard: FC<Props> = ({
  imageUrl,
  name,
  brand,
  price,
  currencySymbol,
}) => {
  const [cartIconIsVisible, setCartIconVisible] = useState(false);
  const handleMouseEnter = () => {
    setCartIconVisible(true);
  };
  const handleMouseLeave = () => {
    setCartIconVisible(false);
  };
  return (
    <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles["ProductCard__image--container"]}>
        <Image height={330} width={359} alt={name} src={imageUrl ?? ""} />
        {cartIconIsVisible && (
          <div className={styles.ProductCard__cart}>
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
  );
};
