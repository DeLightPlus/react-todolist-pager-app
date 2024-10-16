
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./Components/UserLog/Login.js";
import Register from "./Components/UserLog/Register.js";
import Home from "./Pages/Home/Home.js";

import ProtectedRoutes from './Services/ProtectedRoutes.js';

export default function App() 
{
   
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}  />
          
          {/* ProtectedRoutes */}
          <Route path="/" element={<ProtectedRoutes />} > 
            <Route path="/" element={<Home />} />             
          </Route>
          
        </Routes>   

      </BrowserRouter>
    </div>
  );
}
