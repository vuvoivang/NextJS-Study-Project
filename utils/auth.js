import Router from 'next/router'
import nextCookie from 'next-cookies'
import Cookies from 'js-cookie'

const IS_SERVER = typeof window === "undefined";
export const login = ({ token, user }) => {
    // console.log({ token, Cookies, nextCookie, test: window?.cookieStore })
    if (!IS_SERVER) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
        Cookies?.set('token', token, { expires: 1 })
    }
    setTimeout(() => { Router.push('/products') }, 500)
}

export const auth = ctx => {
    const { token } = nextCookie(ctx)

    // If there's no token, it means the user is not logged in.
    if (!token) {
        if (typeof window === 'undefined') {
            ctx.res.writeHead(302, { Location: '/login' })
            ctx.res.end()
        } else {
            Router.push('/login')
        }
    }

    return token
}

export const logout = () => {
    if (!IS_SERVER) {
        localStorage.clear();
        Cookies.remove('token');
        // to support logging out from all windows
        window.localStorage.setItem('logout', Date.now())
    }
    Router.push('/');
}

