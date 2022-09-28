import { FC, ReactNode } from "react";
import Link from 'next/link';
import classnames from "classnames";

import styles from "./styles.module.css";

type Props = {
  isActive: boolean;
  children: ReactNode;
};
export const DropdownItem: FC<Props> = ({ isActive, children }) => {
  return (
    <div
      className={classnames(styles.Dropdown__item, {
        [styles["Dropdown__item--active"]]: isActive,
      })}
    >
      {children}
    </div>
  );
};
