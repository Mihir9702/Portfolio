import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="viewport-fit=cover" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
