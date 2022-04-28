import styled from "styled-components";
import { css } from "styled-components";

export const Button = styled.button`
  border: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  border-radius: 24px;
  cursor: pointer;

  ${({ theme, disabled }) => css`
    background: ${!disabled
      ? theme.colors.secondaryColor.secondary
      : theme.colors.secondaryColor.secondaryDark};
    color: ${theme.colors.typographyColors.white};
    font-weight: ${theme.font.weight.bold};

    &:hover {
      background: ${theme.colors.secondaryColor.secondaryDark};
    }
  `};
`;
