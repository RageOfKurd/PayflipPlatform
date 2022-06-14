import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AdminAddEmployeePage = () => {
  let headers = { Authorization: localStorage.getItem("accessToken") };
  let api_base_url =
    process.env.NODE_ENV === "local"
      ? `${process.env.REACT_APP_API_BASE_URL_LOCALLY}`
      : `${process.env.REACT_APP_API_BASE_URL_NETLIFY}`;

  const [employeeName, setEmployeeName] = useState("");
  const [employerId, setEmployerId] = useState("");
  const [email, setMail] = useState("");
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("Belgium");
  const [designation, setDesignation] = useState("");
  const [employementType, setEmployementType] = useState("full-time");

  let accountcreationprocessing = false;
  let navigate = useNavigate();
  const [isActive, setActive] = useState("false");
  const handleSideBar = () => {
    setActive(!isActive);
  };

  const [employersList, setEmployersList] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(api_base_url + "/employer", {
          headers: headers,
        });
        const employers = await response.json();
        console.log(employers);
        setEmployersList(employers.data);
      } catch (err) {}
    };

    (async () => await fetchItems())();
  }, []);
  const signout = () => {
    /* localStorage.clear()
    navigate("/login") */
  };
  const submitHandling = (data) => {
    data.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/employee`,
        {
          name: employeeName.toLowerCase(),
          employer_id: employerId,
          email: email.toLowerCase(),
          address: employeeAddress,
          password: password,
          country: country,
          designation: designation,
          employement_type: employementType,
        },
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 201 && res.data.success == true) {
          navigate("/admin/employees");
        } else {
          document.getElementById("existerror").innerHTML = res.data.message;
          document.getElementById("existerror").hidden = false;
        }
      })
      .catch((err) => {
        document.getElementById("existerror").hidden = false;
      });
  };

  return (
    <>
      <div
        className={
          isActive
            ? "g-sidenav-pinned g-sidenav-show  bg-gray-100"
            : "g-sidenav-show  bg-gray-100"
        }
      >
        <div className="backgroundimg">
          <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3  ps ps--active-y bg-white"
            id="sidenav-main"
          >
            <div className="sidenav-header">
              <i
                className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true"
                id="iconSidenav"
              ></i>
              <a className="navbar-brand m-0" href="/admin/dashboard">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fproxy%2F0*kYj1aQljmDquuw7Z&f=1&nofb=1"
                  className="navbar-brand-img h-100"
                  alt="main_logo"
                />
              </a>
            </div>
            <hr className="horizontal dark mt-0" />
            <div
              className="collapse navbar-collapse w-auto"
              id="sidenav-collapse-main"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/admin/dashboard"
                    className="hoverableitem nav-link"
                  >
                    <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fas fa-home" aria-hidden="true"></i>
                    </div>
                    <span className="nav-link-text ms-1">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/benefits" className="hoverableitem nav-link">
                    <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fas fa-trophy" aria-hidden="true"></i>
                    </div>
                    <span className="nav-link-text ms-1">Benefits</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/employees"
                    className="hoverableitem nav-link active"
                  >
                    <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i
                        className="fas fa-users selectedicon"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <span className="nav-link-text ms-1">Employees</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/companies"
                    className="hoverableitem nav-link"
                  >
                    <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fas fa-building" aria-hidden="true"></i>
                    </div>
                    <span className="nav-link-text ms-1">Companies</span>
                  </Link>
                </li>
                <li className="nav-item mt-3">
                  <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                    Account pages
                  </h6>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/updateProfile"
                    className="hoverableitem nav-link"
                  >
                    <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <span className="nav-link-text ms-1">Update Profile</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin/updatePassword"
                    className="hoverableitem nav-link"
                  >
                    <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <span className="nav-link-text ms-1">Update Password</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    onClick={signout}
                    className="hoverableitem nav-link"
                  >
                    <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </div>
                    <span className="nav-link-text ms-1">Sign Out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <main className="main-content position-relative   mt-1 border-radius-lg ">
            {/* <!-- Navbar --> */}
            <nav
              className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
              id="navbarBlur"
              navbar-scroll="true"
            >
              <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                  <h4 className="font-weight-bolder mb-0">Employees</h4>
                </nav>
                <div
                  className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                  id="navbar"
                >
                  <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
                  <ul className="navbar-nav  justify-content-end">
                    <li className="nav-item d-flex align-items-center">
                      <Link
                        to="/login"
                        className="nav-link text-body font-weight-bold px-0"
                      >
                        <i className="fa fa-user me-sm-1"></i>
                        <span className="d-sm-inline d-none">Sign out</span>
                      </Link>
                    </li>
                    <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                      <a
                        href="javascript:;"
                        onClick={handleSideBar}
                        class="nav-link text-body p-0"
                        id="iconNavbarSidenav"
                      >
                        <div class="sidenav-toggler-inner">
                          <i class="sidenav-toggler-line"></i>
                          <i class="sidenav-toggler-line"></i>
                          <i class="sidenav-toggler-line"></i>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar --> */}
            <div
              id="alertprocessing"
              className="alert alert-primary"
              role="alert"
              style={{
                width: "425px",
                marginRight: "15px",
                marginTop: "15px",
                marginLeft: "auto",
                color: "white",
              }}
              hidden={true}
            >
              Account is being created. You'll be redirected soon.
            </div>
            <div className="container-fluid py-4">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                  <div className="card z-index-0">
                    <div className="extrashadow">
                      <div className="card-header text-center pt-4">
                        <h3 className="text-info">Add an Employee</h3>
                      </div>
                      <div className="card-body">
                        <form className="formtext" onSubmit={submitHandling}>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              value={employeeName}
                              onChange={(answer) => {
                                setEmployeeName(answer.target.value);
                              }}
                              placeholder="Employee Name (eg. firstname lastname)"
                              aria-label="EmployeeName"
                              aria-describedby="email-addon"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <select
                              className="form-control"
                              id="employer"
                              aria-label="Employer"
                              value={employerId}
                              required
                              onChange={(answer) => {
                                setEmployerId(answer.target.value);
                              }}
                            >
                              <option value="">Select Employer</option>
                              {employersList && employersList.length > 0 ? (
                                employersList.map((employer) => (
                                  <option value={employer.id}>
                                    {employer.name}
                                  </option>
                                ))
                              ) : (
                                <span></span>
                              )}
                            </select>
                          </div>
                          <div className="mb-3">
                            <input
                              type="email"
                              className="form-control"
                              value={email}
                              onChange={(answer) => {
                                setMail(answer.target.value);
                              }}
                              placeholder="Employee Email (eg. jonasberkels@payflip.be)"
                              aria-label="Email"
                              aria-describedby="email-addon"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="password"
                              className="form-control"
                              value={password}
                              onChange={(answer) => {
                                setPassword(answer.target.value);
                              }}
                              placeholder="Password"
                              aria-label="Password"
                              aria-describedby="email-addon"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              value={employeeAddress}
                              onChange={(answer) => {
                                setEmployeeAddress(answer.target.value);
                              }}
                              placeholder="Employee Address"
                              aria-label="Address"
                              aria-describedby="email-addon"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              value={designation}
                              onChange={(answer) => {
                                setDesignation(answer.target.value);
                              }}
                              placeholder="Designation/Department (eg. HR)"
                              aria-label="Designation"
                              aria-describedby="password-addon"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="employementType"
                              className="text-bluepayflip"
                            >
                              Employee's employment type:
                            </label>
                            <select
                              className="form-control"
                              id="employementType"
                              aria-label="EmployementType"
                              value={employementType}
                              onChange={(answer) => {
                                setEmployementType(answer.target.value);
                              }}
                            >
                              <option value="full-time">Full-Time</option>
                              <option value="part-time">Part-Time</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="country"
                              className="text-bluepayflip"
                            >
                              For which country do you want to register?
                            </label>
                            <select
                              className="form-control"
                              id="country"
                              aria-label="Country"
                              value={country}
                              onChange={(answer) => {
                                setCountry(answer.target.value);
                              }}
                            >
                              <option value="Belgium">Belgium</option>
                              <option value="Slovenia">Slovenia</option>
                              <option value="Portugal">Portugal</option>
                            </select>
                          </div>
                          <p
                            className="text-center"
                            hidden="true"
                            id="existerror"
                            style={{
                              color: "red",
                              fontWeight: "bold",
                              fontSize: "14px",
                            }}
                          >
                            Account with given email already exists
                          </p>
                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn bg-redpayflip text-white w-100 my-4 mb-2"
                            >
                              Add the employee
                            </button>
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
                        ©2022, Payflip
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                        <li className="nav-item">
                          <a
                            href="https://en.payflip.be/team"
                            className="nav-link text-muted"
                            target="_blank"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="https://en.payflip.be/blogs"
                            className="nav-link text-muted"
                            target="_blank"
                          >
                            Blog
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="https://en.payflip.be/partners"
                            className="nav-link pe-0 text-muted"
                            target="_blank"
                          >
                            Partners
                          </a>
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
  );
};
