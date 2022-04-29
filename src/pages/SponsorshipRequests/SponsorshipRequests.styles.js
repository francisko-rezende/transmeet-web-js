import styled from "styled-components";
import Card from "../../components/Card";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as RightArrowIcon } from "../../assets/arrow-right.svg";

export const LeftArrowIcon = styled(RightArrowIcon)`
  transform: rotate(180deg);
`;

export const SponsorshipCard = styled(Card)`
  &:hover {
    box-shadow: unset;
    cursor: unset;
  }
`;

export const Bg = styled.div`
  background: ${({ theme }) => theme.colors.typographyColors.black};
  min-height: 100vh;
  height: 100%;
`;

export const Container = styled.main`
  max-width: calc(1170px + 44px);
  padding: 0 22px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.typographyColors.white};
  margin-bottom: 30px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.colors.typographyColors.white};
`;

export const Link = styled(RouterLink)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.typographyColors.white};
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 16px;

  &:hover {
    transform: translate(-10px);
  }
`;
