import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 3;
    return (
        <div className={headerStyles.title}>
            <h1><span>WebDev</span> News</h1>
            {/* style jsx  */}
            <style jsx>
                {`
                .title{
                    color:${x > 3 ? 'red' : 'blue'};
                }`

                }
            </style>
        </div >
    )
}

export default Header