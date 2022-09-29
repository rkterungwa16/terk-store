import { FC } from "react";
import classnames from "classnames";

import { Color } from "../../../../types";

import styles from "./styles.module.css";
import Link from "next/link";

type Props = {
  colors: Color[];
  currentColor?: Color;
};
export const ProductColors: FC<Props> = ({ colors, currentColor }) => {
  return (
    <div className={styles.ProductColors__container}>
      <span className={styles.ProductColors__title}>Color:</span>
      <div className={styles["ProductColors__button--container"]}>
        {colors.map((_color, index) => (
          <div
            key={index}
            className={classnames(styles["Product__color--wrapper"], {
              [styles["Product__color--active"]]:
                currentColor?.hexCode === _color.hexCode,
            })}
          >
            <Link href={`/product/${_color.variantId}`}>
              <a>
                <span
                  className={styles.Product__color}
                  style={{
                    background: _color.hexCode,
                  }}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
