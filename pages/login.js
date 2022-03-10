import React, { useState, useContext } from "react";
import Alert from "@mui/material/ALert";
import Grid from "@mui/material/Grid";
import { server } from "../config";
import { useRouter } from "next/router";
import AppContext from "./context/index";

// import { useContext } from "react";
const Login = () => {
    const context = useContext(AppContext);

    // state để dispatch tới action Login
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({
    });
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    // sự kiện thay đổi giá trị của các trường đăng nhập
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const router = useRouter();
    console.log(router);
    const handleSubmit = (event) => {
        event.preventDefault();

        // if (formValues.email === "" || formValues.password === "") {
        //     setEmptyFieldNotice(true);
        //     return;
        // }

        // Handle validation
        //.....
        setIsSubmit(true);

        // handle login
        fetch(`${server}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setSuccess(true);
                    context.dispatch({
                        type: "LOGIN",
                        payload: data
                    })
                }
                else {
                    alert(data.message);
                }
                // setTimeout(() => {
                //     router.replace("/products");
                // }, 1000);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    const handleValidation = (e) => {

        setFormErrors(validate(formValues, e.target.name));
    }
    const validate = (values, name) => {
        const errors = {};
        if (name === "email") {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (regexEmail.test(values.email) === false) {
                errors.email = "Email is not in correct format";
            }
            if (!values.email) {
                errors.email = "Email is required";
            }

        }
        if (name === "password") {
            if (values.password.length < 6) {
                errors.password = "Password is required at least 6 characters";
            }
            if (!values.password) {
                errors.password = "Password is required";
            }
        }
        return errors;

    }
    return (
        <>
            {/* {!cookie.get()?.token ? <h3 className='text-primary'>Login to view all products</h3> : ""} */}
            <section className="login-form" id="section-login-form">
                <div className="login-form__form-content">
                    <form action="" method="POST" className="form" id="form-login" onSubmit={handleSubmit}>
                        <div className="login-form__slogan">
                            LOGIN FORM
                        </div>

                        <div className="login-form__form-field">
                            <div className="login-form__form-group form-group">
                                <label htmlFor="email" className="login-form__form-label form-label"
                                ><i className="fa fa-envelope icon"></i> Email *</label
                                >
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="login-form__form-control form-control"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                />

                                <span className="login-form__form-message form-message">{formErrors.email}</span>
                            </div>
                            <div className="login-form__form-group form-group">
                                <label htmlFor="password" className="login-form__form-label form-label"
                                ><i className="fa fa-lock icon"></i> Password *</label
                                >
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="login-form__form-control form-control"
                                    autoComplete="current-password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                />


                                <span className="login-form__form-message form-message">{formErrors.password}</span>
                            </div>
                            {isSubmit && isSuccess && <Alert variant="filled" severity="success">
                                Login Successfully!
                            </Alert>}
                            {isSubmit && !isSuccess && <Alert variant="filled" severity="failed">
                                Login Failed!
                            </Alert>}
                            <button type="submit" className="btn login-form__form-submit form-submit">
                                <span>Login</span>
                            </button>
                            <Grid container>
                                <Grid item xs>
                                    <a
                                        href="/"
                                        variant="body2"
                                        style={{ textDecoration: "none", color: "blue" }}
                                    >
                                        Quên mật khẩu ?
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a
                                        href={"/register"}
                                        variant="body2"
                                        style={{ textDecoration: "none", color: "#f44336" }}
                                    >
                                        {"Chưa có tài khoản? Đăng ký ngay!!!"}
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Login