import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

const fonts = ['Rubik-Bold', 'Rubik-Regular'];

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Security-Policy" content="default-src * 'self' data: 'unsafe-inline' 'unsafe-eval' *" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=5"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {fonts.map(fontName => (
            <Fragment key={`font-preload-${fontName}`}>
              <link rel="preload" href={`/fonts/${fontName}.woff2`} as="font" type="font/woff2" crossOrigin="anonymous"/>
              <link rel="preload" href={`/fonts/${fontName}.woff`} as="font" type="font/woff" crossOrigin="anonymous"/>
            </Fragment>
          ))}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="msapplication-TileColor" content="#6d23b6" />
          <meta name="theme-color" content="#6d23b6" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
