import styled from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const Loading = styled.img`
  animation: ${spin} 1s linear infinite;
`;
