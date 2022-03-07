import React from 'react';
import ProductList from '../components/ProductList';
import { server } from "../config"

const products = ({ products }) => {
    return (
        <ProductList products={products} />
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
export default products