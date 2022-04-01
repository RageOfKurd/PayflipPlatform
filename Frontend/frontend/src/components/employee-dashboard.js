import React from "react";
import Footer from "./footer";
import whiteCurved from "./assets/Img/curved-images/white-curved.jpeg"


export function EmployeeDash () {

    const CFplan ="https://uploads-ssl.webflow.com/609269ab2583bd426a911d71/60c8c5490183806316b3c5b1_Cafetariaplan%20default%20image.svg" 

    return (
        <>


<body className="g-sidenav-show  bg-gray-100">
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
          className="navbar-brand-img h-100" alt="main_logo"/>
      </a>
    </div>
    <hr className="horizontal dark mt-0"/>
    <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="hoverableitem nav-link active" href="../pages/dashboard.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg"
               >
                <title>shop </title>
                <g stroke="none" strokeWidth="1" fill="none"  fillRule="evenodd">
                  <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF"  fillRule="nonzero">
                    <g transform="translate(1716.000000, 291.000000)">
                      <g transform="translate(0.000000, 148.000000)">
                        <path className="color-background opacity-6"
                          d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z">
                        </path>
                        <path className="color-background"
                          d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z">
                        </path>
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
          <a className="hoverableitem nav-link" href="../pages/tables.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg"
               >
                <title>office</title>
                <g stroke="none" strokeWidth="1" fill="none"  fillRule="evenodd">
                  <g transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF"  fillRule="nonzero">
                    <g transform="translate(1716.000000, 291.000000)">
                      <g id="office" transform="translate(153.000000, 2.000000)">
                        <path className="color-background opacity-6"
                          d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z">
                        </path>
                        <path className="color-background"
                          d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z">
                        </path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <span className="nav-link-text ms-1">Benefits</span>
          </a>
        </li>
        <li className="nav-item mt-3">
          <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
        </li>
        <li className="nav-item">
          <a className="hoverableitem nav-link" href="../pages/profile.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <svg width="12px" height="12px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg"
                >
                <title>customer-support</title>
                <g stroke="none" strokeWidth="1" fill="none"  fillRule="evenodd">
                  <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF"  fillRule="nonzero">
                    <g transform="translate(1716.000000, 291.000000)">
                      <g transform="translate(1.000000, 0.000000)">
                        <path className="color-background opacity-6"
                          d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z">
                        </path>
                        <path className="color-background"
                          d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z">
                        </path>
                        <path className="color-background"
                          d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z">
                        </path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <span className="nav-link-text ms-1">Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="hoverableitem nav-link" href="../pages/sign-in.html">
            <div
              className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
              <svg width="12px" height="12px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg"
               >
                <title>document</title>
                <g stroke="none" strokeWidth="1" fill="none"  fillRule="evenodd">
                  <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF"  fillRule="nonzero">
                    <g transform="translate(1716.000000, 291.000000)">
                      <g transform="translate(154.000000, 300.000000)">
                        <path className="color-background opacity-6"
                          d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z">
                        </path>
                        <path className="color-background"
                          d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z">
                        </path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <span className="nav-link-text ms-1">Sign Out</span>
          </a>
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
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Pages</a></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
          </ol>
          <h6 className="font-weight-bolder mb-0">Dashboard</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body font-weight-bold px-0">
                <i className="fa fa-user me-sm-1"></i>
                <span className="d-sm-inline d-none">Sign out</span>
              </a>
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0">
                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className="fa fa-bell cursor-pointer"></i>
              </a>
              <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fa6%2F68%2F6b%2Fa6686b1d91fd8253a0b54a78179daf4a.jpg&f=1&nofb=1"
                          className="avatar avatar-sm  me-3 "/>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New benefit</span> in Multimedia
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1"></i>
                          54 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJw0CIvXjE4Wdeeq20AOSq0PfkSfHw59RKpKBA%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1"
                          className="avatar avatar-sm bg-gradient-dark  me-3 "/>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New benefit</span> in Subscriptions
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1"></i>
                          2 days ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-03.independent.ie%2Fbusiness%2Ftechnology%2Farticle34462670.ece%2Fce7ef%2FAUTOCROP%2Fw620%2F2016-02-18_bus_16966093_I2.JPG&f=1&nofb=1"
                          className="avatar avatar-sm bg-gradient-dark  me-3 "/>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New benefit</span> in Subscriptions
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1"></i>
                          2 days ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" >
                          <title>credit-card</title>
                          <g stroke="none" strokeWidth="1" fill="none"  fillRule="evenodd">
                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF"  fillRule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path className="color-background"
                                    d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                    opacity="0.593633743"></path>
                                  <path className="color-background"
                                    d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z">
                                  </path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Benefits were successfully ordered
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1"></i>
                          5 days ago
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
    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card hoverablecnt">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Total spendable amount</p>
                    <h5 className="font-weight-bolder mb-0">
                      €1425.47
                      <span className="text-success text-sm font-weight-bolder">+12%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-payflip shadow text-center border-radius-md">
                    <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
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
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Total benefits ordered</p>
                    <h5 className="font-weight-bolder mb-0">
                      26
                      <span className="text-success text-sm font-weight-bolder">+3%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-payflip shadow text-center border-radius-md">
                    <i className="ni ni-trophy text-lg opacity-10" aria-hidden="true"></i>
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
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Saved on taxes</p>
                    <h5 className="font-weight-bolder mb-0">
                      €4788.14
                      <span className="text-success text-sm font-weight-bolder">+36%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-payflip shadow text-center border-radius-md">
                    <i className="ni ni-credit-card text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-5 mb-lg-0 mb-4">
          <div className="hoverablecnt card z-index-2">
            <div className="card-header pb-0">
              <h6>Total Salary</h6>
            </div>
            <div className="card-body p-3">
              <div>
                <div className="chart">
                  <canvas id="chart-bars" className="chart-canvas" height="234"></canvas>
                </div>
              </div>
              <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                View details
                <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card z-index-2">
            <div className="card-header pb-0">
              <h6>Benefit History (by type)</h6>
              <p className="text-sm">
                <i className="fa fa-arrow-up text-success"></i>
                <span className="font-weight-bold">48% more</span> in 2021
              </p>
            </div>
            <div className="card-body p-3">
              <div className="chart">
                <canvas id="chart-line" className="chart-canvas" height="225"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-7 col-md-6">
          <div className="card h-100">
            <div className="card-header pb-0">
              <h6>Last benefit transactions</h6>
              <p className="text-sm">
                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                <span className="font-weight-bold">12%</span> this month
              </p>
            </div>
            <div className="card-body p-3">
              <div className="timeline timeline-one-side">
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="fa fa-mobile text-info text-gradient"></i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">$421.99, Samsung A52</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:58 PM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh3.googleusercontent.com%2FxoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ%3Ds180&f=1&nofb=1" className="avatar avatar-sm bg-gradient-dark  me-3 "/>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">Disney+, 2 Months</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">19 DEC 11:34 PM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="fa fa-plane text-info text-gradient"></i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">3 Day(s) off</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC 9:34 PM</p>
                  </div>
                </div>
                <div className="timeline-block mb-3">
                  <span className="timeline-step">
                    <i className="fa fa-laptop text-info text-gradient"></i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">HP Laptop</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">12 DEC 2:20 AM</p>
                  </div>
                </div>
                <div className="timeline-block">
                  <span className="timeline-step">
                    <i className="fa fa-plane text-info text-gradient"></i>
                  </span>
                  <div className="timeline-content">
                    <h6 className="text-dark text-sm font-weight-bold mb-0">1 Day(s) off</h6>
                    <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">11 DEC 9:34 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card h-100 p-3">
            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
           style={{backgroundImage:`url(${CFplan})`}}>
              <span className="mask bg-gradient-payflip"></span>
              <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                <h5 className="text-white font-weight-bolder mb-4 pt-2">The advantages of a cafeteria plan</h5>
                <p className="text-white">What are the benefits of such a cafeteria plan for employer and employee?</p>
                <a className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                  href="https://en.payflip.be/blogs/the-advantages-of-a-cafeteria-plan">
                  Read More
                  <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                </a>
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
                ©
                <script>
                  document.write(new Date().getFullYear())
                </script>,
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
                  <a href="https://en.payflip.be/partners" className="nav-link pe-0 text-muted"
                    target="_blank">Partners</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
  <div className="fixed-plugin">
    <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
      <i className="fa fa-bug py-2"> </i>
    </a>
    <div className="card shadow-lg ">
      <div className="card-header pb-0 pt-3 ">
        <div className="float-start">
          <h5 className="mt-3 mb-0">Soft UI Configurator</h5>
          <p>See our dashboard options.</p>
        </div>
        <div className="float-end mt-4">
          <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
            <i className="fa fa-close"></i>
          </button>
        </div>
        {/* <!-- End Toggle Button --> */}
      </div>
      <hr className="horizontal dark my-1"/>
      <div className="card-body pt-sm-3 pt-0">
        {/* <!-- Sidebar Backgrounds --> */}
        <div>
          <h6 className="mb-0">Sidebar Colors</h6>
        </div>
        <a href="javascript:void(0)" className="switch-trigger background-color">
          <div className="badge-colors my-2 text-start">
            <span className="badge filter bg-gradient">
            <div className=" row mt-4">
              <div className="col-lg-7 mb-lg-0 mb-4">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="d-flex flex-column h-100">
                          <p className="mb-1 pt-2 text-bold">Built by developers</p>
                          <h5 className="font-weight-bolder">Soft UI Dashboard</h5>
                          <p className="mb-5">From colors, cards, typography to complex elements, you will find the full
                            documentation.</p>
                          <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                            href="javascript:;">
                            Read More
                            <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                        <div className="bg-gradient-payflip border-radius-lg h-100">
                          <img src="../assets/img/shapes/waves-white.svg"
                            className="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves"/>
                          <div className="position-relative d-flex align-items-center justify-content-center h-100">
                            <img className="w-100 position-relative z-index-2 pt-4"
                              src="../assets/img/illustrations/rocket-white.png" alt="rocket"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="col-lg-5">
                <div className="card h-100 p-3">
                <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
                 style={{backgroundImage:`url(${CFplan})`}}>
                    <span className="mask bg-gradient-payflip"></span>
                    <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                      <h5 className="text-white font-weight-bolder mb-4 pt-2">Work with the rockets</h5>
                      <p className="text-white">Wealth creation is an evolutionarily recent positive-sum game. It is all
                        about who take the opportunity first.</p>
                      <a className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                        Read More
                        <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </div> </span>
          <span className="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
          <span className="badge filter bg-gradient-payflip" data-color="info" onclick="sidebarColor(this)"></span>
          <span className="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
          <span className="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
          <span className="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
      </div>
      </a>
      {/* <!-- Sidenav Type --> */}
      <div className="mt-3">
        <h6 className="mb-0">Sidenav Type</h6>
        <p className="text-sm">Choose between 2 different sidenav types.</p>
      </div>
      <div className="d-flex">
        <button className="btn bg-gradient-payflip w-100 px-3 mb-2 active" data-classname="bg-transparent"
          onclick="sidebarType(this)">Transparent</button>
        <button className="btn bg-gradient-payflip w-100 px-3 mb-2 ms-2" data-classname="bg-white"
          onclick="sidebarType(this)">White</button>
      </div>
      <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
      {/* <!-- Navbar Fixed --> */}
      <div className="mt-3">
        <h6 className="mb-0">Navbar Fixed</h6>
      </div>
      <div className="form-check form-switch ps-0">
        <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)"/>
      </div>
      <hr className="horizontal dark my-sm-4"/>
      <a className="btn bg-gradient-dark w-100" href="https://www.creative-tim.com/product/soft-ui-dashboard-pro">Free
        Download</a>
      <a className="btn btn-outline-dark w-100"
        href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard">View documentation</a>
      <div className="w-100 text-center">
        <a className="github-button" href="https://github.com/creativetimofficial/soft-ui-dashboard"
          data-icon="octicon-star" data-size="large" data-show-count="true"
          aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub">Star</a>
        <h6 className="mt-3">Thank you for sharing!</h6>
        <a href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
          className="btn btn-dark mb-0 me-2" target="_blank">
          <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard"
          className="btn btn-dark mb-0 me-2" target="_blank">
          <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
        </a>
      </div>
    </div>
  </div>
  </div>
  </div>
  </body>



        </>
        
        
        
        );
}