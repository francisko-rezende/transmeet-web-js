import React from "react";

import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const ProtectedRoute = ({ children }) => {
  const {
    userData: { access_token },
  } = React.useContext(UserContext);

  return access_token ? children : <Navigate to="/no-login" />;
};

export default ProtectedRoute;
