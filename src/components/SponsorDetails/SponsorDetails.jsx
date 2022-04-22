import React from "react";
import { useLocation } from "react-router-dom";

const SponsorDetails = () => {
  const location = useLocation();

  console.log(location.state);
  const { name, description, website } = location.state;

  return (
    <div>
      <header>
        <a style={{ color: "white", background: "black" }} href="#">
          {" "}
          <span
            style={{ transform: "rotate(180deg)", display: "inline-block" }}
          ></span>{" "}
          Voltar
        </a>
        <h2>{name}</h2>
      </header>
      <main>
        <h2>Sobre a empresa</h2>
        <p>{description}</p>
        <p>Site: {website}</p>
      </main>
      <button>Tentar patrocínio</button>
    </div>
  );
};

export default SponsorDetails;
