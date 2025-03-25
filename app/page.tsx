import { type Metadata } from 'next'
import type { Viewport } from 'next'

import IntroBanner from '../src/components/IntroBanner'
import TechTalk from '../src/components/TechTalk'
import PastProjects from '../src/components/PastProjects'
import BeyondDev from '../src/components/BeyondDev'

const LDJson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "email": "tiagohammett@gmail.com",
  "image": "https://www.tiagoschmidt.com/images/profile-photo.png",
  "jobTitle": "Software Developer",
  "name": "Tiago Schmidt",
  "birthPlace": "Porto Alegre, RS - Brazil",
  "birthDate": "1990-09-15",
  "gender": "male",
  "nationality": "Brazilian",
  "url": "https://www.tiagoschmidt.com",
  "sameAs" : [
    "https://www.linkedin.com/in/t-schmidt/",
    "https://github.com/iago-sch/",
    "https://www.instagram.com/tiago.sch/",
    "https://www.youtube.com/channel/UC3rwmHd3_QSePebtxolkTng"
  ]
}

export const metadata: Metadata = {
  title: "Tiago Schmidt | Web Developer",
  description: "Web developer, technology enthusiast, musician and a huge geek/nerd. Nice to meet you!",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6d23b6",
}

const Home = () => {
  if (typeof window !== 'undefined') {
    console.info('Interested in the code? Let me know and I can send you the git repo or maybe schedule a quick call!! 😄')
    console.info('tiagohammett@gmail.com / https://github.com/tiago-sch')
  }

  return (
    <>
      <IntroBanner />
      <TechTalk />
      <PastProjects />
      <BeyondDev />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LDJson) }}
      />
    </>
  )
}

export default Home;
