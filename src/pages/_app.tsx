import "@/styles/base.scss";
import "@/styles/typography.scss";
import "@/translate/i18n";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ComponentType } from "react";
import { store } from "@/store";
import { AppProvider } from "@/context/AppContext";

import Home from "./home";
import Account from "./account";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

function MyApp({ Component, pageProps, router }: AppProps) {
  const routesMap: Record<string, ComponentType> = {
    "/": Home,
    "/account": Account,
  };

  const PageComponent = routesMap[router.pathname] || Component;

  return (
    <>
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <AppProvider>
          <PageComponent {...pageProps} className={roboto.variable} />
        </AppProvider>
      </Provider>
    </>
  );
}

export default MyApp;
