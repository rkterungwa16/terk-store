import { FC } from "react";
import Image from "next/image";
import { CategoryNames, Currencies } from "../../../enums";
import { Category, Currency } from "../../../types";
import { HeaderContainer } from "./container";
import { HeaderNavLinks } from "./link";
import { IconButton } from "../buttons";
import { HeaderCurrencies } from "./cart/Currencies";

import { CartIcon, ChevronDownIcon } from "../icons";
import styles from "./styles.module.css";

type Props = {
  categories: Category[];
  selectedCategory: CategoryNames;
  currencies: Currency[];
  selectedCurrency: Currency;
};

export const Header: FC<Props> = ({
  categories,
  currencies,
  selectedCategory,
  selectedCurrency,
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
          <IconButton>
            <CartIcon />
          </IconButton>
        </div>
      </HeaderContainer>
    </header>
  );
};
