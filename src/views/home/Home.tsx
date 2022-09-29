import { FC } from "react";
import { CategoryNames } from "../../../enums";
import { Category, Currency, FetchProductResponse } from "../../../types";
import { ProductCard } from "../../components/product";

import styles from "./styles.module.css";

type Props = {
  categories: Category[];
  selectedCategory: CategoryNames;
  currencies: Currency[];
  selectedCurrency: Currency;
  products: FetchProductResponse[];
};
export const Home: FC<Props> = ({
  categories,
  currencies,
  selectedCategory,
  selectedCurrency,
  products,
}) => {

  return (
    <div className={styles.Home}>
      <h2 className={styles["Home__category--name"]}>{selectedCategory}</h2>
      <div className={styles.ProductCards__container}>
        {products.map((_product) => (
          <ProductCard
            key={_product.variant?.productId}
            imageUrl={_product.variant?.images[0]}
            name={_product.variant?.product?.name}
            currencySymbol={_product.variant?.currency?.symbol}
            brand={_product.variant?.brand?.name}
            price={_product.variant?.price?.amount}
            variantId={_product.variant?.id}
            availableStock={_product.variant?.availableStock}
          />
        ))}
      </div>
    </div>
  );
};
