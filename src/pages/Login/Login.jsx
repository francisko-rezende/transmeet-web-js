import React from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/UserContext/UserContext";
import api from "../../services/api";

const Login = () => {
  const { userData, setUserData } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    const logIn = async () => {
      // const {
      //   data: { access_token, account },
      // } = await api.post("/login", {
      //   email: "marcio@gmail.com",
      //   password: "Marcio123",
      // });

      const {
        data: { access_token, account },
      } = await api.post("/login", {
        email: "estrogonofe@palacio.com",
        password: "Estrogonofe123",
      });

      setUserData({ access_token: access_token, account: account });

      if (userData.access_token && userData.account.typeId === 1) {
        navigate("/usuario");
      }

      if (userData.access_token && userData.account.typeId === 2)
        navigate("/sponsor");
    };

    logIn();
  });

  return <div>Página de login</div>;
};

export default Login;
