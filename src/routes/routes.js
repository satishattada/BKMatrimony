
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from "./../pages/layout/layout";
import Home from "./../pages/layout/home/home";
import NoPage from "./../pages/noPage/noPage";
import Register from "./../pages/register/register";
import Login from "./../pages/login/login";
import Profile from '../pages/layout/profile/profile';
import Matches from '../pages/layout/matches/matches';
import Food from '../pages/layout/food/food';
import Increment from '../pages/layout/increase/increase';
import UserDetails from '../pages/layout/user-details/user-details';
import InterestReceived from '../pages/layout/interest-received/interest-received';
import InterestSent from '../pages/layout/interest-sent/interest-sent';
import Shortlisted from '../pages/layout/shortlisted/shortlisted';
import Connection from '../pages/layout/connections/connection';
import Blocked from '../pages/layout/blocked/blocked';
import Buy from '../pages/layout/buy/buy';
import ForgotPassword from "../pages/forgot-password/forgot-password";

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
          <Route path="/user-details/:id/" element={<UserDetails />} />
          {/* <Route path="/education-details" element={<EducationDetails/>} /> 
          <Route path="/media-details" element={<MediaDetails/>} />
          <Route path="/family-details" element={<Family/>} />
          <Route path="/partner-details" element={<PartnerDetails/>} />
          <Route path="/verify" element={<Verify/>} />  */}
          <Route path="/interest-received" element={<InterestReceived />} />
          <Route path="/interest-sent" element={<InterestSent />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/Blocked" element={<Blocked />} />
          <Route path="/shortlisted" element={<Shortlisted />} />
          <Route path="/buy" element={<Buy />} />


        </Route>
        <Route path="*" element={<NoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
    </BrowserRouter>
  );
}

export default RoutesContainer;

