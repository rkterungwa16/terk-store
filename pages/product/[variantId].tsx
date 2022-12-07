import { useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";
import { useSelector, useDispatch } from "react-redux";

import { selectVariant } from "../../src/store/slice/product";
import { CategoryNames, Currencies } from "../../enums";
import { Currency, Category, FetchVariantResponse, Color } from "../../types";
import { LayoutContainer } from "../../src/layout";
import { Header } from "../../src/components/header";
import { Product } from "../../src/views";
import { cartSelector, productSelector } from "../../src/store/selectors";

type Props = {
  productVariant: FetchVariantResponse;
  categories: Category[];
  currencies: Currency[];
  category: CategoryNames;
  currency: Currency;
};
//kk
const ProductPage: NextPage<Props> = ({
  productVariant,
  categories,
  currencies,
  currency,
  category,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const product = useSelector(productSelector);

  useEffect(() => {
    dispatch(selectVariant(productVariant));
  }, [productVariant]);

  return (
    <LayoutContainer>
      <Header
        categories={categories}
        currencies={currencies}
        selectedCategory={category}
        selectedCurrency={currency}
        totalNumberOfItems={cart.totalNumberOfCartItems}
      />
      <Product productVariant={product.selectedVariant} />
    </LayoutContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
  query,
}) => {
  try {
    const protocol = process.env.PROTOCOL || "https";
    const host = req?.headers.host;
    const variantId = params?.variantId ?? "";
    const currency = query?.currency ?? Currencies.USD;
    const variantRes = await fetch(
      `${protocol}://${host}/api/variants/${variantId}?currency=${currency}`
    );
    const categoriesRes = await fetch(`${protocol}://${host}/api/categories`);
    const currenciesRes = await fetch(`${protocol}://${host}/api/currencies`);
    const variantResJson = await variantRes.json();
    const categoriesResJson = await categoriesRes.json();
    const currenciesResJson = await currenciesRes.json();
    return {
      props: {
        productVariant: variantResJson.data,
        categories: categoriesResJson.data,
        currencies: currenciesResJson.data,
        currency: currenciesResJson.data.find(
          (_currency: Currency) => _currency.code === currency
        ),
      },
    };
  } catch (error) {
    throw new Error("Oops! Something went wrong...");
  }
};

export default ProductPage;
