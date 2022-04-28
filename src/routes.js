import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import SponsorRoutes from "./components/SponsorRoutes";
import UserRoutes from "./components/UserRoutes/UserRoutes";

import Login from "./pages/Login";
import Placeholder from "./pages/Placeholder";
import Registration from "./pages/Registration";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registration />} />
        <Route
          path="usuario/*"
          element={
            <ProtectedRoute>
              <UserRoutes />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="sponsor/*"
          element={
            <ProtectedRoute>
              <SponsorRoutes />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/no-login" element={<Placeholder />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
