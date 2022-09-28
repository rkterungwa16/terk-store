import classnames from "classnames";
import Link from "next/link";
import { FC, HTMLAttributes, ReactNode } from "react";

import {
  ButtonColor,
  ButtonSize,
  Color,
  Size,
  Type,
  Variant,
} from "../constants";
import styles from "./styles.module.css";

interface StandardButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  type?: Type;
  color?: Color;
  size?: Size;
  variant?: Variant;
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  openInNewTab?: boolean;
  children?: ReactNode;
}

export const StandardButton: FC<StandardButtonProps> = ({
  type = "button",
  size = "xl",
  variant = "contained",
  href,
  children,
  color = "primary",
  disabled = false,
  className = "",
  onClick,
  fullWidth,
  ...props
}) => {
  const buttonSizeStyle = {
    [styles["StandardButtonSize--sm"]]: size === ButtonSize.XS,
    [styles["StandardButtonSize--sm"]]: size === ButtonSize.SM,
    [styles["StandardButtonSize--base"]]: size === ButtonSize.BASE,
  };
  const containedButtonStyles = {
    [styles["StandardButton--disabled"]]: disabled,
    [styles["StandardButton--default"]]: color === ButtonColor.DEFAULT,
    [styles["StandardButton--primary"]]: color === ButtonColor.PRIMARY,
  };

  const outlinedButtonStyles = {
    [styles["StandardButton__outlined--default"]]:
      color === ButtonColor.DEFAULT,
  };

  const buttonVariants: { [variant: string]: { [style: string]: boolean } } = {
    contained: containedButtonStyles,
    outlined: outlinedButtonStyles,
  };
  if (typeof href !== "undefined") {
    return (
      <Link href={href}>
        <a
          className={classnames(styles.StandardButton, className, {
            ...buttonVariants[variant],
            ...buttonSizeStyle,
            [styles["StandardButton__full"]]: !!fullWidth,
          })}
          {...props}
        >
          {children}
        </a>
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={classnames(styles.StandardButton, className, {
        ...buttonVariants[variant],
        ...buttonSizeStyle,
        [styles["StandardButton__full"]]: !!fullWidth,
      })}
      disabled={disabled}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
