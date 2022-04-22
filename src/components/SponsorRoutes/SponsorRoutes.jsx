import React from "react";
import { Route, Routes } from "react-router-dom";
import SponsorHome from "../../pages/SponsorHome";
import UserDetails from "../../pages/UserDetails";

const SponsorRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SponsorHome />} />
        <Route path="/usuario/:id" element={<UserDetails />} />
        {/* <Route path="/candidaturas" element={<SponsorshipRequests />} /> */}
        {/* <Route path="/requisições" element={<UserStats />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default SponsorRoutes;
