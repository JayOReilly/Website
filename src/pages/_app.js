import "@/styles/globals.css";
import Script from "next/script";
import { ReactDOM } from "react";

export default function App({ Component, pageProps }) {
  <Script src="https://tarptaeya.github.io/repo-card/repo-card.js" />;

  

  return <Component {...pageProps} />;
}
