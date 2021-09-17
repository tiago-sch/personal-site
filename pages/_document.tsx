import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="preload" href="/fonts/Rubik-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" href="/fonts/Rubik-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous"/>
          <link rel="preload" href="/fonts/Rubik-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" href="/fonts/Rubik-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
