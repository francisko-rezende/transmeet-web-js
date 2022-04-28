import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";
import * as S from "./Login.styles";
import { ReactComponent as LockIcon } from "../../assets/lock.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import TransmeetLogo from "../../assets/logo-login.webp";
import WhiteTransmeetLogo from "../../assets/logo-white.webp";

const Login = () => {
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });

  const { userData, setUserData } = React.useContext(UserContext);
  const navigate = useNavigate();

  const logIn = async (loginData) => {
    const {
      data: { access_token, account },
    } = await api.post("/login", loginData);

    setUserData({ access_token: access_token, account: account });

    if (userData.access_token && userData.account.typeId === 1) {
      navigate("/usuario");
    }

    if (userData.access_token && userData.account.typeId === 2)
      navigate("/sponsor");
  };

  return (
    <S.MainContainer>
      <div>
        <S.LoginWrapper>
          <S.LogoWrapper>
            <img src={TransmeetLogo} alt="Transmeet" width={155} height={115} />
          </S.LogoWrapper>
          <S.Title>Acesse sua conta</S.Title>
          <S.Subtitle>
            Faça seu login <S.Link to="/registro">ou crie sua conta</S.Link> e
            aproveite as oportunidades que estão a sua espera!
          </S.Subtitle>
          <S.Form>
            <S.InputsWrapper>
              <Input
                icon={<MailIcon />}
                label="Email"
                type="email"
                name="email"
                id="email"
                value={loginData.email}
                onChange={({ target }) =>
                  setLoginData((loginData) => ({
                    ...loginData,
                    email: target.value,
                  }))
                }
                required
              />
              <Input
                icon={<LockIcon />}
                label="Senha"
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                onChange={({ target }) =>
                  setLoginData({ ...loginData, password: target.value })
                }
                onBlur={({ target }) =>
                  setLoginData({ ...loginData, password: target.value })
                }
                required
              />
            </S.InputsWrapper>
            {/* <S.Link>Esqueci minha senha</S.Link> */}
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                logIn(loginData);
              }}
            >
              Entrar
            </Button>
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

export default Login;
