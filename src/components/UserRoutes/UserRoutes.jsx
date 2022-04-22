import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";

const UserRoutes = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sponsors/:name" element={<CompanyDetailsPage />} /> */}
        {/* <Route path="/requisições" element={<UserStats />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </section>
  );
};

export default UserRoutes;
