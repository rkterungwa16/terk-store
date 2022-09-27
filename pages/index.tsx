import { useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Home.module.css";

import { fetchProducts } from "../src/store/slice/product";
import { Currencies } from "../enums";
import { Currency, FetchProductResponse, Category } from "../types";

type Props = {
  products: FetchProductResponse[];
  categories: Category[];
  currencies: Currency[];
};

const Home: NextPage<Props> = ({ products, categories, currencies }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(products));
  }, [products.length]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="terk-store" content="Best Clothing store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
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
    const category = params?.category ?? "women";
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
      },
    };
  } catch (error) {
    throw new Error("Oops! Something went wrong...");
  }
};

export default Home;
