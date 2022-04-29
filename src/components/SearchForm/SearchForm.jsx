import React from "react";
import * as S from "./SearchForm.styles";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import Button from "../Button/Button";

const SearchForm = ({ onClickSearchBtn, onChangeInput, valueInput }) => {
  return (
    <S.Form>
      <S.InputWrapper>
        <div style={{ width: "20px", height: "20px" }}>
          <SearchIcon />
        </div>
        <S.HiddenLabel htmlFor="pesquisa">
          Pesquise por um termo ou empresa
        </S.HiddenLabel>
        <S.Input
          type="search"
          placeholder="Pesquise um termo ou empresa..."
          onChange={onChangeInput}
          value={valueInput}
          id="pesquisa"
        />
      </S.InputWrapper>
      <Button type="submit" onClick={onClickSearchBtn}>
        Pesquisar
      </Button>
    </S.Form>
  );
};

export default SearchForm;
