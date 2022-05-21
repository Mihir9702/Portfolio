import type { NextPage } from 'next'
import Head from 'next/head'
import Projects from '../src/components/Projects'
import Header from '../src/components/Header'
import Skills from '../src/components/Skills'
import About from '../src/components/About'
import Footer from '../src/components/Footer'
import Contact from '../src/components/Contact'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mihir Patel</title>
        <meta
          name="description"
          content="My name is Mihir Patel and I am currently a Frontend Developer at Trellus"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <About />

      <Projects />

      <Skills />

      <Contact />

      <Footer />
    </>
  )
}

export default Home
