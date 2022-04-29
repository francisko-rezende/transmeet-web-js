import React from "react";
import { useNavigate } from "react-router-dom";

const Placeholder = () => {
  const navigate = useNavigate();

  React.useEffect(() => navigate("/"));

  return <div style={{ background: "red" }}>Placeholder</div>;
};

export default Placeholder;
