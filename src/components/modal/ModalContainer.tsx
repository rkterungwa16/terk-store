import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode
}
export const ModalContainer: FC<Props> = ({ children }) => (
  <div className={styles.Modal__container}>{children}</div>
);
