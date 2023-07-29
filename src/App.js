import React from "react";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import LoginTabs from "./Pages/LoginTabs";
import "./style.scss";
import LandLordRegister from "./Pages/LandLordRegister";
import LandLordHome from "./Pages/LandLordHome";
import LandLordLogin from "./Pages/LandLordLogin";
import Messages from "./Pages/Messages";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext); // Move the useContext inside the component
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginTabs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landlordregister" element={<LandLordRegister />} />
        <Route path="/landlordhome" element={<LandLordHome />} />
        <Route path="/landlordlogin" element={<LandLordLogin />} />

        <Route
          path="/messages"
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
