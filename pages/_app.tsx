import "../styles/globals.css";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import i18n from "../i18n/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
