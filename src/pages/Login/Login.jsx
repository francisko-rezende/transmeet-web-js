import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";

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
    <>
      <h1>Página de login</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={loginData.email}
          onChange={({ target }) =>
            setLoginData((loginData) => ({ ...loginData, email: target.value }))
          }
          required
        />

        <label htmlFor="">Senha</label>
        <input
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
        <button
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            logIn(loginData);
          }}
        >
          Entrar
        </button>
      </form>
      <p>
        <Link to="registro-usuario">Criar conta - usuário</Link>
      </p>
    </>
  );
};

export default Login;
