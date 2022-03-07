import React from 'react'

const login = () => {
    return (
        <section class="login-form" id="section-login-form">
            <div class="login-form__form-content">
                <form action="" method="POST" class="form" id="form-login">
                    <div class="login-form__slogan">
                        LOGIN FORM
                    </div>
                    <div class="login-form__form-field">


                        <div class="login-form__form-group form-group">
                            <label for="email" class="login-form__form-label form-label"
                            ><i class="fa fa-envelope icon"></i> Email *</label
                            >
                            <input
                                id="email"
                                name="email"
                                type="email"
                                class="login-form__form-control form-control"
                            />
                            <span class="login-form__form-message form-message"></span>
                        </div>
                        <div class="login-form__form-group form-group">
                            <label for="password" class="login-form__form-label form-label"
                            ><i class="fa fa-lock icon"></i> Password *</label
                            >
                            <input
                                id="password"
                                name="password"
                                type="password"
                                class="login-form__form-control form-control"
                            />
                            <span class="login-form__form-message form-message"></span>
                        </div>
                        <button class="btn login-form__form-submit form-submit">
                            <span>Login</span>
                        </button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default login