import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function EmployerDash() {
  let api_base_url = `${process.env.REACT_APP_API_BASE_URL}`;
  let navigate = useNavigate();
  const url = api_base_url + "/dashboard";
  let country_benefits_count = 0;
  let employees_count = 0;
  let employers_benefit_count = 0;
  let employer_budget_sum = 0;
  const [stats, setStats] = useState(null);
  if (stats && stats.data) {
    country_benefits_count = stats.data.total_country_benefits;
    employees_count = stats.data.total_employees;
    employers_benefit_count = stats.data.total_employer_benefits;
    employer_budget_sum = stats.data.total_employer_budget_assigned;
  }
  useEffect(() => {
    document.title = "Payflip - Dashboard";
    const fetchItems = async () => {
      try {
        const response = await fetch(url, {
          headers: { Authorization: localStorage.getItem("accessToken") },
        });
        const statslist = await response.json();
        console.log(statslist);
        if (statslist.success == true) {
          setStats(statslist);
        } else if (
          statslist.success == false &&
          statslist.message == "Unauthorized"
        ) {
          localStorage.removeItem("accessToken");
          navigate("/login");
        } else {
          navigate(-1);
        }
      } catch (err) { }
    };

    (async () => await fetchItems())();
  }, []);

  const signout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [isActive, setActive] = useState("false");
  const handleSideBar = () => {
    setActive(!isActive);
  };

  const [role, setRole] = useState("");
  const role_url = api_base_url + '/auth/role';
  useEffect(async () => {
    const fetchItems = async () => {
      try {
        const response = await fetch(role_url, {
          headers: { Authorization: localStorage.getItem("accessToken") },
        });
        const roleData = await response.json();
        if (roleData.success == true) {
          setRole(roleData.data);
        } else {
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
      } catch (err) {
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
    };
    // (async () => await roleAuthentication())();
    (async () => await fetchItems())();
  }, []);
  if (role !== "" && role !== "employer") {
    return (
      <>
        <div className="col-xl-4 offset-4 col-sm-6 mb-4 mt-5">
          <div className="card hoverablecnt">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-12">
                  <div class="error-box">
                    <div class="error-body text-center">
                      <h1 class="error-title text-danger">404</h1>
                      <h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
                      <p class="text-muted mt-4 mb-4">YOU SEEM TO BE TRYING TO FIND WAY HOME</p>
                      <Link
                        to={role == "admin" ? "/admin/dashboard" : role == "employer" ? "/employer/dashboard" : "/employee/dashboard"}
                        className="btn btn-danger btn-rounded waves-effect waves-light mb-5 text-white"
                      >
                        Back to home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  } else {
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
              className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ps ps--active-y bg-white"
              id="sidenav-main"
            >
              <div className="sidenav-header">
                <i
                  className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                  aria-hidden="true"
                  id="iconSidenav"
                ></i>
                <a
                  className="navbar-brand m-0"
                  href="/employer/dashboard"
                  target="_blank"
                >
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fproxy%2F0*kYj1aQljmDquuw7Z&f=1&nofb=1"
                    className="navbar-brand-img h-100"
                    alt="main_logo"
                  />
                </a>
              </div>
              <hr className="horizontal dark mt-0" />
              <div
                className="collapse navbar-collapse  w-auto   "
                id="sidenav-collapse-main"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/employer/dashboard"
                      className="hoverableitem nav-link active"
                    >
                      <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i
                          className="fas fa-home selectedicon"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <span className="nav-link-text ms-1">Dashboard</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/employer/benefits"
                      className="hoverableitem nav-link"
                    >
                      <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i
                          className="fas fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <span className="nav-link-text ms-1">Benefits Shop</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/employer/ourbenefits"
                      className="hoverableitem nav-link"
                    >
                      <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fas fa-trophy" aria-hidden="true"></i>
                      </div>
                      <span className="nav-link-text ms-1">Our Benefits</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/employer/employees"
                      className="hoverableitem nav-link"
                    >
                      <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fas fa-users" aria-hidden="true"></i>
                      </div>
                      <span className="nav-link-text ms-1">Employees</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/employer/budgets"
                      className="hoverableitem nav-link"
                    >
                      <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fas fa-euro-sign" aria-hidden="true"></i>
                      </div>
                      <span className="nav-link-text ms-1">Budgets</span>
                    </Link>
                  </li>
                  <li className="nav-item mt-3">
                    <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                      Account pages
                    </h6>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/employer/updateProfile"
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
                      to="/employer/updatePassword"
                      className="hoverableitem nav-link"
                    >
                      <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa fa-key" aria-hidden="true"></i>
                      </div>
                      <span className="nav-link-text ms-1">Update Password</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="javascript:;"
                      onClick={signout} className="hoverableitem nav-link">
                      <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                      </div>
                      <span className="nav-link-text ms-1">Sign Out</span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
            <main className="main-content position-relative mt-1 border-radius-lg ">
              {/* <!-- Navbar --> */}
              <nav
                className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
                id="navbarBlur"
                navbar-scroll="true"
              >
                <div className="container-fluid py-1 px-3">
                  <nav aria-label="breadcrumb">
                    <h4 className="font-weight-bolder mb-0">Dashboard</h4>
                  </nav>
                  <div
                    className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                    id="navbar"
                  >
                    <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
                    <ul className="navbar-nav  justify-content-end">
                      <li className="nav-item d-flex align-items-center">
                        <a
                          href="javascript:;"
                          onClick={signout}
                          className="nav-link text-body font-weight-bold px-0"
                        >
                          <i className="fa fa-user me-sm-1"></i>
                          <span className="d-sm-inline d-none">Sign out</span>
                        </a>
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
              <div className="container-fluid py-4">
                <div className="row">
                  <div className="col-xl-4 col-sm-6 mb-4">
                    <div className="card hoverablecnt">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="numbers">
                              <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                Total Employees
                              </p>
                              <h5 className="font-weight-bolder mb-0">
                                {employees_count}
                              </h5>
                            </div>
                          </div>
                          <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-payflip shadow text-center border-radius-md">
                              <i
                                className="fas fa-users text-lg opacity-10"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6 mb-4">
                    <div className="card hoverablecnt">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="numbers">
                              <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                Available Benefits in Country
                              </p>
                              <h5 className="font-weight-bolder mb-0">
                                {country_benefits_count}
                              </h5>
                            </div>
                          </div>
                          <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-payflip shadow text-center border-radius-md">
                              <i
                                className="fas fa-trophy text-lg opacity-10"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6 mb-4">
                    <div className="card hoverablecnt">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="numbers">
                              <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                Total Employer Benefits
                              </p>
                              <h5 className="font-weight-bolder mb-0">
                                {employers_benefit_count}
                              </h5>
                            </div>
                          </div>
                          <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-payflip shadow text-center border-radius-md">
                              <i
                                className="fas fa-trophy text-lg opacity-10"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6 mb-4">
                    <div className="card hoverablecnt">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="numbers">
                              <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                Total Employer Budget Assigned
                              </p>
                              <h5 className="font-weight-bolder mb-0">
                                {employer_budget_sum}
                              </h5>
                            </div>
                          </div>
                          <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-payflip shadow text-center border-radius-md">
                              <i
                                className="fas fa-euro-sign text-lg opacity-10"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
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
  }
}
