import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./../pages/layout/layout";
import Home from "./../pages/layout/home/home";
import Blogs from "./../pages/layout/blogs/blogs";
import NoPage from "./../pages/noPage/noPage";
import Register from "./../pages/register/register";
import Login from "./../pages/login/login";

function RoutesContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesContainer;

