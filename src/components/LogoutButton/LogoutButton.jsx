import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoutIcon } from "../../assets/log-out.svg";
import { UserContext } from "../UserContext/UserContext";
import * as S from "./LogoutButton.styles";

const LogoutButton = () => {
  const navigate = useNavigate();

  const { setUserData } = React.useContext(UserContext);

  return (
    <S.Button
      onClick={() => {
        navigate("/");
        setUserData({
          token_access: "",
          account: {},
        });
      }}
    >
      <LogoutIcon />
      <S.HiddenName>Sair</S.HiddenName>
    </S.Button>
  );
};

export default LogoutButton;
