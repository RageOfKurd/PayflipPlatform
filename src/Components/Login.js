import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import BgImage from './Assets/backgroundImage.svg'
import { Link } from "react-router-dom";

export const Login = () => {
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    function formValidation() {
        return email.length > 0 && password.length > 0;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password)
        const localhost = 'url'
        /*const getData = () => {
            /* axios.get("localhost", 
             /* backend */
            //{

                /* }).then((result) => {   console.log('retrieved successfully!')})
             
                .catch((e) => error) 
            }
        }*/
    }

    useEffect(() =>
    document.title = "Payflip - Login")

    return (
        <div>
            <main className="main-content  mt-0">
                <section>
                    <div className="page-header min-vh-75">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                                    <div className="card card-plain mt-8">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fproxy%2F0*kYj1aQljmDquuw7Z&f=1&nofb=1" />
                                        <div className="card-header pb-0 text-left bg-transparent">
                                            <h3 className="font-weight-bolder text-info">Welcome back</h3>
                                            <p className="mb-0">Enter your email and password to sign in</p>
                                        </div>
                                        <div className="card-body">
                                            <form role="form" onSubmit={handleSubmit} >
                                                <label>Email</label>
                                                <div className="mb-3">
                                                    <input type="email" autoFocus value={email} onChange={(answer) => { getEmail(answer.target.value) }} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" required />
                                                </div>
                                                <label>Password</label>
                                                <div className="mb-3">
                                                    <input type="email" value={password} onChange={(answer) => { getPassword(answer.target.value) }} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" required />
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="rememberMe" ischecked="" />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                </div>
                                                <div className="text-center">
                                                <button type="button" class="btn bg-redpayflip text-white w-100 mt-4 mb-0">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p className="mb-4 text-sm mx-auto">
                                                Don't have an account?
                                                <Link to="/signup" className="text-bluepayflip font-weight-bold"> Sign up</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                                        <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ opacity: 0.6, backgroundImage: `url(${BgImage})` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Login;