import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import SponsorRoutes from "./components/SponsorRoutes";
import UserRoutes from "./components/UserRoutes/UserRoutes";

import Login from "./pages/Login";
import Placeholder from "./pages/Placeholder";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
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
        {/* <Route path="/:name" element={<PokemonDetails />} />
        <Route path="/favoritos" element={<FavoritePokemon />} />
        <Route path="/favoritos/:name" element={<PokemonDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default Navigation;
