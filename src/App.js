import './App.css';
import { useSelector } from "react-redux";
import RoutesContainer from "./routes/routes";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/login';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Register from './pages/register/register';


function App() {
  const accessToken = useSelector(state => state?.user?.accessToken);
  if (!accessToken) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    // <header>
    //   learn react
    // </header>
    <RoutesContainer />
  );
}

export default (App);


