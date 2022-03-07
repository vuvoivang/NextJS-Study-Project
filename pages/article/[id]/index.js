import { server } from '../../../config'
import { useRouter } from "next/router"
import Link from 'next/link'
import Meta from '../../../components/Meta'
const Article = ({ article }) => { // article from getStaticProps
    const router = useRouter() // can also access from useRouter().query.id
    const { id } = router.query
    return (
        <div>
            <Meta title={article.title} description={article.excerpt} />
            <h1>article {article.id}</h1>
            <Link href='/'> Go back</Link>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()
    const ids = articles.map(article => article.id) //arr of articles id
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false // if go sth doesn't exist, return 404 page
    }
}
export const getStaticProps = async ({ params }) => { // get params from props of this component
    const res = await fetch(`${server}/api/articles/${params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}
// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }


// or only 1 getServerSidesProps

export default Article