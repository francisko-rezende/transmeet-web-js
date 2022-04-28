import React from "react";
import { Link } from "react-router-dom";
import WhiteTransmeetLogo from "../../assets/logo-white.webp";
import SponsorRegistrationForm from "../../components/SponsorRegistrationForm/SponsorRegistrationForm";
import TransRegistrationForm from "../../components/TransRegistrationForm";
import * as S from "./Registration.styles";

const Registration = () => {
  return (
    <S.MainContainer>
      <div>
        <S.LoginWrapper>
          <S.Title>Crie sua conta</S.Title>
          <S.Subtitle>
            Selecione quem está se registrando e preencha os dados básicos
            solicitados ou <S.Link to="/">acesse sua conta</S.Link>
          </S.Subtitle>
          <S.Form>
            {/* <TransRegistrationForm /> */}
            <SponsorRegistrationForm />
          </S.Form>
        </S.LoginWrapper>
      </div>
      <S.GradientWrapper>
        <S.GradientSentence>
          Somos a sua ponte para a{" "}
          <span style={{ fontWeight: "bold" }}>educação</span>
        </S.GradientSentence>
        <S.WhiteLogoWrapper>
          <img
            src={WhiteTransmeetLogo}
            alt="Transmeet"
            width={201}
            height={47}
          />
        </S.WhiteLogoWrapper>
      </S.GradientWrapper>
    </S.MainContainer>
  );
};

export default Registration;
