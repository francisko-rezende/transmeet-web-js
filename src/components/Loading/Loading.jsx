import React from "react";
import Spinner from "../../assets/loader-01.webp";
import * as S from "./Loading.styles";

const Loading = () => {
  return <S.Loading src={Spinner} alt="Carregando" height={50} width={50} />;
};

export default Loading;
