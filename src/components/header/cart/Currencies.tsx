import { FC, useState } from "react";
import Link from "next/link";
import classnames from "classnames";

import { CategoryNames, Currencies } from "../../../../enums";
import { Currency } from "../../../../types";
import { IconButton } from "../../buttons";
import { ChevronDownIcon, ChevronUpIcon } from "../../icons";

import styles from "./styles.module.css";
import { DropdownMenu } from "../../dropdown/DropdownMenu";
import { DropdownItem } from "../../dropdown/DropdownItem";

type HeaderCurrenciesProps = {
  currency?: Currency;
  currencies?: Currency[];
  category?: CategoryNames;
};
export const HeaderCurrencies: FC<HeaderCurrenciesProps> = ({
  currency,
  currencies = [],
  category,
}) => {
  const [dropdownIsOpen, setDropdownOpen] = useState(false);
  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownIsOpen);
  };
  return (
    <div className={styles.HeaderCurrencies__container}>
      <span className={styles.Header__currency}>{currency?.symbol}</span>
      <IconButton onClick={handleDropdownClick}>
        {dropdownIsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </IconButton>
      {dropdownIsOpen && (
        <DropdownMenu>
          {currencies.map((_currency) => (
            <DropdownItem
              key={_currency.id}
              isActive={_currency.id === currency?.id}
            >
              <Link href={`/${category}?currency=${_currency.code}`}>
                <a className={styles["CurrencyDropdown__item--link"]}>
                  <span className={styles.Header__currency}>
                    {_currency?.symbol}
                  </span>
                  <span
                    className={classnames(
                      styles.Header__currency,
                      styles.HeaderCurrency__code
                    )}
                  >
                    {_currency?.code}
                  </span>
                </a>
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </div>
  );
};
