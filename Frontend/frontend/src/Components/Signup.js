import React from 'react'
import './Signup.css'

export const Signup = () => {
    return (
        <div>
            <footer className="footer py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-4 mx-auto text-center">
                            <a href="https://en.payflip.be/team" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                Team
                            </a>
                            <a href="https://en.payflip.be/jobs" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                Jobs
                            </a>
                            <a href="https://en.payflip.be/tools" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                Tools
                            </a>
                            <a href="https://en.payflip.be/blogs" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                Blog
                            </a>
                            <a href="https://en.payflip.be/partners" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
                                Partners
                            </a>
                        </div>
                        <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
                            <a href="https://www.facebook.com/payflip.smartrewardsolutions/posts" className="text-secondary me-xl-4 me-4">
                                <span className="text-lg fab fa-facebook"></span>
                            </a>
                            <a href="https://be.linkedin.com/company/payflipbe" className="text-secondary me-xl-4 me-4">
                                <span className="text-lg fab fa-linkedin"></span>
                            </a>
                            <a href="https://github.com/Jamerze/PayflipPlatform" className="text-secondary me-xl-4 me-4">
                                <span className="text-lg fab fa-github"></span>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 mx-auto text-center mt-1">
                            <p className="mb-0 text-secondary">
                                Copyright ©2022 Payflip
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
