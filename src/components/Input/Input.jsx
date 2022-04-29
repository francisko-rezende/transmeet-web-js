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
      {error && (
        <p style={{ color: "#DC3545" }}>
          A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 dígito. Com
          no mínimo 8 caracteres.
        </p>
      )}
    </>
  );
};

export default Input;
