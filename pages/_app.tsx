import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Worker&apos;s Rights in the United States</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
