import Layout from "../components/Layout"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // we can wrap a layout around
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
