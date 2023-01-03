import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>SebRussi Fitness - Let's workout!</title>
        <meta name='description' content='Fitness services, plans and apparel'/>
        <meta name='keywords' content='fitness, gym, body building, calistenics, gym apparel, apparel, sport, training'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
