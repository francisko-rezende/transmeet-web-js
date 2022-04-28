import React from "react";
import * as S from "./RegFormTag.styles";

const RegFormTag = ({ children, isCurrentForm, ...props }) => {
  return (
    <S.Span isCurrentForm={isCurrentForm} {...props}>
      {children}
    </S.Span>
  );
};

export default RegFormTag;
