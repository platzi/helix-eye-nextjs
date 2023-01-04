import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
