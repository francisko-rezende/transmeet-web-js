import React from "react";
import LogoutButton from "../LogoutButton";
import * as S from "./Header.styles";

const Header = ({ name }) => {
  return (
    <S.Bg>
      <S.Container>
        <S.Header>
          <S.NameWrapper>
            <S.WelcomeText>Boas vindas</S.WelcomeText>
            <S.Name>{name}!</S.Name>
          </S.NameWrapper>
          <LogoutButton />
        </S.Header>
      </S.Container>
    </S.Bg>
  );
};

export default Header;
