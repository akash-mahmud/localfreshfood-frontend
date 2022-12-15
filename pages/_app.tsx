import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../../assets/images/logo@2x.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
