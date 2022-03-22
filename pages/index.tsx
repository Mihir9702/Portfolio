import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../src/Home/About'
import Footer from '../src/Home/Footer'
import Header from '../src/Home/Header'
import Roadmap from '../src/Home/Roadmap'
import Projects from '../src/Home/Projects'
import Contact from '../src/Home/Contact'

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

      <Projects />

      <Roadmap />

      <Contact />

      <Footer />
    </>
  )
}

export default Home
