// Uppercase for component name
import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'
// Dùng như HOC, có thể thêm header + footer.... cho những comp bọc trong Layout
const Layout = ({ children }) => {

    return (
        <>
            <Meta />
            <Nav />
            <div >
                <main >
                    {/* <Header /> */}
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout