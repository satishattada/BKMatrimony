import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./../pages/layout/layout";
import Home from "./../pages/layout/home/home";
import NoPage from "./../pages/noPage/noPage";
import Register from "./../pages/register/register";
import Login from "./../pages/login/login";
import Profile from '../pages/layout/profile/profile';
import Matches from '../pages/layout/matches/matches';
import Food from '../pages/layout/food/food';
import Increment from '../pages/layout/increase/increase';
import BaicDetails from '../pages/layout/basic-details/basic-details';
import EducationDetails from '../pages/layout/education-details/education-details';
import MediaDetails from '../pages/layout/media-detais/media-details';
import PartnerDetails from '../pages/layout/partner-preferences/partner-details';
import Verify from '../pages/layout/verify/verify';
import Family from '../pages/layout/family-details/family-details';

function RoutesContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/food" element={<Food />} />
          <Route path="/increase" element={<Increment />} />
          <Route path="/basic-details" element={<BaicDetails/>} />
          <Route path="/education-details" element={<EducationDetails/>} />
          <Route path="/media-details" element={<MediaDetails/>} />
          <Route path="/family-details" element={<Family/>} />
          <Route path="/partner-details" element={<PartnerDetails/>} />
          <Route path="/verify" element={<Verify/>} />


          
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesContainer;

