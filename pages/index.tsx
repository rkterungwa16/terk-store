import { useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Home.module.css";

import { fetchProducts } from "../src/store/slice/product";
import { Currencies } from "../enums";
import { FetchProductResponse } from "../types";

type Props = {
  products: FetchProductResponse[];
};

const Home: NextPage<Props> = ({ products }) => {
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
    const res = await fetch(
      `${protocol}://${host}/api/products/${category}?currency=${currency}`
    );
    const resJson = await res.json();
    return {
      props: {
        products: resJson,
      },
    };
  } catch (error) {
    throw new Error("Oops! Something went wrong...");
  }
};

export default Home;
