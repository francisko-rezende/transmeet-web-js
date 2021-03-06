import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import SponsorshipRequests from "../../pages/SponsorshipRequests/SponsorshipRequests";
import SponsorDetails from "../SponsorDetails";

const UserRoutes = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsors/:id" element={<SponsorDetails />} />
        <Route path="/candidaturas" element={<SponsorshipRequests />} />
        {/* <Route path="/requisições" element={<UserStats />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </section>
  );
};

export default UserRoutes;
