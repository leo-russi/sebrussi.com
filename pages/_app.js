import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/getStarted.css'
import '../styles/header.css'
import '../styles/footer.css'

import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Head from 'next/head'
import AppBanner from './AppBanner'

export default function App({ Component, pageProps }) {

  const router = useRouter()

  return (
    <>
    <Head>
        <title>SebRussi Fitness - Let&apos;s workout!</title>
        <meta name="description" content="Fitness services, plans and apparel"/>
        <meta name="keywords" content="fitness, gym, body building, calistenics, gym apparel, apparel, sport, training"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <Component {...pageProps} lang={router.locale}/>
      <AppBanner lang={router.locale}/>
    </Layout>
    </>
  )
}

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
