import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children?: ReactNode;
};
export const HeaderContainer: FC<Props> = ({ children }) => (
  <div className={styles.Header__container}>{children}</div>
);
