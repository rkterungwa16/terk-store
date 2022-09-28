import { FC, ReactNode, HTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export const Card: FC<Props> = ({ children, ...others }) => (
  <div {...others} className={styles.Card__container}>
    {children}
  </div>
);
