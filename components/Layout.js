// Uppercase for component name
import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
// Dùng như HOC, có thể thêm header + footer.... cho những comp bọc trong Layout
const Layout = ({ children }) => {
   
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout