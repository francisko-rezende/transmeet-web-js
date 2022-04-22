import React from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";

const evaluateCandidateRequest = async (matchId, access_token, isAccepted) => {
  const response = await api.patch(
    `/match/${matchId}`,
    { response: isAccepted },
    {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    }
  );
  console.log(response);
};

const UserDetails = () => {
  const location = useLocation();

  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

  const { accounts_accountsTomatch_idUser: candidateData, id: matchId } =
    location.state;

  // console.log(candidateData, matchId);

  const { name, description, city, telephone, email, gender } = candidateData;

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
        <h2>{candidateData.name}</h2>
      </header>
      <main>
        <h2>Sobre {name}</h2>
        <p>{description}</p>
        <p>Local: {city}</p>
        <p>Contato: {telephone}</p>
        <p>Email: {email}</p>
        <p>Gênero: {gender}</p>
        <p>
          Sobre: <br /> {description}
        </p>
      </main>
      <button
        onClick={() => evaluateCandidateRequest(matchId, access_token, false)}
      >
        Dispensar
      </button>
      <button
        onClick={() => evaluateCandidateRequest(matchId, access_token, true)}
      >
        Combinar
      </button>
    </div>
  );
};

export default UserDetails;
