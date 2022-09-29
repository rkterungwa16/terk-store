import { FC, ReactNode, useRef } from "react";

import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

export const ModalDialog: FC<Props> = ({ children }) => {
  const dropdownRef = useRef(null);
  return (
    <div ref={dropdownRef} className={styles.Modal__dialog}>
      <div className={styles.ModalDialogContent__wrapper}>{children}</div>
    </div>
  );
};
