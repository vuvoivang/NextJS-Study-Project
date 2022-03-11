import React from 'react';
import ProductList from '../components/ProductList';
import { server } from "../config"
import Meta from '../components/Meta';
// import Router from 'next/router'
// import { withSession } from 'next-session';

// import AppContext from "../context/index";
// import { useContext } from "react";


const Products = ({ products }) => {
    // I want to update Context
    // const context = useContext(AppContext);
    // context = { ...context, products: products };
    // if (!cookie.get()?.token) {
    //     Router.push('/login');
    // }
    // if (!cookie.get()?.token) {
    //     Router.push('/login');
    // }
    // useEffect(() => {
    //     const IS_SERVER = typeof window === "undefined";
    //     if (!IS_SERVER && !cookie.get()?.token) {
    //         Router.push('/login');
    //     }
    // }, []);

    return (
        <>
            <Meta title="Products" keywords="products, list products" description="Show list of watches" />
            <ProductList products={products} />
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    // console.log(ctx.req.headers.cookie);
    let cookies = ctx.req.headers.cookie;
    let isAuthenticated = false;
    let token = "";
    if (cookies) {
        cookies.split(";").forEach((cookie) => {
            let i = cookie.indexOf("=");
            let name = cookie.substr(0, i).trim();
            let value = cookie.substr(i + 1).trim();
            if (name === "token" && value) {
                isAuthenticated = true;
                token = value;
            }

        })
    }
    if (!isAuthenticated) {
        return {
            redirect: {
                destination: "/login?url=products",
                permanent: false,

            },

        }

    }
    const res = await fetch(`${server}/api/products`)
    const products = await res.json()
    return { // return props to the page
        props: {
            products
        }
    }
}

export default Products