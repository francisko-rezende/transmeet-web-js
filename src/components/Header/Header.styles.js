import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: calc(1170px + 44px);
  padding: 0 22px;
  margin: 0 auto;
`;

export const Bg = styled.div`
  background: ${({ theme }) => theme.colors.typographyColors.black};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    font-size: ${theme.font.sizes["7"]};
  `}
`;

export const Name = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes["11"]};
  `}
`;
