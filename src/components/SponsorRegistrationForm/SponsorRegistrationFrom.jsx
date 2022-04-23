import React from "react";
import api from "../../services/api";
import { getStateId } from "../../utils/getStateId";
import { states } from "../../utils/states";

const SponsorRegistrationFrom = () => {
  const [sponsorRegistrationData, setSponsorRegistrationData] = React.useState({
    name: "",
    email: "",
    password: "",
    regNumber: "",
    address: "",
    description: "",
    telephone: "",
    city: "",
    site: "",
    stateId: 24,
    typeId: 2,
  });

  const [state, setState] = React.useState("");

  React.useEffect(() => {
    setSponsorRegistrationData((data) => ({
      ...data,
      stateId: getStateId(state),
    }));
  }, [state]);

  const registerSponsor = async () => {
    const response = await api.post("/sponsors", sponsorRegistrationData);

    console.log(response);
  };

  return (
    <div>
      <h1>Registro de Sponsor</h1>
      <form>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          value={sponsorRegistrationData.name}
          onChange={({ target }) =>
            setSponsorRegistrationData((loginData) => ({
              ...loginData,
              name: target.value,
            }))
          }
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={sponsorRegistrationData.email}
          onChange={({ target }) =>
            setSponsorRegistrationData((loginData) => ({
              ...loginData,
              email: target.value,
            }))
          }
          required
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          value={sponsorRegistrationData.password}
          onChange={({ target }) =>
            setSponsorRegistrationData((loginData) => ({
              ...loginData,
              password: target.value,
            }))
          }
          required
        />

        <label htmlFor="regNumber">CNPJ</label>
        <input
          type="tel"
          name="regNumber"
          id="regNumber"
          value={sponsorRegistrationData.regNumber}
          onChange={({ target }) =>
            setSponsorRegistrationData((loginData) => ({
              ...loginData,
              regNumber: target.value,
            }))
          }
          required
        />

        <label htmlFor="description">
          Fale para nós um pouco sobre você ou sua empresa...
        </label>
        <textarea
          id="description"
          rows={10}
          value={sponsorRegistrationData.description}
          onChange={({ target }) =>
            setSponsorRegistrationData((loginData) => ({
              ...loginData,
              description: target.value,
            }))
          }
        />

        <label htmlFor="telephone">Telefone</label>
        <input
          type="tel"
          name="telephone"
          id="telephone"
          value={sponsorRegistrationData.telephone}
          onChange={({ target }) =>
            setSponsorRegistrationData((loginData) => ({
              ...loginData,
              telephone: target.value,
            }))
          }
          required
        />

        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          name="city"
          id="city"
          value={sponsorRegistrationData.city}
          onChange={({ target }) =>
            setSponsorRegistrationData((loginData) => ({
              ...loginData,
              city: target.value,
            }))
          }
          required
        />

        <label htmlFor="city">Endereço</label>
        <input
          type="text"
          name="address"
          id="address"
          value={sponsorRegistrationData.address}
          onChange={({ target }) =>
            setSponsorRegistrationData((loginData) => ({
              ...loginData,
              address: target.value,
            }))
          }
          required
        />

        <label htmlFor="site">Site</label>
        <input
          type="text"
          name="site"
          id="site"
          value={sponsorRegistrationData.site}
          onChange={({ target }) =>
            setSponsorRegistrationData((loginData) => ({
              ...loginData,
              site: target.value,
            }))
          }
          required
        />

        <label htmlFor="state">Estado</label>
        <select
          type="select"
          name="state"
          id="city"
          value={state}
          onChange={({ target }) => setState(target.value)}
          required
        >
          <option disabled>Selecionar</option>
          {states.map((state) => (
            <option value={state} key={state}>
              {state}
            </option>
          ))}
        </select>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            registerSponsor();
          }}
        >
          Criar conta
        </button>
      </form>
    </div>
  );
};

export default SponsorRegistrationFrom;
