import React from "react";
import api from "../../services/api";
import { getStateId } from "../../utils/getStateId";
import { states } from "../../utils/states";
import Button from "../Button/Button";
import Input from "../Input/Input";
import SelectInput from "../SelectInput";
import * as S from "./TransRegistrationForm.styles";

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

  const [state, setState] = React.useState("Selecionar");

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
    <>
      <Input
        label="Nome"
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
      <Input
        label="Email"
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

      <Input
        label="Telefone"
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

      <Input
        label="CPF"
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

      <Input
        label="Data de Nascimento"
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

      <Input
        label="Gênero"
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

      <SelectInput
        name="Estado"
        value={state}
        onChange={({ target }) => setState(target.value)}
        options={states}
      />

      <Input
        label="Cidade"
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
      <Input
        label="Endereço"
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

      <S.TextArea
        placeholder="Fala pra gente um pouco sobre os seus interesses..."
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

      <Input
        label="Senha"
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
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          registerUser();
        }}
      >
        Criar conta
      </Button>
    </>
  );
};

export default TransRegistrationForm;
