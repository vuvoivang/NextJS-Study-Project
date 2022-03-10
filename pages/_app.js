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



  return (
    <AppContext.Provider value={{ users, loginState, dispatch }}>
      <Layout>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </AppContext.Provider>
  )
}


export default MyApp
