import "../src/styles/globalStyles.scss";
import { GoogleAnalytics } from '@next/third-parties/google'

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en-US">
      <head>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Local font preloads */}
        <link rel="preload" href="/fonts/Rubik-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/Rubik-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-1FCZ37HSY5" />
    </html>
  )
}

export default RootLayout;
