import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const originalRenderPage = ctx.renderPage

    //     // Run the React rendering logic synchronously
    //     ctx.renderPage = () =>
    //         originalRenderPage({
    //             // Useful for wrapping the whole react tree
    //             enhanceApp: (App) => App,
    //             // Useful for wrapping in a per-page basis
    //             enhanceComponent: (Component) => Component,
    //         })

    //     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    //     const initialProps = await Document.getInitialProps(ctx)

    //     return initialProps
    // }
    // As index.html file
    render() {
        return (
            <Html lang='en'>
                <Head >
                    {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link> */}
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                    <link rel='shortcut icon' href='/images/logo.png' type='image/x-icon' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument