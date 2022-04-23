import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";

const Home = () => {
  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

  const [query, setQuery] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [sponsors, setSponsors] = React.useState([]);

  React.useEffect(() => {
    const fetchSponsors = async () => {
      const response = await api.get("/sponsors", {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      });
      setSponsors(response.data);
    };

    if (account.typeId === 1) {
      fetchSponsors();
    }
  }, []);

  const searchForCompany = async (searchTerm) => {
    const response = await api.get(`/sponsors/${searchTerm}`, {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    });
    console.log(response);
    setSearchResult(response.data);
  };

  return (
    <>
      <h1>Home</h1>
      <form>
        <label htmlFor="search">Buscar Empresa</label>
        <input
          type="text"
          name="search"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            searchForCompany(query);
          }}
        >
          Buscar
        </button>
      </form>
      <div>
        <h2>Resultado da busca</h2>
        <ul>
          {searchResult.length !== 0 &&
            searchResult.map((result) => (
              <li key={result.id}>
                <Link to={`sponsors/${result.id}`} state={result}>
                  {result.name}{" "}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h2>Todas as empresas</h2>
        <ul>
          {sponsors.length !== 0 &&
            sponsors.map((sponsor) => (
              <li key={sponsor.id}>
                <Link to={`sponsors/${sponsor.id}`} state={sponsor}>
                  {sponsor.name}{" "}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <h2>
        <Link to="candidaturas">Ver candidaturas</Link>
      </h2>
    </>
  );
};

export default Home;
