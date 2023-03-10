import '@/styles/globals.css'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  <Script src="https://tarptaeya.github.io/repo-card/repo-card.js" />

  return <Component {...pageProps} />
}
