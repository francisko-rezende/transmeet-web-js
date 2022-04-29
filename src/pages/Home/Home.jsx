import React from "react";
import Card from "../../components/Card";
import CardContainer from "../../components/CardContainer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import SearchForm from "../../components/SearchForm";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";
import * as S from "./Home.styles";
import { ReactComponent as RightArrowIcon } from "../../assets/arrow-right.svg";

const Home = () => {
  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

  const [isLoading, setIsLoading] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [sponsors, setSponsors] = React.useState([]);

  React.useEffect(() => {
    const fetchSponsors = async () => {
      setIsLoading(true);
      const response = await api.get("/sponsors", {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      });
      setSponsors(response.data);
      setIsLoading(false);
    };

    fetchSponsors();
  }, [access_token]);

  const searchForCompany = async (searchTerm) => {
    const response = await api.get(`/sponsors/${searchTerm}`, {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    });
    setSearchResult(response.data);
  };

  return (
    <S.Bg>
      <Header name={account.name} />
      <SearchForm
        onChangeInput={(e) => setQuery(e.target.value)}
        valueInput={query}
        onClickSearchBtn={(e) => {
          e.preventDefault();
          searchForCompany(query);
        }}
      />
      {searchResult.length !== 0 && (
        <>
          <S.Container>
            <S.Subtitle>Resultado da busca</S.Subtitle>
          </S.Container>
          <CardContainer>
            {searchResult.map((result) => (
              <li key={result.id}>
                <Card
                  name={result.name}
                  to={`sponsors/${result.id}`}
                  state={result}
                />
              </li>
            ))}
          </CardContainer>
        </>
      )}

      <S.Container>
        <S.Subtitle>Todas as empresas</S.Subtitle>
      </S.Container>

      <CardContainer>
        {isLoading && <Loading />}
        {sponsors.length !== 0 &&
          sponsors.map((sponsor) => (
            <li key={sponsor.id}>
              <Card
                to={`sponsors/${sponsor.id}`}
                state={sponsor}
                name={sponsor.name}
              />
            </li>
          ))}
      </CardContainer>

      <S.Container>
        <S.Link to="candidaturas">
          Ver candidaturas <RightArrowIcon />
        </S.Link>
      </S.Container>
    </S.Bg>
  );
};

export default Home;
