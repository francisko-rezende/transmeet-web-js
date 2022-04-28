import React from "react";
import * as S from "./SelectInput.styles";

const SelectInput = ({ name, options, selectWidth, value, onChange }) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{name}</S.Label>
      <S.Select
        name={name}
        id={name}
        selectWidth={selectWidth}
        value={value}
        onChange={onChange}
      >
        <option disabled>Selecionar</option>
        {!!options &&
          options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </S.Select>
    </S.Wrapper>
  );
};

export default SelectInput;
