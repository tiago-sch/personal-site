import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react'

const fonts = ['Rubik-Bold', 'Rubik-Regular'];

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en-US">
        <Head>
          {fonts.map(fontName => (
            <Fragment key={`font-preload-${fontName}`}>
              <link rel="preload" href={`/fonts/${fontName}.woff2`} as="font" type="font/woff2" crossOrigin="anonymous"/>
              <link rel="preload" href={`/fonts/${fontName}.woff`} as="font" type="font/woff" crossOrigin="anonymous"/>
            </Fragment>
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
