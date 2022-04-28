import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 56px;
  position: relative;
  /* margin-bottom: 100px; */
  /* width: 100%; */
  /* background-color: blue; */
`;

export const Label = styled.label`
  z-index: 2;
  position: absolute;
  /* left: 13px; */
  /* top: 10px; */
  left: 11px;
  top: -4px;
  padding: 0 5px;
  width: fit-content;

  ${({ theme }) => css`
    background-color: ${theme.colors.typographyColors.white};
    color: ${theme.colors.typographyColors.gray};
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.sizes["2"]};
  `}
`;

export const Select = styled.select`
  background-color: transparent;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.typographyColors.gray};
  border-style: solid;
  border-radius: 4px;
  padding: 14px 16px;
  height: 56px;
  width: 100%;
  /* width: 470px; */
  /* margin-left: 15px; */
  line-height: 1.4;

  ${({ theme, selectWidth }) => css`
    font-size: ${theme.font.sizes["4"]};
    color: ${theme.colors.typographyColors.gray};
    max-width: ${selectWidth};
  `}
`;
