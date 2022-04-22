import React from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import { UserContext } from "../UserContext/UserContext";

const requestSponsorship = async (userId, sponsorId, access_token) => {
  const response = await api.post(
    "/match",
    {
      idUser: userId,
      idSponsor: sponsorId,
    },
    {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    }
  );
  console.log(response);
};

const SponsorDetails = () => {
  const location = useLocation();

  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

  const { id: sponsorId, name, description, website } = location.state;

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
      <button
        onClick={() => requestSponsorship(sponsorId, account.id, access_token)}
      >
        Tentar patrocínio
      </button>
    </div>
  );
};

export default SponsorDetails;
