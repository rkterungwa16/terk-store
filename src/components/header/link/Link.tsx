import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";

import styles from "./styles.module.css";

type Props = {
  href?: string;
  text?: string;
  isActive?: boolean;
};

export const HeaderLink: FC<Props> = ({ text, isActive, href = "" }) => (
  <Link href={href}>
    <a
      className={classNames(styles["Header__link"], {
        [styles["Header__link--active"]]: isActive,
        [styles["Header__link--inactive"]]: !isActive,
      })}
    >
      {text}
    </a>
  </Link>
);
