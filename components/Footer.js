import React from 'react'

export const Footer = () => {
    return (

        <footer className="text-center text-white" style={{ background: "rgb(56, 56, 75)" }}>
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/vhvu99" role="button"><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/vhvu99" role="button"><i className="fab fa-twitter" /></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/vhvu99" role="button"><i className="fab fa-google" /></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/vhvu99" role="button"><i className="fab fa-instagram" /></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/vhvu99" role="button"><i className="fab fa-linkedin-in" /></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/vhvu99" role="button"><i className="fab fa-github" /></a>
                </section>
                <section>
                    <form>
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our products</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example21" className="form-control" placeholder='Email address' />

                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="mb-4">
                    <p>
                        Demo project NextJS with many basic functions. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </section>

            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright
                {/* <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
            </div>
        </footer>


    )
}
