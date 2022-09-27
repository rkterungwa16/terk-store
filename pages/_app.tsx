import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "../src/store";

import "../styles/globals.css";

function TerkStore({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default TerkStore;
