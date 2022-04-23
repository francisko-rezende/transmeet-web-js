import React from "react";
import api from "../../services/api";
import { getStateId } from "../../utils/getStateId";
import { states } from "../../utils/states";

const TransRegistrationForm = () => {
  const [userRegistrationData, setUserRegistrationData] = React.useState({
    name: "",
    email: "",
    password: "",
    regNumber: "",
    birthDate: "",
    address: "",
    gender: "",
    description: "",
    telephone: "",
    city: "",
    stateId: "",
    typeId: 1,
  });

  const [state, setState] = React.useState("");

  React.useEffect(() => {
    setUserRegistrationData((data) => ({
      ...data,
      stateId: getStateId(state),
    }));
  }, [state]);

  const registerUser = async () => {
    const response = await api.post("/users", userRegistrationData);

    console.log(response);
  };

  return (
    <div>
      <h1>Registro de usuário/Pessoa Trans</h1>
      <form>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          value={userRegistrationData.name}
          onChange={({ target }) =>
            setUserRegistrationData((loginData) => ({
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
          value={userRegistrationData.email}
          onChange={({ target }) =>
            setUserRegistrationData((loginData) => ({
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
          value={userRegistrationData.password}
          onChange={({ target }) =>
            setUserRegistrationData((loginData) => ({
              ...loginData,
              password: target.value,
            }))
          }
          required
        />

        <label htmlFor="regNumber">CPF</label>
        <input
          type="tel"
          name="regNumber"
          id="regNumber"
          value={userRegistrationData.regNumber}
          onChange={({ target }) =>
            setUserRegistrationData((loginData) => ({
              ...loginData,
              regNumber: target.value,
            }))
          }
          required
        />

        <label htmlFor="birthDate">Data de Nascimento</label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          value={userRegistrationData.birthDate}
          onChange={({ target }) =>
            setUserRegistrationData((loginData) => ({
              ...loginData,
              birthDate: target.value,
            }))
          }
          required
        />

        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          name="address"
          id="address"
          value={userRegistrationData.address}
          onChange={({ target }) =>
            setUserRegistrationData((loginData) => ({
              ...loginData,
              address: target.value,
            }))
          }
          required
        />

        <label htmlFor="gender">Gênero</label>
        <input
          type="text"
          name="gender"
          id="gender"
          value={userRegistrationData.gender}
          onChange={({ target }) =>
            setUserRegistrationData((loginData) => ({
              ...loginData,
              gender: target.value,
            }))
          }
          required
        />

        <label htmlFor="description">
          Fale para nós um pouco sobre seus intereses...
        </label>
        <textarea
          id="description"
          rows={10}
          value={userRegistrationData.description}
          onChange={({ target }) =>
            setUserRegistrationData((loginData) => ({
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
          value={userRegistrationData.telephone}
          onChange={({ target }) =>
            setUserRegistrationData((loginData) => ({
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
          value={userRegistrationData.city}
          onChange={({ target }) =>
            setUserRegistrationData((loginData) => ({
              ...loginData,
              city: target.value,
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
            registerUser();
          }}
        >
          Criar conta
        </button>
      </form>
      <button onClick={() => console.log(userRegistrationData)}>
        Impreime
      </button>
    </div>
  );
};

export default TransRegistrationForm;
