import type { AppProps } from 'next/app'
import Head from 'next/head'

import "../src/styles/globalStyles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Security-Policy" content="default-src * 'self' data: 'unsafe-inline' 'unsafe-eval' *" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="msapplication-TileColor" content="#6d23b6" />
        <meta name="theme-color" content="#6d23b6" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
