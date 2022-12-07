import { FC, useEffect } from "react";
import { CategoryNames } from "../../../enums";
import { Category, Currency, FetchProductResponse, FetchVariantResponse } from "../../../types";
import { ProductCard } from "../../components/product";
import { useSelector } from "react-redux";
import { productSelector } from "../../store/selectors";
import { selectVariant } from "../../store/slice";
import { useDispatch } from "react-redux";

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
 // const dispatch = useDispatch();
  const product = useSelector(productSelector);
  //console.log('product', product);


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
            productVariant={_product.variant as any}
          />

        ))}
      </div>
    </div>
  );
};
