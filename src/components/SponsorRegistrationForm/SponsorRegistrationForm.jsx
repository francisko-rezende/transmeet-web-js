import React from "react";
import api from "../../services/api";
import { getStateId } from "../../utils/getStateId";
import { states } from "../../utils/states";
import Button from "../Button/Button";
import Input from "../Input/Input";
import SelectInput from "../SelectInput";
import * as S from "./SponsorRegistrationForm.styles";

const SponsorRegistrationForm = () => {
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

  const [state, setState] = React.useState("Selecionar");

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
    <>
      <Input
        label="Nome"
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

      <Input
        label="Email"
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

      <Input
        label="Senha"
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

      <Input
        label="CNPJ"
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

      <S.TextArea
        placeholder="Fala pra gente um pouco sobre os seus interesses..."
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

      <Input
        label="Telefone"
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

      <Input
        label="Cidade"
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

      <Input
        label="Endereço"
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

      <Input
        label="Site"
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

      <SelectInput
        name="Estado"
        value={state}
        onChange={({ target }) => setState(target.value)}
        options={states}
      />

      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          registerSponsor();
        }}
      >
        Criar conta
      </Button>
    </>
  );
};

export default SponsorRegistrationForm;
