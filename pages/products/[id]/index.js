import { server } from '../../../config'
import { useRouter } from "next/router"
import Link from 'next/link'
import Meta from '../../../components/Meta'
import CardMedia from '@mui/material/CardMedia';


export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/products/${context.params.id}`)

    // console.log(res)
    const product = await res.json()
    // console.log(product)
    return {
        props: {
            product
        }
    }
}
const downloadFile = (id) => {

}

const Product = ({ product }) => { // product from getStaticProps
    // const router = useRouter() // can also access from useRouter().query.id
    // const { id } = router.query
    console.log(product);
    if (product.status === "NOT_FOUND") {
        return (
            <div className='d-flex p-5 flex-column justify-content-center align-items-center'>
                <h1>404 NOT FOUND</h1>
                <p>{product.message}</p>
            </div>
        )
    }
    return (
        <> {product && <div style={{
            borderRadius: "20px", overflow: "hidden",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
            height: "60vh",

        }}>
            {/* {JSON.stringify(product)} */}
            <Meta title={product.name} description={product.detail} />
            <div className='wrapper d-flex justify-content-around align-items-center'>
                <div className='image'>
                    <CardMedia
                        component="img"
                        alt="smart watch"
                        image={product.image}
                        className="card-media"
                        height="300"
                        style={{ objectFit: "contain" }}
                    /></div>
                <div className='info d-flex ps-5 flex-column justify-content-around align-items-start' style={{ maxWidth: 600 }}>
                    <h1 style={{ color: "blue" }}>Name: {product.name}</h1>
                    <p>Description: {product.detail}</p>
                    <div className='btn-group'>
                        <Link href='/products'>
                            <button className='btn btn-primary me-3'>Go back</button>
                        </Link>
                        <button onClick={downloadFile(product.id)} className='btn btn-danger'>Down description file</button>
                    </div>

                </div>

            </div>
        </div>}
        </>
    )
}

// export const getStaticPaths = async () => {
//     const res = await fetch(`${server}/api/products`)
//     const products = await res.json()
//     // console.log(products);
//     const ids = products.map(product => product.id) //arr of product id
//     const paths = ids.map(id => ({ params: { id: id.toString() } }))
//     return {
//         paths,
//         fallback: false // if go sth doesn't exist, return 404 page
//     }
// }
// export const getStaticProps = async ({ params }) => { // get params from props of this component
//     const res = await fetch(`${server}/api/products/${params.id}`)

//     const product = await res.json()
//     console.log(product)

//     return {
//         props: {
//             product
//         }
//     }
// }

// or only 1 getServerSidesProps

export default Product