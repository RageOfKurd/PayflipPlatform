import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import { AdminAddEmployerPage } from "./Components/Admin/AddEmployer";
import { AdminAddEmployeePage } from "./Components/Admin/AddEmployee";
import { AdminBenefits } from "./Components/Admin/Benefit";
import { AdminDash } from "./Components/Admin/Dashboard";
import { EmployerDash } from "./Components/Employer/Dashboard";
import { AdminEditEmployerPage } from "./Components/Admin/EditEmployer";
import { AdminEmployeesPage } from "./Components/Admin/Employee";
import { AdminEmployersPage } from "./Components/Admin/Employer";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { useEffect } from "react";
import { EmployerBenefitsPage } from "./Components/Employer/Benefit";
import { AuthenticationPage } from "./Components/BeingAuthenticated";
import { AdminAddBenefitPage } from "./Components/Admin/AddBenefit";
import { AdminEditBenefitPage } from "./Components/Admin/EditBenefit";
import { EmployerBudgetPage } from "./Components/Employer/Budget";
import { EmployerAddBudgetPage } from "./Components/Employer/AddBudget";
import { EmployerEditBudgetPage } from "./Components/Employer/EditBudget";
import { EmployerAddEmployeePage } from "./Components/Employer/AddEmployee";
import { EmployerEmployeesPage } from "./Components/Employer/Employee";
import { AdminEditEmployeePage } from "./Components/Admin/EditEmployee";
import { EmployeeDash } from "./Components/Employee/Dashboard";
import { EmployerEditEmployeePage } from "./Components/Employer/EditEmployee";
import { EmployeeBenefitsShoppingPage } from "./Components/Employee/Benefit";
import { EmployeeSpecificBenefitsPage } from "./Components/Employee/EmployeeBenefits";
import { UpdatePasswordPage } from "./Components/UpdatePassword";
import { UpdateProfilePage } from "./Components/UpdateProfile";
function App() {
  let api_base_url =
    process.env.NODE_ENV === "local"
      ? `${process.env.REACT_APP_API_BASE_URL_LOCALLY}`
      : `${process.env.REACT_APP_API_BASE_URL_NETLIFY}`;
  let navigate = useNavigate();
  let validateurl = api_base_url + "/auth/validate";
  let refreshurl = api_base_url + "/auth/refreshToken";

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("accessToken") !== null) {
        const refreshTokens = async () => {
          try {
            let response = await fetch(validateurl, {
              headers: { Authorization: localStorage.getItem("accessToken") },
            });
            let responseinjson = await response.json();
            if (responseinjson.message === "Authorized") {
              let newtokenresponse = await fetch(refreshurl, {
                headers: { Authorization: localStorage.getItem("accessToken") },
              });
              let newtokenresponseinjson = await newtokenresponse.json();
              localStorage.setItem(
                "accessToken",
                `Bearer ${newtokenresponseinjson.data.token.accessToken}`
              );
            } else {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("role");
            }
          } catch (err) {
            console.log(err);
          }
        };
        (async () => await refreshTokens())();
      }
    }, 14 * 60 * 1000);

    // setInterval(() => {
    //   const authentication = async () => {
    //     if (localStorage.getItem("accessToken") != null) {
    //       let response = await fetch(validateurl, { headers: { "Authorization": localStorage.getItem("accessToken") } });
    //       let responseinjson = await response.json()
    //       if (responseinjson.message != "Authorized") {
    //         signout();
    //       }
    //     }
    //   }
    //   (async () => await authentication())();
    // }, 5000);
  });

  const signout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Routes>
      if(tr)
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="admin/dashboard" element={<AdminDash />}></Route>
      <Route path="admin/benefits" element={<AdminBenefits />}></Route>
      <Route path="admin/employees" element={<AdminEmployeesPage />}></Route>
      <Route
        path="admin/employees/add"
        element={<AdminAddEmployeePage />}
      ></Route>
      <Route
        path="admin/employees/:id"
        element={<AdminEditEmployeePage />}
      ></Route>
      <Route path="admin/companies" element={<AdminEmployersPage />}></Route>
      <Route
        path="admin/companies/add"
        element={<AdminAddEmployerPage />}
      ></Route>
      <Route
        path="admin/companies/:id"
        element={<AdminEditEmployerPage />}
      ></Route>
      <Route path="employer/dashboard" element={<EmployerDash />}></Route>
      <Route
        path="employer/benefits"
        element={<EmployerBenefitsPage />}
      ></Route>
      <Route
        path="employer/employees"
        element={<EmployerEmployeesPage />}
      ></Route>
      <Route
        path="employer/employees/add"
        element={<EmployerAddEmployeePage />}
      ></Route>
      <Route
        path="employer/employees/:id"
        element={<EmployerEditEmployeePage />}
      ></Route>
      <Route path="employee/dashboard" element={<EmployeeDash />}></Route>
      <Route
        path="employee/benefits"
        element={<EmployeeBenefitsShoppingPage />}
      ></Route>
      <Route
        path="employee/mybenefits"
        element={<EmployeeSpecificBenefitsPage />}
      ></Route>
      <Route path="authentication" element={<AuthenticationPage />}></Route>
      <Route path="*" element={<Navigate to="/login" />}></Route>
      <Route
        path="admin/benefits/add"
        element={<AdminAddBenefitPage />}
      ></Route>
      <Route
        path="admin/benefits/:id"
        element={<AdminEditBenefitPage />}
      ></Route>
      <Route path="employer/budgets" element={<EmployerBudgetPage />}></Route>
      <Route
        path="employer/budgets/add"
        element={<EmployerAddBudgetPage />}
      ></Route>
      <Route
        path="employer/budgets/:id"
        element={<EmployerEditBudgetPage />}
      ></Route>
      <Route
        path="/admin/updateProfile"
        element={<UpdateProfilePage />}
      ></Route>
      <Route
        path="/admin/updatePassword"
        element={<UpdatePasswordPage />}
      ></Route>
    </Routes>
  );
}

export default App;
