import "../src/styles/globalStyles.scss";

const RootLayout = ({
  children
}) => {
  return (
    <html lang="en-US">
      <head>
        <link rel="preload" href="/fonts/Rubik-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Rubik-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Rubik-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Rubik-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>
        { children }
      </body>
    </html>
  )
}

export default RootLayout;
