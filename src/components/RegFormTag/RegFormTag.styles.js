import styled from "styled-components";
import { css } from "styled-components";

const tagVariants = {
  currentForm: (theme) => css`
    background: ${theme.colors.primaryColor.primary};
    color: ${theme.colors.typographyColors.white};
  `,
  notCurrentForm: (theme) => css`
    background: ${theme.colors.neutralColors.gray};
    color: ${theme.colors.neutralColors.grayDark};
  `,
};

export const Span = styled.span`
  cursor: pointer;
  padding: 9px 24px;

  ${({ theme, isCurrentForm }) => css`
    font-weight: ${theme.font.weight.bold};
    border-radius: 24px;

    ${isCurrentForm
      ? tagVariants.currentForm(theme)
      : tagVariants.notCurrentForm(theme)}
  `}
`;
