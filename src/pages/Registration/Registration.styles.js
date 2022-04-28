import styled from "styled-components";
import { css } from "styled-components";
import bg from "../../assets/login-bg-img.webp";
import { Link as RouterLink } from "react-router-dom";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const GradientWrapper = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const LoginWrapper = styled.div`
  display: grid;
  place-content: center;
  justify-items: center;
  padding: 0 1rem;
  padding-bottom: 2rem;
`;

export const Form = styled.form`
  max-width: 470px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputsWrapper = styled.div`
  display: grid;
  gap: 28px;
  margin-bottom: 62px;
`;

export const LogoWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 62px;
`;

export const Title = styled.h1`
  margin-top: 60px;
  margin-bottom: 30px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.typographyColors.gray};
    `}
`;

export const Subtitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  max-width: 70%;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.grayLight};
    font-size: ${theme.font.sizes["6"]};
  `}
`;

export const PersonPic = styled.img`
  position: absolute;
  max-width: 100%;
  display: block;
`;

export const GradientSentence = styled.div`
  font-size: 47px;
  font-weight: 300;
  line-height: 2;
  position: absolute;
  left: 50px;
  top: 30%;
  max-width: 300px;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.white};
  `}
`;

export const WhiteLogoWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Link = styled(RouterLink)`
  /* text-decoration: underline; */
  position: relative;

  ${({ theme }) => css`
    font-weight: ${theme.font.weight.semiBold};
    color: ${theme.colors.secondaryColor.secondary};

    &:hover {
      color: ${theme.colors.secondaryColor.secondaryDark};

      &::after {
        content: "";
        position: absolute;
        display: block;
        /* bottom: -1rem; */
        height: 2px;
        background: ${theme.colors.secondaryColor.secondary};
        animation: hoverAnimation 0.3s forwards;
      }
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  `}
`;

export const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  justify-content: space-around;
`;
