import Link from "next/link";
import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.css";

interface IconButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({
  href,
  children,
  disabled = false,
  className = "",
  ...props
}) => {
  if (typeof href !== "undefined") {
    return (
      <Link href={href}>
        <a className={styles.IconButton} {...props}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <button className={styles.IconButton} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
