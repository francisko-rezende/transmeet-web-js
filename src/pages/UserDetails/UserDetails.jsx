import React from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";
import * as S from "./UserDetails.styles";

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

  const previousLocation = location.pathname.split("/").slice(0, -2).join("/");

  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

  const { accounts_accountsTomatch_idUser: candidateData, id: matchId } =
    location.state;

  console.log(location.state);
  const shouldDisableBtns =
    location.state.accept === true || location.state.accept === false;

  const shouldShowBtns = location.state.accept !== true;

  const { name, description, city, telephone, email, gender } = candidateData;

  return (
    <S.Bg>
      <S.Container>
        <S.Header>
          <S.Link to={previousLocation}>
            <S.LeftArrowIcon /> Voltar
          </S.Link>
          <h2 style={{ textAlign: "center" }}>Candidato</h2>
        </S.Header>
      </S.Container>
      <S.DetailsWrapper>
        <h2>{name}</h2>
        <p>
          <strong>Local</strong>: {city}
        </p>
        <p>
          <strong>Contato</strong>: {telephone}
        </p>
        <p>
          <strong>Email</strong>: {email}
        </p>
        <p>
          <strong>Gênero</strong>: {gender}
        </p>
        <p>
          <strong>Sobre</strong>: <br /> {description}
        </p>
      </S.DetailsWrapper>
      {shouldShowBtns && (
        <S.BtnsWrapper>
          <S.Button
            onClick={() => {
              const shouldRejectMatch = window.confirm(
                "Tem certeza que deseja rejeitar essa combinação?"
              );

              if (shouldRejectMatch) {
                evaluateCandidateRequest(matchId, access_token, false);
                return;
              }
              return;
            }}
            isMatchBtn={false}
            disabled={shouldDisableBtns}
          >
            Dispensar
          </S.Button>
          <S.Button
            onClick={() => {
              const shouldConfirmMatch = window.confirm(
                "Tem certeza que deseja confirmar essa combinação?"
              );

              if (shouldConfirmMatch) {
                evaluateCandidateRequest(matchId, access_token, true);
                return;
              }
              return;
            }}
            isMatchBtn={true}
            disabled={shouldDisableBtns}
          >
            Combinar
          </S.Button>
        </S.BtnsWrapper>
      )}
    </S.Bg>
  );
};

export default UserDetails;
