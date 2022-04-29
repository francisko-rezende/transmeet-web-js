import styled, { css } from "styled-components";

export const Form = styled.form`
  max-width: calc(1170px + 44px);
  padding: 0 22px;
  margin: 0 auto;
  margin-bottom: 30px;
  display: grid;
  place-items: center;
  grid-template-columns: 3fr 1fr;
  gap: 30px;
  margin-top: 58px;
  @media (max-width: 610px) {
    gap: 10px;
  }
`;

export const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 56px;
  padding-left: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.typographyColors.gray};
  background: ${({ theme }) => theme.colors.typographyColors.white};
  border-radius: 4px;

  @media (max-width: 610px) {
    gap: 15px;
    padding-left: 15px;
  }
`;

export const Input = styled.input`
  flex: 3;
  border: none;

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.neutralColors.grayLighter};
  }
`;

export const Button = styled.button`
  justify-self: center;
  width: 100%;
  border: none;
  border-radius: 24px;
  height: 48px;
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor.secondary};
    color: ${theme.colors.typographyColors.white};
  `}
`;
