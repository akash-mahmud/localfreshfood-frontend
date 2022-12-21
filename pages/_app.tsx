import '../styles/globals.css'
import '../styles/custom.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

import Head from 'next/head'
import Script from 'next/script'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../../assets/images/logo@2x.png" />
      </Head>
      <NextNProgress color={'#34AD54'} />
      <Script id="tawk" strategy="lazyOnload">
        {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/638f7195b0d6371309d2edcb/1gjk57cm9';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();  
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
