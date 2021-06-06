import Head from 'next/head'
import { GetStaticProps } from 'next'

import IntroBanner from '../components/IntroBanner'
import TechTalk from '../components/TechTalk'
import PastProjects from '../components/PastProjects'
import BeyondDev from '../components/BeyondDev'

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
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
