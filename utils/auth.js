import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
const IS_SERVER = typeof window === "undefined";
export const login = ({ token }) => {
    cookie.set('token', token, { expires: 1 })
    setTimeout(() => { Router.push('/products') }, 1500)
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
    cookie.remove('token')
    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now())
    if (!IS_SERVER) localStorage.clear();
    Router.push('/');
}

