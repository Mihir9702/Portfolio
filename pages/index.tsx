import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../src/About'
import Contact from '../src/Contact'
import Footer from '../src/Footer'
import Header from '../src/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mihir Patel</title>
        <meta
          name="description"
          content="My Portfolio designed to represent my professional work and tell you a little bit more about me."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
