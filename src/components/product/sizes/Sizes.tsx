import { FC } from "react";
import classnames from "classnames";

import { Size } from "../../../../types";
import { StandardButton } from "../../buttons";
import { ButtonColor } from "../../buttons/constants";

import styles from "./styles.module.css";

type Props = {
  sizes: Size[];
  buttonSize?: "sm" | "xs";
};
export const ProductSizes: FC<Props> = ({ sizes, buttonSize = "sm" }) => {
  return (
    <div className={styles.ProductSizes__container}>
      <span className={styles.ProductSizes__title}>Size:</span>
      <div className={styles["ProductSizes__button--container"]}>
        {sizes.map((_size) => (
          <div
            key={_size.id}
            className={classnames({
              [styles["ProductSizes__buttons--small"]]: buttonSize === "xs",
              [styles["ProductSizes__buttons--wrapper"]]: buttonSize === "sm",
            })}
          >
            <StandardButton
              size={buttonSize}
              variant="outlined"
              color={ButtonColor.DEFAULT}
            >
              {_size.size}
            </StandardButton>
          </div>
        ))}
      </div>
    </div>
  );
};
