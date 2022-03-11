// Uppercase for component name
import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'
import { Footer } from './Footer'
import cookie from "js-cookie";
import { useEffect, useState, useContext } from 'react';
import AppContext from "../context/index"

// Dùng như HOC, có thể thêm header + footer.... cho những comp bọc trong Layout
const Layout = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);
    const context = useContext(AppContext);

    // console.log(context.loginState);
    useEffect(() => {
        let my_cookie = null;
        my_cookie = cookie.get();
        // console.log("my_cookie", my_cookie)
        if (my_cookie?.token?.length > 0) {
            console.log("a");
            setIsAuth(true);
        }
        else {
            console.log("b");
            setIsAuth(false);
        }
    }, [context.loginState.isAuthenticated]);
    return (
        <>
            <Meta />
            <Nav isAuth={isAuth} />
            <div>
                <main >
                    {/* <Header /> */}
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout