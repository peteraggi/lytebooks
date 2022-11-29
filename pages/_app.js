import Head from 'next/head'
import "../styles/globals.css";
import "../Design/header.css";import "../Design/home.css"
import "../Design/mainfooter.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
