import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./Pages/Start";
import UserLogins from "./Pages/UserLogins";
import UserSignups from "./Pages/UserSignups";
import CaptainLogins from "./Pages/CaptainLogins";
import CaptainSignups from "./Pages/CaptainSignups";
import Home from './Pages/Home';
import UserProtectedWrapper from "./Pages/UserProtectedWrapper";
import { UserLogout } from "./Pages/UserLogout";
import CaptainContext from "./Context/CaptainContext";
import CaptainHome from "./Pages/CaptainHome";
import CaptainProtectedWrapper from "./Pages/CaptainProtectedWrapper";
import CaptainLogout from "./Pages/CaptainLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogins />} />
        <Route path="/signup" element={<UserSignups />} />
        <Route path="/captain-login" element={<CaptainLogins />} />
        <Route path="/captain-signup" element={<CaptainSignups />} />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path="/user/logout" element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
         
          <Route path="/captain-home" element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        } />

          <Route path="/captain-logout" element={
          <CaptainProtectedWrapper>
            <CaptainLogout />
          </CaptainProtectedWrapper>
            } />
        
      </Routes>
    </div>
  );
};

export default App;
