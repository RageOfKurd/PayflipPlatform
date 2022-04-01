import React from "react";
import Footer from "./footer";
import whiteCurved from "./assets/Img/curved-images/white-curved.jpeg"
import SignIn from "./sign-in";



export function AdminDash(){

    return(
        <>
<body className="g-sidenav-show bg-gray-100">
    <aside
      className="
        sidenav
        navbar navbar-vertical navbar-expand-xs
        border-0 border-radius-xl
        my-3
        fixed-start
        ms-3
      "
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="
            fas
            fa-times
            p-3
            cursor-pointer
            text-secondary
            opacity-5
            position-absolute
            end-0
            top-0
            d-none d-xl-none
          "
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a
          className="navbar-brand m-0"
          href="https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html"
          target="javascript:;"
        >
          <img
            src="../assets/img/logo-ct.png"
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold">Payflip admin</span>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div
        className="collapse navbar-collapse w-auto max-height-vh-100 h-100"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="../pages/dashboard-admin.html">
              <div
                className="
                  icon icon-shape icon-sm
                  shadow
                  border-radius-md
                  bg-white
                  text-center
                  me-2
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
              <svg
              width="12px"
              height="12px"
              viewBox="0 0 45 40"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>shop</title>
              <g
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  transform="translate(-1716.000000, -439.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                >
                  <g transform="translate(1716.000000, 291.000000)">
                    <g transform="translate(0.000000, 148.000000)">
                      <path
                        className="color-background opacity-6"
                        d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
                      ></path>
                      <path
                        className="color-background"
                        d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
              </div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../pages/admin-company-table.html">
              <div
                className="
                  icon icon-shape icon-sm
                  shadow
                  border-radius-md
                  bg-white
                  text-center
                  me-2
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <svg
                  width="12px"
                  height="12px"
                  viewBox="0 0 43 36"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
               
                >
                  <title>credit-card</title>
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-2169.000000, -745.000000)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <g transform="translate(1716.000000, 291.000000)">
                        <g transform="translate(453.000000, 454.000000)">
                          <path
                            className="color-background opacity-6"
                            d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                          ></path>
                          <path
                            className="color-background"
                            d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <span className="nav-link-text ms-1">Companies</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../pages/admin-employees-table.html">
              <div
                className="
                  icon icon-shape icon-sm
                  shadow
                  border-radius-md
                  bg-white
                  text-center
                  me-2
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <svg
                  width="12px"
                  height="12px"
                  viewBox="0 0 40 40"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
             
                >
                  <title>Employees</title>
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-2020.000000, -442.000000)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <g transform="translate(1716.000000, 291.000000)">
                        <g transform="translate(304.000000, 151.000000)">
                          <polygon
                            className="color-background opacity-6"
                            points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                          ></polygon>
                          <path
                            className="color-background opacity-6"
                            d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                          ></path>
                          <path
                            className="color-background"
                            d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <span className="nav-link-text ms-1">Employees</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../pages/admin-partners-table.html">
              <div
                className="
                  icon icon-shape icon-sm
                  shadow
                  border-radius-md
                  bg-white
                  text-center
                  me-2
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <svg
                  width="12px"
                  height="12px"
                  viewBox="0 0 40 40"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
         
                >
                  <title>Partners</title>
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-2020.000000, -442.000000)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <g transform="translate(1716.000000, 291.000000)">
                        <g transform="translate(304.000000, 151.000000)">
                          <polygon
                            className="color-background opacity-6"
                            points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                          ></polygon>
                          <path
                            className="color-background opacity-6"
                            d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                          ></path>
                          <path
                            className="color-background"
                            d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <span className="nav-link-text ms-1">Partners</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../pages/admin-benefits-table.html">
              <div
                className="
                  icon icon-shape icon-sm
                  shadow
                  border-radius-md
                  bg-white
                  text-center
                  me-2
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <svg
                  width="12px"
                  height="12px"
                  viewBox="0 0 40 40"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
               
                >
                  <title>Benefits</title>
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-2020.000000, -442.000000)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <g transform="translate(1716.000000, 291.000000)">
                        <g transform="translate(304.000000, 151.000000)">
                          <polygon
                            className="color-background opacity-6"
                            points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                          ></polygon>
                          <path
                            className="color-background opacity-6"
                            d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                          ></path>
                          <path
                            className="color-background"
                            d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <span className="nav-link-text ms-1">Benefits</span>
            </a>
          </li>
 
          <li className="nav-item">
            <a className="nav-link" href={ <SignIn />}>
              <div
                className="
                  icon icon-shape icon-sm
                  shadow
                  border-radius-md
                  bg-white
                  text-center
                  me-2
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <svg
                  width="12px"
                  height="12px"
                  viewBox="0 0 40 44"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
             
                >
                  <title>document</title>
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-1870.000000, -591.000000)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <g transform="translate(1716.000000, 291.000000)">
                        <g transform="translate(154.000000, 300.000000)">
                          <path
                            className="color-background opacity-6"
                            d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                          ></path>
                          <path
                            className="color-background"
                            d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <span className="nav-link-text ms-1">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer mx-3">
        <div
          className="
            card card-background
            shadow-none
            card-background-mask-secondary
          "
          id="sidenavCard"
        >
          <div
            className="full-background"
            style=
            {{backgroundImage:`url(${whiteCurved})`}}
          
          ></div>
          <div className="card-body text-start p-3 w-100">
            <div
              className="
                icon icon-shape icon-sm
                bg-white
                shadow
                text-center
                mb-3
                d-flex
                align-items-center
                justify-content-center
                border-radius-md
              "
            >
              <i
                className="ni ni-diamond text-dark text-gradient text-lg top-0"
                aria-hidden="true"
                id="sidenavCardIcon"
              ></i>
            </div>
            <div className="docs-info">
              <h6 className="text-white up mb-0">Need help?</h6>
              <p className="text-xs font-weight-bold">Please check our docs</p>
              <a
                href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard"
                target="javascript:;"
                className="btn btn-white btn-sm w-100 mb-0"
                >Documentation</a>
            </div>
          </div>
        </div>
        <a
          className="btn bg-gradient-primary mt-4 w-100"
          href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree"
          type="button"
          >Upgrade to pro</a>
      </div>
    </aside>
    <main
      className="
        main-content
        position-relative
        max-height-vh-100
        h-100
        mt-1
        border-radius-lg
      "
    >

      <nav
        className="
          navbar navbar-main navbar-expand-lg
          px-0
          mx-4
          shadow-none
          border-radius-xl
        "
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5"
            >
              <li className="breadcrumb-item text-sm">
                <a className="opacity-5 text-dark" href="javascript:;">Pages</a>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                Tables
              </li>
            </ol>
            <h6 className="font-weight-bolder mb-0">Tables</h6>
          </nav>
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group">
                <span className="input-group-text text-body"
                  ><i className="fas fa-search" aria-hidden="true"></i></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item d-flex align-items-center">
                <a
                  href="javascript:;"
                  className="nav-link text-body font-weight-bold px-0"
                >
                  <i className="fa fa-user me-sm-1"></i>
                  <span className="d-sm-inline d-none">Superuser sign-in</span>
                </a>
              </li>
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <a
                  href=""
                  className="nav-link text-body p-0"
                  id="iconNavbarSidenav"
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item px-3 d-flex align-items-center">
                <a href="javascript:;" className="nav-link text-body p-0">
                  <i
                    className="fa fa-cog fixed-plugin-button-nav cursor-pointer"
                  ></i>
                </a>
              </li>
              <li className="nav-item dropdown pe-2 d-flex align-items-center">
                <a
                  href="javascript:;"
                  className="nav-link text-body p-0"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell cursor-pointer"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="mb-2">
                    <a
                      className="dropdown-item border-radius-md"
                      href="javascript:;"
                    >
                      <div className="d-flex py-1">
                        <div className="my-auto">
                          <img
                            src="../assets/img/team-2.jpg"
                            className="avatar avatar-sm me-3"
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            <span className="font-weight-bold">New message</span>
                            from Laur
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1"></i>
                            13 minutes ago
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="dropdown-item border-radius-md"
                      href="javascript:;"
                    >
                      <div className="d-flex py-1">
                        <div className="my-auto">
                          <img
                            src="../assets/img/small-logos/logo-spotify.svg"
                            className="avatar avatar-sm bg-gradient-dark me-3"
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            <span className="font-weight-bold">New album</span> by
                            Travis Scott
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1"></i>
                            1 day
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item border-radius-md"
                      href="javascript:;"
                    >
                      <div className="d-flex py-1">
                        <div
                          className="
                            avatar avatar-sm
                            bg-gradient-secondary
                            me-3
                            my-auto
                          "
                        >
                          <svg
                            width="12px"
                            height="12px"
                            viewBox="0 0 43 36"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                      
                          >
                            <title>credit-card</title>
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                transform="translate(-2169.000000, -745.000000)"
                                fill="#FFFFFF"
                                fillRule="nonzero"
                              >
                                <g
                                  transform="translate(1716.000000, 291.000000)"
                                >
                                  <g
                                    transform="translate(453.000000, 454.000000)"
                                  >
                                    <path
                                      className="color-background"
                                      d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                      opacity="0.593633743"
                                    ></path>
                                    <path
                                      className="color-background"
                                      d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            Payment successfully completed
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1"></i>
                            2 days
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card hoverablecnt">
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">
                    Total companies
                  </p>
                  <h5 className="font-weight-bolder mb-0">
                    26
                    <span className="text-success text-sm font-weight-bolder"
                      >+3%</span>
                  </h5>
                </div>
              </div>
              <div className="col-4 text-end">
                <div
                  className="
                    icon icon-shape
                    bg-gradient-payflip
                    shadow
                    text-center
                    border-radius-md
                  "
                >
                  <i className="briefcase-24" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card hoverablecnt">
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">
                    Total employees
                  </p>
                  <h5 className="font-weight-bolder mb-0">
                    200
                    <span className="text-success text-sm font-weight-bolder"
                      >+12%</span>
                  </h5>
                </div>
              </div>
              <div className="col-4 text-end">
                <div
                  className="
                    icon icon-shape
                    bg-gradient-payflip
                    shadow
                    text-center
                    border-radius-md
                  "
                >
                  <i
                    className="ni ni-money-coins text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="card hoverablecnt">
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">
                    Total flexible salary amount used
                  </p>
                  <h5 className="font-weight-bolder mb-0">
                    €20202.14
                    <span className="text-success text-sm font-weight-bolder"
                      >+36%</span>
                  </h5>
                </div>
              </div>
              <div className="col-4 text-end">
                <div
                  className="
                    icon icon-shape
                    bg-gradient-payflip
                    shadow
                    text-center
                    border-radius-md
                  " >
                  <i
                    className="ni ni-credit-card text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <footer className="footer pt-3">
        <Footer/>
        </footer>
    </main>
    <div className="fixed-plugin">
      <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
        <i className="fa fa-cog py-2"> </i>
      </a>
      <div className="card shadow-lg">
        <div className="card-header pb-0 pt-3">
          <div className="float-start">
            <h5 className="mt-3 mb-0">Soft UI Configurator</h5>
            <p>See our dashboard options.</p>
          </div>
          <div className="float-end mt-4">
            <button
              className="btn btn-link text-dark p-0 fixed-plugin-close-button"
            >
              <i className="fa fa-close"></i>
            </button>
          </div>
      
        </div>
        <hr className="horizontal dark my-1" />
        <div className="card-body pt-sm-3 pt-0">
     
          <div>
            <h6 className="mb-0">Sidebar Colors</h6>
          </div>
          <a href="javascript:void(0)" className="switch-trigger background-color">
            <div className="badge-colors my-2 text-start">
              <span
                className="badge filter bg-gradient-primary active"
                data-color="primary"
                onClick={() => {}}
              ></span>
              <span
                className="badge filter bg-gradient-dark"
                data-color="dark"
                onClick={() => {}}
              ></span>
              <span
                className="badge filter bg-gradient-info"
                data-color="info"
                onClick={() => {}}
              ></span>
              <span
                className="badge filter bg-gradient-success"
                data-color="success"
                onClick={() => {}}
              ></span>
              <span
                className="badge filter bg-gradient-warning"
                data-color="warning"
                onClick={() => {}}
              ></span>
              <span
                className="badge filter bg-gradient-danger"
                data-color="danger"
                onClick={() => {}}
              ></span>
            </div>
          </a>
      
          <div className="mt-3">
            <h6 className="mb-0">Sidenav Type</h6>
            <p className="text-sm">Choose between 2 different sidenav types.</p>
          </div>
          <div className="d-flex">
            <button
              className="btn bg-gradient-primary w-100 px-3 mb-2 active"
              data-class="bg-transparent"
              onClick={() => {}}
            >
              Transparent
            </button>
            <button
              className="btn bg-gradient-primary w-100 px-3 mb-2 ms-2"
              data-class="bg-white"
              onClick={() => {}}
            >
              White
            </button>
          </div>
          <p className="text-sm d-xl-none d-block mt-2">
            You can change the sidenav type just on desktop view.
          </p>

          <div className="mt-3">
            <h6 className="mb-0">Navbar Fixed</h6>
          </div>
          <div className="form-check form-switch ps-0">
            <input
              className="form-check-input mt-1 ms-auto"
              type="checkbox"
              id="navbarFixed"
              onClick={() => {}}
            />
          </div>
          <hr className="horizontal dark my-sm-4" />
          <a
            className="btn bg-gradient-dark w-100"
            href="https://www.creative-tim.com/product/soft-ui-dashboard-pro"
            >Free Download</a>
          <a
            className="btn btn-outline-dark w-100"
            href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard"
            >View documentation</a>
          <div className="w-100 text-center">
            <a
              className="github-button"
              href="https://github.com/creativetimofficial/soft-ui-dashboard"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub"
              >Star</a>
            <h6 className="mt-3">Thank you for sharing!</h6>
            <a
              href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
              className="btn btn-dark mb-0 me-2"
              target="javascript:;"
            >
              <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard"
              className="btn btn-dark mb-0 me-2"
              target="javascript:;"
            >
              <i className="fab fa-facebook-square me-1" aria-hidden="true"></i>
              Share
            </a>
          </div>
        </div>
      </div>
    </div> 
    </body>
    </> );
    
 
}