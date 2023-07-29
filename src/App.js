import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import LoginTabs from "./Pages/LoginTabs";
import "./style.scss";
import LandLordRegister from "./Pages/LandLordRegister";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginTabs/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landlordregister" element={<LandLordRegister />} />
        

        {/* Add other routes here, if needed */}
      </Routes>
    </Router>
  );
}

export default App;
