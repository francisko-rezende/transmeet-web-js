import React from "react";
import { Route, Routes } from "react-router-dom";
import SponsorHome from "../../pages/SponsorHome";

const SponsorRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SponsorHome />} />
        {/* <Route path="/sponsors/:id" element={<SponsorDetails />} /> */}
        {/* <Route path="/candidaturas" element={<SponsorshipRequests />} /> */}
        {/* <Route path="/requisições" element={<UserStats />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default SponsorRoutes;
