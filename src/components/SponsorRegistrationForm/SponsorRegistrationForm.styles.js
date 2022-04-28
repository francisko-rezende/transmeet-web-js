import styled from "styled-components";

export const TextArea = styled.textarea`
  padding: 15px 23px;
  max-height: 173px;
  max-width: 470px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.typographyColors.gray};
  border-style: solid;
  border-radius: 4px;
  margin-bottom: calc(60px - 20px);
`;
