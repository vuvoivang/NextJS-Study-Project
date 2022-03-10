import React from 'react';
import ProductList from '../components/ProductList';
import { server } from "../config"
import cookie from 'js-cookie'
import Meta from '../components/Meta';
import { useEffect } from 'react';
import Router from 'next/router';
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
    useEffect(() => {
        const IS_SERVER = typeof window === "undefined";
        if (!IS_SERVER && !cookie.get()?.token) {
            Router.push('/login');
        }
    }, []);
    return (
        <>
            <Meta title="Products" keywords="products, list products" description="Show list of watches" />
            <ProductList products={products} />
        </>
    )
}
export const getStaticProps = async () => {

    const res = await fetch(`${server}/api/products`)
    const products = await res.json()
    return { // return props to the page
        props: {
            products
        }
    }
}

export default Products