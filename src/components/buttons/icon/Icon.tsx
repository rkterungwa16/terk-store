import Link from "next/link";
import classnames from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";
import { ButtonColor } from "../constants";
import styles from "./styles.module.css";

interface IconButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  disabled?: boolean;
  children?: ReactNode;
  color?: ButtonColor;
}

export const IconButton: FC<IconButtonProps> = ({
  href,
  children,
  disabled = false,
  className = "",
  color,
  ...props
}) => {
  const buttonStyles = {
    [styles["IconButton--disabled"]]: disabled,
    [styles["IconButton--primary"]]: color === ButtonColor.PRIMARY,
  };
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
    <button
      className={classnames(styles.IconButton, {
        ...buttonStyles,
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
