import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export const EmployerBenefitsPage = () => {
  let api_base_url = `${process.env.REACT_APP_API_BASE_URL}`;

  const urlavailablebenefits = api_base_url + "/employer-benefit/country";
  const urlcompanybenefits = api_base_url + "/employer-benefit";
  let headers = { Authorization: localStorage.getItem("accessToken") };
  let navigate = useNavigate();

  const [availableBenefitsList, setAvailableBenefitsList] = useState(null);

  useEffect(() => {
    document.title = "Payflip - Benefits Shop";
    (async () => await fetchItems())();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(urlavailablebenefits, { headers: headers });
      const response2 = await fetch(urlcompanybenefits, { headers: headers });
      const availablebenefits = await response.json();
      const companybenefits = await response2.json();

      let tempAvailableBenefitList = availablebenefits.data;
      let tempCompanyBenefitList = companybenefits.data;


      if (tempCompanyBenefitList.length > 0) {
        tempCompanyBenefitList.forEach((benefit) => {
          tempAvailableBenefitList.splice(
            tempAvailableBenefitList.indexOf(
              tempAvailableBenefitList.find(
                (benefit2) => benefit.benefit_id === benefit2.id
              )
            ),
            1
          );
        });
      }
      setAvailableBenefitsList(tempAvailableBenefitList);
    } catch (err) {
      console.log(err);
      console.log("Error while trying to retrieve benefit data.");
    }
  };

  const addBenefit = (id) => {

    axios
      .post(
        api_base_url + "/employer-benefit",
        {
          benefit_id: id.target.value,
        },
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 201 && res.data.success === true) {
          availableBenefitsList.splice(
            availableBenefitsList.indexOf(
              availableBenefitsList.find(
                (benefit) => benefit.id === id.target.value
              )
            ),
            1
          );
          setAvailableBenefitsList([...availableBenefitsList]);
          navigate("/employer/benefits");
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Benefit couldn't be added");
      });
  };
  const [isActive, setActive] = useState("false");
  const handleSideBar = () => {
    setActive(!isActive);
  };

  const signout = () => {
    localStorage.clear();
    navigate("/login");
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
      <div>
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
                      className="hoverableitem nav-link "
                    >
                      <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="fas fa-home " aria-hidden="true"></i>
                      </div>
                      <span className="nav-link-text ms-1">Dashboard</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/employer/benefits"
                      className="hoverableitem nav-link active"
                    >
                      <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i
                          className="fas fa-shopping-cart selectedicon"
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
                      className="hoverableitem nav-link "
                    >
                      <div className="icon icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        <i
                          className="fas fa-euro-sign "
                          aria-hidden="true"
                        ></i>
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
            <main className="main-content position-relative   ">
              {/* <!-- Navbar --> */}
              <nav
                className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
                id="navbarBlur"
                navbar-scroll="true"
              >
                <div className="container-fluid py-1 px-3">
                  <nav aria-label="breadcrumb">
                    <h4 className="font-weight-bolder mb-0">Available Benefits in Your Country</h4>
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
                <div className="justify-content-between">
                  <MDBRow>
                    {availableBenefitsList && availableBenefitsList.length > 0 ? (
                      availableBenefitsList.map((benefit) => (
                        <MDBCol md={4} style={{

                        }}>
                          <MDBCard
                            key={benefit.id}
                            alignment="center"
                            style={{
                              width: "100%",
                              marginBottom: "30px",
                              height: "633px !important"
                            }}
                          >
                            <MDBCardImage
                              style={{
                                backgroundColor: "linen",
                                height: "23.75rem",
                              }}
                              src={benefit.imageUrl}
                              position="top"
                              alt="..."
                            />
                            <MDBCardBody>
                              <MDBCardTitle style={{
                                height: "3.5rem",
                              }}>
                                {benefit.name + " "}
                                {
                                  <span
                                    style={{ fontSize: 15, color: "green" }}
                                  >
                                    {"€" + benefit.cost}
                                  </span>
                                }
                              </MDBCardTitle>

                              <MDBCardText  style={{
                                height: "5rem",
                              }}>
                                {benefit.description}
                              </MDBCardText>
                              <button
                                type="submit"
                                className="btn bg-redpayflip text-white w-80 mt-1 mb-0"
                                value={benefit.id}
                                onClick={addBenefit}
                              >
                                Add to Your Benefit
                              </button>
                            </MDBCardBody>
                          </MDBCard>
                        </MDBCol>
                      ))
                    ) : (

                      <h6 className="px-2 text-center">
                        <div className="my-auto text-center">
                          No Benefit available to add
                        </div>
                      </h6>
                    )}
                  </MDBRow>
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
      </div>
    );
  }

};
