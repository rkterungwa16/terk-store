import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ModalProvider } from "../src/components/modal/ModalProvider";

import { store } from "../src/store";

import "../styles/globals.css";

function TerkStore({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </Provider>
  );
}

export default TerkStore;
