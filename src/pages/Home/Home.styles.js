import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

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

export const Subtitle = styled.h3`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.typographyColors.white};
`;

export const Link = styled(RouterLink)`
  display: flex;
  text-decoration: underline;
  align-items: center;
  gap: 20px;
  /* padding: 30px; */
  padding-bottom: 100px;
  width: fit-content;
  color: ${({ theme }) => theme.colors.typographyColors.white};

  &:hover {
    transform: translateX(30px);
  }
`;
