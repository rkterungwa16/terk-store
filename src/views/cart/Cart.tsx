import { FC } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FetchVariantResponse } from "../../../types";
import { cartSelector, productSelector } from "../../store/selectors";
import { ProductDetail } from "./ProductDetail";

import styles from "./styles.module.css";
import { StandardButton } from "../../components/buttons";
import { ButtonColor } from "../../components/buttons/constants";
type Props = {
  productVariants?: FetchVariantResponse[];
};
export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const product = useSelector(productSelector);
  return (
    <div className={styles.Cart}>
      {cart.items.map((_item) => (
        <div
          key={_item.item.selectedVariant.id}
          className={styles["Cart__item--wrapper"]}
        >
          <ProductDetail productVariant={_item.item} />
          <div className={styles["CartItem__actions--wrapper"]}>
            <div className={styles.CartItem__btns}>
              <div className={styles["CartItem__buttons--wrapper"]}>
                <StandardButton variant="outlined" color={ButtonColor.DEFAULT}>
                  +
                </StandardButton>
              </div>
              <div className={styles["CartItem__buttons--wrapper"]}>
                <StandardButton variant="outlined" color={ButtonColor.DEFAULT}>
                  -
                </StandardButton>
              </div>
            </div>
            <Image
              src={_item.item.selectedVariant.images[0]}
              alt={_item.item.selectedVariant.color.name}
              width={200}
              height={288}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
