import { FC } from "react";
import Image from "next/image";
import { CategoryNames, Currencies } from "../../../enums";
import { Category, Currency } from "../../../types";
import { HeaderContainer } from "./container";
import { HeaderNavLinks } from "./link";
import { HeaderCurrencies } from "./cart/Currencies";

import styles from "./styles.module.css";
import { HeaderCartBadge } from "./cart/Badge";

type Props = {
  categories: Category[];
  selectedCategory: CategoryNames;
  currencies: Currency[];
  selectedCurrency: Currency;
  totalNumberOfItems?: number;
};

export const Header: FC<Props> = ({
  categories,
  currencies,
  selectedCategory,
  selectedCurrency,
  totalNumberOfItems,
}) => {
  return (
    <header className={styles.Header}>
      <HeaderContainer>
        <HeaderNavLinks
          categories={categories}
          selectedCategory={selectedCategory}
        />
        <Image width={31} height={28} src="/logo.png" alt="logo" />
        <div style={{ display: "flex" }}>
          <HeaderCurrencies
            currency={selectedCurrency}
            currencies={currencies}
            category={selectedCategory}
          />
          <HeaderCartBadge currency={selectedCurrency} totalNumberOfItems={totalNumberOfItems} />
        </div>
      </HeaderContainer>
    </header>
  );
};
