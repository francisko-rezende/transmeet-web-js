import React from "react";
import * as S from "./input.styles";

const Input = ({
  label = "label",
  icon,
  type = "text",
  value,
  onChange,
  name,
  error,
  setError,
  ...props
}) => {
  return (
    <>
      <S.Wrapper>
        <S.Label htmlFor={name}>{label}</S.Label>
        {!!icon && <S.IconWrapper>{icon}</S.IconWrapper>}
        <S.Input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onChange}
          name={name}
          id={name}
          {...props}
        />
      </S.Wrapper>
      {error && <p>As senhas não são idênticas</p>}
    </>
  );
};

export default Input;
