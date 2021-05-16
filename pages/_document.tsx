import Document, { Html, Head, Main, NextScript } from 'next/document'

const fonts = ['Rubik-Bold', 'Rubik-Regular'];

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en-US">
        <Head>
          {fonts.map(fontName => (
            <>
              <link rel="preload" href={`/fonts/${fontName}.woff2`} as="font" type="font/woff2" crossOrigin="anonymous"/>
              <link rel="preload" href={`/fonts/${fontName}.woff`} as="font" type="font/woff" crossOrigin="anonymous"/>
            </>
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
