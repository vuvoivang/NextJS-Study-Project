import React from 'react'

const login = () => {
    return (
        <section className="login-form" id="section-login-form">
            <div className="login-form__form-content">
                <form action="" method="POST" className="form" id="form-login">
                    <div className="login-form__slogan">
                        LOGIN FORM
                    </div>
                    <div className="login-form__form-field">


                        <div className="login-form__form-group form-group">
                            <label for="email" className="login-form__form-label form-label"
                            ><i className="fa fa-envelope icon"></i> Email *</label
                            >
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="login-form__form-control form-control"
                            />
                            <span className="login-form__form-message form-message"></span>
                        </div>
                        <div className="login-form__form-group form-group">
                            <label for="password" className="login-form__form-label form-label"
                            ><i className="fa fa-lock icon"></i> Password *</label
                            >
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="login-form__form-control form-control"
                            />
                            <span className="login-form__form-message form-message"></span>
                        </div>
                        <button className="btn login-form__form-submit form-submit">
                            <span>Login</span>
                        </button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default login