import { FC } from "react";

import { IconButton } from "../../buttons";
import { CartIcon } from "../../icons";

import styles from "./styles.module.css";

type Props = {
  totalNumberOfItems?: number;
};

export const HeaderCartBadge: FC<Props> = ({ totalNumberOfItems }) => {
  return (
    <div className={styles.HeaderCartBadge__container}>
      {!!totalNumberOfItems && (
        <span className={styles.HeaderCart__badge}>{totalNumberOfItems}</span>
      )}
      <IconButton>
        <CartIcon />
      </IconButton>
    </div>
  );
};
