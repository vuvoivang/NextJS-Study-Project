import Layout from "../components/Layout"
import '../styles/globals.css' // want to be global, don't use module css
import "../styles/scss/style.scss"
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "../theme/index"
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  // Component: đại diện cho 1 page match url
  // we can wrap a layout around
  // 1 page có thể có nhiều props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Layout>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
