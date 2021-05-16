import Head from 'next/head'
import IntroBanner from '../components/IntroBanner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tiago Schmidt | Web Developer</title>
        <meta
          name="description"
          content="Web developer, technology intusiast, musician and a huge geek/nerd"
        />
      </Head>
      <IntroBanner />
    </>
  )
}
