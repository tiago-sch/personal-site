import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

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
