import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { Dashboard } from "./Components/Dashboard";
import Login from "./Components/Login";
import { Signup } from './Components/Signup';

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<Signup />}></Route>
      <Route path='dashboard' element={<Dashboard />}></Route>
      <Route path='*' element={<Navigate to="/login" />}></Route>
    </Routes>
  );
}

export default App;
