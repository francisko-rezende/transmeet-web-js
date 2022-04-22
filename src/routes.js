import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import UserRoutes from "./components/UserRoutes/UserRoutes";

import Login from "./pages/Login";
import Placeholder from "./pages/Placeholder";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="conta/*"
          element={
            <ProtectedRoute>
              <UserRoutes />
              {/* <UserRo /> */}
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
