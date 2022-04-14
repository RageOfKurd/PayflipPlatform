import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { AdminAddEmployerPage } from "./Components/Admin/AddEmployer";
import { AdminBenefits } from "./Components/Admin/Benefit";
import { AdminDash } from "./Components/Admin/Dashboard";
import { AdminEditEmployerPage } from "./Components/Admin/EditEmployer";
import { AdminEmployeesPage } from "./Components/Admin/Employee";
import { AdminEmployersPage } from "./Components/Admin/Employer";
import Login from "./Components/Login";
import { Signup } from './Components/Signup';

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<Signup />}></Route>
      <Route path='admin/dashboard' element={<AdminDash />}></Route>
      <Route path='admin/benefits' element={<AdminBenefits />}></Route>
      <Route path='admin/employees' element={<AdminEmployeesPage />}></Route>
      <Route path='admin/companies' element={<AdminEmployersPage />}></Route>
      <Route path='admin/companies/add' element={<AdminAddEmployerPage />}></Route>
      <Route path='admin/companies/:id' element={<AdminEditEmployerPage />}></Route>
      <Route path='*' element={<Navigate to="/login" />}></Route>
    </Routes>
  );
}

export default App;
