import React from "react";
import avatar from "../../assets/avatar-placeholder.webp";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import * as S from "./Card.styles";

const Card = ({
  matchStatus = "not sent",
  name,
  imgPath = avatar,
  to,
  state,
}) => {
  return (
    <S.Link matchStatus={matchStatus} to={to} state={state}>
      <S.NameWrapper>
        <S.Name>{name}</S.Name>
        <S.DetailsText>
          <PlusIcon />
          Detalhes
        </S.DetailsText>
      </S.NameWrapper>
      <S.AvatarWrapper>
        <S.Img src={imgPath} />
      </S.AvatarWrapper>
    </S.Link>
  );
};

export default Card;
