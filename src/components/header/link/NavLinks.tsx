import { FC } from "react";
import { CategoryNames } from "../../../../enums";
import { Category } from "../../../../types";

import { HeaderLink } from "./Link";
import styles from "./styles.module.css";

type Props = {
  categories?: Category[];
  selectedCategory?: CategoryNames;
};
export const HeaderNavLinks: FC<Props> = ({ categories, selectedCategory }) => {
  return (
    <div className={styles.HeaderNavLinks__wrapper}>
      {categories?.map((category) => (
        <HeaderLink
          key={category.id}
          text={category.name}
          href={`/${category.name}`}
          isActive={selectedCategory === category.name}
        />
      ))}
    </div>
  );
};
