import React from "react";
import { useLocation } from "react-router-dom";
import CardContainer from "../../components/CardContainer";
import Loading from "../../components/Loading";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";
import * as S from "./SponsorshipRequests.styles";

// const getSponsorshipStatus = (accept) =>
//   ({ [true]: "Aceito", [false]: "Recusado", [null]: "Não decidiu" }[accept]);

const getMatchStatus = (accept) =>
  ({ [true]: "match", [false]: "no match", [null]: "underway" }[accept]);

const Home = () => {
  const location = useLocation();

  const previousLocation = location.pathname.split("/").slice(0, -1).join("/");

  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [sponsorshipRequests, setSponsorshipRequests] = React.useState([]);

  React.useEffect(() => {
    const fetchSponsorshipRequests = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/match/users/${account.id}`, {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        });

        if (response.status === 200) {
          setSponsorshipRequests(response.data);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (account.typeId === 1) {
      fetchSponsorshipRequests();
    }
  }, []);

  return (
    <S.Bg>
      <S.Container>
        <S.Header>
          <S.Link to={previousLocation}>
            <S.LeftArrowIcon /> Voltar
          </S.Link>
          <S.Title>{account.name} - candidaturas</S.Title>
        </S.Header>
      </S.Container>
      <CardContainer>
        {isLoading && <Loading />}
        {sponsorshipRequests.length !== 0 &&
          sponsorshipRequests.map((request) => (
            <li id={`${request.accounts_accountsTomatch_idSponsor.name}`}>
              <S.SponsorshipCard
                to={"#"}
                // as="div"
                name={`${request.accounts_accountsTomatch_idSponsor.name}`}
                // id={`${request.accounts_accountsTomatch_idSponsor.name}`}
                matchStatus={getMatchStatus(request.accept)}
              />
            </li>
          ))}
      </CardContainer>
    </S.Bg>
  );
};

export default Home;
