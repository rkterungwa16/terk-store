import { FC, ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
}
export const HeaderCartContainer:FC<Props> = ({ children }) => (
  <div className={styles.HeaderCart__container}>
    {children}
  </div>
)
