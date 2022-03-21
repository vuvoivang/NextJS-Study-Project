import Layout from "../components/Layout"
import '../styles/globals.css' // want to be global, don't use module css
import "../styles/scss/style.scss"
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "../theme/index"
import { useEffect, useReducer } from 'react'
import AppContext from "../context/index";
import { users } from "../data/user"
import { initialLoginState, loginReducer } from "../reducer/login";
import Script from 'next/script'
import NextNProgress from "nextjs-progressbar";


function MyApp({ Component, pageProps }) {
  // Component: đại diện cho 1 page match url
  // we can wrap a layout around
  // 1 page có thể có nhiều props
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // chỉ dùng ở v4, mục đích là để remove những css được render từ trước bởi nextjs
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

  }, []);
  // console.log("test", typeof Cookies, Cookies);


  return (
    <AppContext.Provider value={{ users, loginState, dispatch }}>
      <Layout>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          {/* Scripts excuted by next */}
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
          <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous" />
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous" />

          <NextNProgress />
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </AppContext.Provider>
  )
}


export default MyApp
