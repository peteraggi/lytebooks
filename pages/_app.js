import Head from 'next/head'
import '../styles/globals.css'
import "../Design/home.css"
import "../Design/mainfooter.css"

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>
        Lyte books - manage your business easily
      </title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}
