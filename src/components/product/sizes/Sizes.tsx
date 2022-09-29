import { FC } from "react";

import { Size } from "../../../../types";
import { StandardButton } from "../../buttons";
import { ButtonColor } from "../../buttons/constants";

import styles from "./styles.module.css";

type Props = {
  sizes: Size[];
};
export const ProductSizes: FC<Props> = ({ sizes }) => {
  return (
    <div className={styles.ProductSizes__container}>
      <span className={styles.ProductSizes__title}>Size:</span>
      <div className={styles["ProductSizes__button--container"]}>
        {sizes.map((_size) => (
          <div
            key={_size.id}
            className={styles["ProductSizes__buttons--wrapper"]}
          >
            <StandardButton variant="outlined" color={ButtonColor.DEFAULT}>
              {_size.size}
            </StandardButton>
          </div>
        ))}
      </div>
    </div>
  );
};
