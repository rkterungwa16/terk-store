import { FC } from "react";
import classnames from "classnames";

import { Color } from "../../../../types";

import styles from "./styles.module.css";
import Link from "next/link";

type Props = {
  colors: Color[];
  currentColor?: Color;
  size: "sm" | "xs";
};
export const ProductColors: FC<Props> = ({
  colors,
  currentColor,
  size = "sm",
}) => {
  return (
    <div className={styles.ProductColors__container}>
      <span className={styles.ProductColors__title}>Color:</span>
      <div className={styles["ProductColors__button--container"]}>
        {colors.map((_color, index) => (
          <div
            key={index}
            className={classnames({
              [styles["Product__color--active"]]:
                currentColor?.hexCode === _color.hexCode,
              [styles["ProductColor__wrapper--small"]]: size === "xs",
              [styles["Product__color--wrapper"]]: size === "sm",
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
