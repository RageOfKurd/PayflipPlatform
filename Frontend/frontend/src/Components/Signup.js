import React, { useState } from 'react'
import './Assets/Payflip.css'
import { Footer } from './Footer'
import axios from 'axios'

export const Signup = () => {
    const [companyName,setCompanyName] = useState('');
    const [contactName,setContactName] = useState('');
    const [companyMail,setCompanyMail] = useState('');
    const [companyAddress,setCompanyAddress] = useState('');
    const [password,setPassword] = useState('');
    const [country,setCountry] = useState('Belgium');
    const submitHandling = (data) =>{
        data.preventDefault() //Don't comment until backend is fully operational
        console.log(companyName,contactName,companyMail,companyAddress,password,country)
        /*axios.post("localhost",{         Don't uncomment until backend is fully operational
            companyName: companyName,
            contactName: contactName,
            companyMail: companyMail,
            companyAddress: companyAddress,
            password: password,
            country: country
        })*/ 
    }

    return (
        <div>
            <header>
                <div className="page-header align-items-start pt-5 pb-11 m-3 border-radius-lg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 text-center mx-auto">
                                <img alt="payfliplogo" height="70px" width="300px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fproxy%2F0*kYj1aQljmDquuw7Z&f=1&nofb=1"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="row mt-lg-n10 mt-md-n11 mt-n10 me-xl-4">
                        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                            <div className="card z-index-0">
                                <div className="extrashadow">
                                    <div className="card-header text-center pt-4">
                                        <h3 className="text-info">Register you company</h3>
                                    </div>
                                    <div className="card-body">
                                        <form className="formtext" onSubmit={submitHandling}>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" value={companyName} onChange={(answer)=>{setCompanyName(answer.target.value)}} placeholder="Company Name" 
                                                aria-label="CompanyName" aria-describedby="email-addon" required/>
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" value={contactName} onChange={(answer)=>{setContactName(answer.target.value)}} placeholder="Contact Name" 
                                                aria-label="ContactName" aria-describedby="email-addon" required/>
                                            </div>
                                            <div className="mb-3">
                                                <input type="email" className="form-control" value={companyMail} onChange={(answer)=>{setCompanyMail(answer.target.value)}} placeholder="Company Email" 
                                                aria-label="Email" aria-describedby="email-addon" required/>
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" value={companyAddress} onChange={(answer)=>{setCompanyAddress(answer.target.value)}} placeholder="Company Address" 
                                                aria-label="Address" aria-describedby="email-addon" required/>
                                            </div>
                                            <div className="mb-3">
                                                <input type="password" className="form-control" value={password} onChange={(answer)=>{setPassword(answer.target.value)}} placeholder="Password" 
                                                aria-label="Password" aria-describedby="password-addon" required/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="country" className="text-bluepayflip">For which country do you want to register?</label>
                                                <select className="form-control" id="country" aria-label="Country" value={country} onChange={(answer)=>{setCountry(answer.target.value)}}>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Portugal">Portugal</option>
                                                </select>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn bg-redpayflip text-white w-100 my-4 mb-2">Request Access</button>
                                            </div>
                                            <p className="text-sm mt-3 mb-0">Already have an account? <a href="https://www.youtube.com/watch?v=_mrr3UNALww" className="text-bluepayflip font-weight-bolder">Sign in</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
