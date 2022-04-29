import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Button from "../Button/Button";
import Loading from "../Loading";
import { UserContext } from "../UserContext/UserContext";
import * as S from "./SponsorDetails.styles";

const SponsorDetails = () => {
  const requestSponsorship = async (userId, sponsorId, access_token) => {
    try {
      setIsLoading(true);
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

      if (response.status === 201) {
        setIsRequestSuccessful(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRequestSuccessful, setIsRequestSuccessful] = React.useState(false);

  const location = useLocation();

  const previousLocation = location.pathname.split("/").slice(0, -2).join("/");

  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

  console.log(location.state);

  const { id: sponsorId, name, description, site } = location.state;

  return (
    <S.Bg>
      <S.Container>
        <S.Header>
          <S.Link to={previousLocation}>
            <S.LeftArrowIcon /> Voltar
          </S.Link>
          <h2>{name}</h2>
        </S.Header>
      </S.Container>
      <S.DetailsWrapper>
        <h2>Sobre a empresa</h2>
        <p>{description}</p>
        <p>
          <span
            style={{
              fontWeight: "700",
              display: "inline-block",
              marginTop: "1rem",
            }}
          >
            Site:
          </span>{" "}
          {site}
        </p>
      </S.DetailsWrapper>
      <S.ButtonWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <Button
            onClick={() =>
              requestSponsorship(account.id, sponsorId, access_token)
            }
            disabled={isRequestSuccessful}
          >
            Tentar patrocínio
          </Button>
        )}
        {isRequestSuccessful && (
          <p style={{ color: "#28A745", marginTop: "20px" }}>
            Requisição submetida!
          </p>
        )}
      </S.ButtonWrapper>
    </S.Bg>
  );
};

export default SponsorDetails;
