import React from "react";
import Spinner from "../../assets/loader-01.webp";

const Loading = () => {
  return (
    <div>
      <img src={Spinner} alt="Carregando" />
    </div>
  );
};

export default Loading;
