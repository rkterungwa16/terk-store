import { FC, ReactElement } from "react";

import styles from "./styles.module.css";

type Props = {
  children: ReactElement[];
};

export const DropdownMenu: FC<Props> = ({ children }) => {
  return <div className={styles.Dropdown__menu}>{children}</div>;
};
