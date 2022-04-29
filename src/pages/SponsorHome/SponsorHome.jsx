import React from "react";
import * as S from "./SponsorHome.styles";
import Card from "../../components/Card";
import CardContainer from "../../components/CardContainer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";

const getSponsorshipStatus = (accept) =>
  ({ [true]: "Aceito", [false]: "Recusado", [null]: "Não decidiu" }[accept]);

const getMatchStatus = (accept) =>
  ({ [true]: "match", [false]: "no match", [null]: "underway" }[accept]);

const SponsorHome = () => {
  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await api.get(`/match/sponsors/${account.id}`, {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        });
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [access_token, account.id]);

  return (
    <S.Bg>
      <S.HeaderWrapper>
        <Header name={account.name} />
      </S.HeaderWrapper>
      <CardContainer>
        {isLoading && <Loading />}
        {users.length !== 0 &&
          users.map((user) => (
            <li key={user.id}>
              <Card
                to={`candidatos/${user.id}`}
                state={user}
                name={`${user.accounts_accountsTomatch_idUser.name}`}
                matchStatus={getMatchStatus(user.accept)}
              />
            </li>
          ))}
      </CardContainer>
    </S.Bg>
  );
};

export default SponsorHome;
