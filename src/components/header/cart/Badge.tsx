import { CartIcon } from "../../icons";

import styles from "./styles.module.css";

export const HeaderCartBadge = () => {
  return (
    <div className={styles.HeaderCartBadge__container}>
      <CartIcon />
    </div>
  );
};
