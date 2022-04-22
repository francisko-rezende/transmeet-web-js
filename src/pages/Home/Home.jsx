import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";

const Home = () => {
  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

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

  return (
    <>
      <h1>Home</h1>
      <ul>
        {sponsors.length !== 0 &&
          sponsors.map((sponsor) => (
            <li>
              <Link
                to={`sponsors/${sponsor.id}`}
                state={sponsor}
                key={sponsor.id}
              >
                {sponsor.name}{" "}
              </Link>
            </li>
          ))}
      </ul>

      <h2>
        <Link to="candidaturas">Ver candidaturas</Link>
      </h2>
    </>
  );
};

export default Home;
