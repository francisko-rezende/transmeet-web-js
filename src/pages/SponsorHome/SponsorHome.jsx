import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";

const getSponsorshipStatus = (accept) =>
  ({ [true]: "Aceito", [false]: "Recusado", [null]: "Não decidiu" }[accept]);

const SponsorHome = () => {
  const {
    userData: { access_token, account },
  } = React.useContext(UserContext);

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await api.get(`/match/sponsors/${account.id}`, {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      });
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>Home - Sponsor</h1>
      <ul>
        {users.length !== 0 &&
          users.map((user) => (
            <li key={user.id}>
              <p>Nome: {`${user.accounts_accountsTomatch_idUser.name}`}</p>
              <p>Status: {getSponsorshipStatus(user.accept)}</p>
              <p>
                <Link to={`candidatos/${user.id}`} state={user}>
                  booora
                </Link>
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SponsorHome;
