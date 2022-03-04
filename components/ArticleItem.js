import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'
const ArticleItem = ({ article }) => {
    // as={`/article/${article.id}`}: id from specific article 
    // ``: backticks
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
            {/* No need href cause it's on Link  */}
        </Link>
    )
}

export default ArticleItem