import Head from 'next/head'
import { GetStaticProps } from 'next'

import IntroBanner from '../components/IntroBanner'
import TechTalk from '../components/TechTalk'
import PastProjects from '../components/PastProjects'
import BeyondDev from '../components/BeyondDev'

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
    "https://www.facebook.com/schmidt.tiago/",
    "https://www.linkedin.com/in/t-schmidt/",
    "https://github.com/schmidtas/",
    "https://www.instagram.com/tiago.sch/",
    "https://www.youtube.com/channel/UC3rwmHd3_QSePebtxolkTng"
  ]
}

export default function Home() {
  if (process.browser) {
    console.info('Interested in the code? Let me know and I can send you the git repo or maybe schedule a quick call!! 😄')
    console.info('tiagohammett@gmail.com / https://github.com/schmidtas')
  }

  return (
    <>
      <Head>
        <title>Tiago Schmidt | Web Developer</title>
        <meta
          name="description"
          content="Web developer, technology enthusiast, musician and a huge geek/nerd. Nice to meet you!"
        />
      </Head>

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
