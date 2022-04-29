import styled from "styled-components";
import { ReactComponent as RightArrowIcon } from "../../assets/arrow-right.svg";
import { Link as RouterLink } from "react-router-dom";
import { css } from "styled-components";

export const LeftArrowIcon = styled(RightArrowIcon)`
  transform: rotate(180deg);
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

export const DetailsWrapper = styled.section`
  border-radius: 30px;
  padding: 40px 22px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
  max-width: calc(1170px + 44px);
  ${({ theme }) => css`
    background: ${theme.colors.neutralColors.grayLighter};
  `}
`;

export const Button = styled.button`
  padding: 13px 24px;
  border-radius: 24px;
  cursor: pointer;
  border: none;
  ${({ theme, isMatchBtn }) => css`
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.bold};
    background: ${isMatchBtn
      ? theme.colors.statusColor.success
      : theme.colors.statusColor.error};
  `}
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
