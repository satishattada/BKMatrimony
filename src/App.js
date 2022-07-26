import './App.css';
import { useSelector } from "react-redux";
import RoutesContainer from "./routes/routes";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/login';


function App() {
  const accessToken = useSelector(state => state?.user?.accessToken);
  if (!accessToken) {
    return <Login />
  }
  return (
    <RoutesContainer />
  );
}

export default (App);


