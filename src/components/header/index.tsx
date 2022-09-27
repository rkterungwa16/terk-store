import { FC } from "react";
import { CategoryNames, Currencies } from "../../../enums";
import { Category, Currency } from "../../../types";
import { HeaderContainer } from "./container";
import { HeaderNavLinks } from "./link";

type Props = {
  categories: Category[];
  selectedCategory: CategoryNames;
  currencies: Currency[];
  selectedCurrency: Currencies;
};

export const Header: FC<Props> = ({
  categories,
  currencies,
  selectedCategory,
  selectedCurrency,
}) => {
  return (
    <header>
      <HeaderContainer>
        <HeaderNavLinks
          categories={categories}
          selectedCategory={selectedCategory}
        />
      </HeaderContainer>
    </header>
  );
};
