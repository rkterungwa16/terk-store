import { useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../src/store/slice/product";
import { CategoryNames, Currencies } from "../../enums";
import { Currency, FetchProductResponse, Category } from "../../types";
import { LayoutContainer } from "../../src/layout";
import { Header } from "../../src/components/header";
import { Home } from "../../src/views";
import { cartSelector, productSelector } from "../../src/store/selectors";

type Props = {
  products: FetchProductResponse[];
  categories: Category[];
  currencies: Currency[];
  category: CategoryNames;
  currency: Currency;
};

const HomePage: NextPage<Props> = ({
  products,
  categories,
  currencies,
  currency,
  category,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const product = useSelector(productSelector);

  useEffect(() => {
    dispatch(fetchProducts(products));
  }, [products.length]);

  return (
    <LayoutContainer>
      <Header
        categories={categories}
        currencies={currencies}
        selectedCategory={category}
        selectedCurrency={currency}
        totalNumberOfItems={cart.totalNumberOfCartItems}
      />
      <Home
        categories={categories}
        currencies={currencies}
        selectedCategory={category}
        selectedCurrency={currency}
        products={products}

      />
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
    const category = params?.category ?? CategoryNames.WOMEN;
    const currency = query?.currency ?? Currencies.USD;
    const productsRes = await fetch(
      `${protocol}://${host}/api/products/${category}?currency=${currency}`
    );
    const categoriesRes = await fetch(`${protocol}://${host}/api/categories`);
    const currenciesRes = await fetch(`${protocol}://${host}/api/currencies`);
    const productsResJson = await productsRes.json();
    const categoresResJson = await categoriesRes.json();
    const currenciesResJson = await currenciesRes.json();
    return {
      props: {
        products: productsResJson.data,
        categories: categoresResJson.data,
        currencies: currenciesResJson.data,
        category,
        currency: currenciesResJson.data.find(
          (_currency: Currency) => _currency.code === currency
        ),
      },
    };
  } catch (error) {
    throw new Error("Oops! Something went wrong...");
  }
};

export default HomePage;
