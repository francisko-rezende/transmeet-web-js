import React from "react";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";

const getSponsorshipStatus = (accept) =>
  ({ [true]: "Aceito", [false]: "Recusado", [null]: "Não decidiu" }[accept]);

const Home = () => {
  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

  const [sponsorshipRequests, setSponsorshipRequests] = React.useState([]);

  React.useEffect(() => {
    const fetchSponsorshipRequests = async () => {
      const response = await api.get(`/match/users/${account.id}`, {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      });
      console.log(response);

      setSponsorshipRequests(response.data);
    };

    if (account.typeId === 1) {
      fetchSponsorshipRequests();
    }
  }, []);

  return (
    <>
      <h1>{account.name} - candidaturas</h1>
      <ul>
        {sponsorshipRequests.length !== 0 &&
          sponsorshipRequests.map((request) => (
            <li>
              <p>
                Nome: {`${request.accounts_accountsTomatch_idSponsor.name}`}
              </p>
              <p>Status: {getSponsorshipStatus(request.accept)}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
