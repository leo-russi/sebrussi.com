import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/getStarted.css'
import '../styles/header.css'
import '../styles/footer.css'

import { useRouter } from 'next/router'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {

  const router = useRouter()

  return (
    <Layout>
      <Component {...pageProps} lang={router.locale}/>
    </Layout>
  )
}

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
