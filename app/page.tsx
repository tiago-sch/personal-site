import { type Metadata } from 'next'
import type { Viewport } from 'next'

import Header from '../src/components/Header'
import ClientInit from '../src/components/ClientInit'
import IntroBanner from '../src/components/IntroBanner'
import About from '../src/components/About'
import TechTalk from '../src/components/TechTalk'
import PastProjects from '../src/components/PastProjects'
import BeyondDev from '../src/components/BeyondDev'
import Contact from '../src/components/Contact'

const siteUrl = 'https://www.tiagoschmidt.com'
const ogImage = `${siteUrl}/images/profile-photo.png`

const LDJson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "email": "tiagohammett@gmail.com",
  "image": ogImage,
  "jobTitle": "Frontend Engineer",
  "name": "Tiago Schmidt",
  "birthPlace": "Porto Alegre, RS - Brazil",
  "birthDate": "1990-09-15",
  "gender": "male",
  "nationality": "Brazilian",
  "url": siteUrl,
  "sameAs": [
    "https://www.linkedin.com/in/t-schmidt/",
    "https://github.com/tiago-sch/",
    "https://www.instagram.com/tiago.sch/",
    "https://www.youtube.com/channel/UC3rwmHd3_QSePebtxolkTng"
  ]
}

export const metadata: Metadata = {
  title: 'Tiago Schmidt | Frontend Engineer — React, TypeScript & AI',
  description: 'Portfolio of Tiago Schmidt, a frontend engineer specialising in React, TypeScript, Next.js, and AI integration. Available for freelance and full-time opportunities.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Tiago Schmidt | Frontend Engineer — React, TypeScript & AI',
    description: 'Portfolio of Tiago Schmidt, a frontend engineer specialising in React, TypeScript, Next.js, and AI integration. Available for freelance and full-time opportunities.',
    images: [
      {
        url: ogImage,
        width: 800,
        height: 800,
        alt: 'Tiago Schmidt — Frontend Engineer',
      },
    ],
    siteName: 'Tiago Schmidt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiago Schmidt | Frontend Engineer — React, TypeScript & AI',
    description: 'Portfolio of Tiago Schmidt, a frontend engineer specialising in React, TypeScript, Next.js, and AI integration.',
    images: [ogImage],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#6d23b6',
}

const Home = () => {
  return (
    <>
      <ClientInit />
      <Header />
      <main>
        <IntroBanner />
        <About />
        <TechTalk />
        <PastProjects />
        <BeyondDev />
        <Contact />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LDJson) }}
      />
    </>
  )
}

export default Home
