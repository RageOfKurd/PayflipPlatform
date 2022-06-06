import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const EmployerEditBudgetPage = () => {
    let api_base_url = `${process.env.REACT_APP_API_BASE_URL}`;
    let headers = { "Authorization": localStorage.getItem("accessToken") }
    const { id } = useParams()
    const employee_url = api_base_url + "/employee"

    const [amount, setAmount] = useState('');
    const [budget_type, setBudgetType] = useState('');
    const [employee_id, setEmployeeID] = useState('Select Employee');
    let navigate = useNavigate()

    const [employeeList, setEmployeeList] = useState(null)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(employee_url, { headers: headers })
                const employees = await response.json()
                setEmployeeList(employees.data)
            } catch (err) {

            }
        }

        (async () => await fetchItems())()
    }, [])

    const submitHandling = (data) => {
        data.preventDefault();
        axios.put(`${process.env.REACT_APP_API_BASE_URL}/budget/${id}`, {
            amount: amount,
            budget_type: budget_type,
            employee_id: employee_id,
        }, { headers: headers }).then((res) => {
            console.log(res)
            if (res.status === 200 && res.data.success === true) {
                navigate("/employer/budgets")
            } else {
                console.log(res.data.message);
                document.getElementById("existerror").innerHTML = res.data.message;
                document.getElementById("existerror").hidden = false;
            }
        }).catch((err) => {
            document.getElementById("existerror").hidden = false;
        })
    }

    useEffect(() => {
        document.title = "Payflip - Budgets";
        const fetchItems = async () => {
            try {
                const detail_url = `${process.env.REACT_APP_API_BASE_URL}/budget/${id}`
                const response = await fetch(detail_url, { headers: headers })
                const budget = await response.json()
                setAmount(budget.data.amount)
                setBudgetType(budget.data.budget_type)
                setEmployeeID(budget.data.employee_id)
            } catch (err) {

            }
        }

        (async () => await fetchItems())();
        //(async () => await roleAuthentication())()
    }, [])

    return (
        <>
            <div className="g-sidenav-show  bg-gray-100">
                <div className="backgroundimg">
                    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
                        id="sidenav-main">
                        <div className="sidenav-header">
                            <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                                aria-hidden="true" id="iconSidenav"></i>
                            <a className="navbar-brand m-0" href="https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html"
                                target="_blank">
                                <img
                                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fproxy%2F0*kYj1aQljmDquuw7Z&f=1&nofb=1"
                                    className="navbar-brand-img h-100" alt="main_logo" />
                            </a>
                        </div>
                        <hr className="horizontal dark mt-0" />
                        <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/employer/dashboard" className="hoverableitem nav-link active" >
                                        <div
                                            className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="fas fa-home selectedicon" aria-hidden="true"></i>
                                        </div>
                                        <span className="nav-link-text ms-1">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/employer/benefits" className="hoverableitem nav-link">
                                        <div
                                            className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                                        </div>
                                        <span className="nav-link-text ms-1">Benefits Shop</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/employer/ourbenefits" className="hoverableitem nav-link">
                                        <div
                                            className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="fas fa-trophy" aria-hidden="true"></i>
                                        </div>
                                        <span className="nav-link-text ms-1">Our Benefits</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/employer/employees" className="hoverableitem nav-link">
                                        <div
                                            className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="fas fa-users" aria-hidden="true"></i>
                                        </div>
                                        <span className="nav-link-text ms-1">Employees</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/employer/budgets" className="hoverableitem nav-link">
                                        <div
                                            className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="fas fa-euro-sign" aria-hidden="true"></i>
                                        </div>
                                        <span className="nav-link-text ms-1">Budgets</span>
                                    </Link>
                                </li>
                                <li className="nav-item mt-3">
                                    <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="hoverableitem nav-link">
                                        <div
                                            className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                                        </div>
                                        <span className="nav-link-text ms-1">Sign Out</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
                        {/* <!-- Navbar --> */}
                        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
                            navbar-scroll="true">
                            <div className="container-fluid py-1 px-3">
                                <nav aria-label="breadcrumb">
                                    <h4 className="font-weight-bolder mb-0">Budgets</h4>
                                </nav>
                                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                                    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                    </div>
                                    <ul className="navbar-nav  justify-content-end">
                                        <li className="nav-item d-flex align-items-center">
                                            <Link to="/login" className="nav-link text-body font-weight-bold px-0">
                                                <i className="fa fa-user me-sm-1"></i>
                                                <span className="d-sm-inline d-none">Sign out</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        {/* <!-- End Navbar --> */}
                        <div className="container-fluid py-4">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                                    <div className="card z-index-0">
                                        <div className="extrashadow">
                                            <div className="card-header text-center pt-4">
                                                <h3 className="text-info">Edit Budget</h3>
                                            </div>
                                            <div className="card-body">
                                                <form className="formtext" onSubmit={submitHandling}>
                                                    <div className="mb-3">
                                                        <input type="number" className="form-control" value={amount} onChange={(answer) => { setAmount(answer.target.value) }} placeholder="Amount"
                                                            aria-label="Amount" aria-describedby="email-addon" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" value={budget_type} onChange={(answer) => { setBudgetType(answer.target.value) }} placeholder="Budget Type" aria-label="BudgetType" aria-describedby="email-addon" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <select className="form-control" id="employee" aria-label="Employee" value={employee_id} onChange={(answer) => { setEmployeeID(answer.target.value) }}>
                                                            <option value="">Select Employee</option>
                                                            {
                                                                employeeList && employeeList.length > 0 ? employeeList.map(employee =>
                                                                    <option value={employee.id}>{employee.name}</option>
                                                                ) : (
                                                                    <span></span>
                                                                )
                                                            }
                                                        </select>
                                                    </div>
                                                    <p className="text-center" hidden="true" id="existerror" style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}>Error while trying to update the information</p>
                                                    <div className="text-center">
                                                        <button type="submit" className="btn bg-redpayflip text-white w-100 my-4 mb-2">Update information</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="footer pt-3  ">
                                <div className="container-fluid">
                                    <div className="row align-items-center justify-content-lg-between">
                                        <div className="col-lg-6 mb-lg-0 mb-4">
                                            <div className="copyright text-center text-sm text-muted text-lg-start">
                                                ©2022,
                                                Payflip
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                                <li className="nav-item">
                                                    <a href="https://en.payflip.be/team" className="nav-link text-muted" target="_blank">About
                                                        Us</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="https://en.payflip.be/blogs" className="nav-link text-muted" target="_blank">Blog</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="https://en.payflip.be/partners" className="nav-link pe-0 text-muted" target="_blank">Partners</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
