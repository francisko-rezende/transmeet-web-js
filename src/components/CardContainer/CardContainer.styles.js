import styled, { css } from "styled-components";

export const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  border-radius: 30px;
  padding: 40px 22px;
  margin: 0 auto;
  /* margin-top: 60px; */
  margin-bottom: 60px;
  max-width: calc(1170px + 44px);
  ${({ theme }) => css`
    background: ${theme.colors.neutralColors.grayLighter};
  `}

  @media (max-width: 610px) {
    overflow-y: auto;
    /* height: 567px; */
  }
`;
