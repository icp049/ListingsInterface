import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navigate } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import LoginTabs from "./Pages/LoginTabs";
import "./style.scss";
import LandLordRegister from "./Pages/LandLordRegister";
import LandLordHome from "./Pages/LandLordHome";
import Messages from "./Pages/Messages";


import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children
};

const { currentUser } = useContext(AuthContext);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginTabs/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landlordregister" element={<LandLordRegister />} />
        <Route path="/landlordhome" element={<LandLordHome />} />

        <Route
            path = "/messages" 
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />

        

        {/* Add other routes here, if needed */}
      </Routes>
    </Router>
  );
}

export default App;
