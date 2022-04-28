import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import bg from "../../assets/login-bg-img.webp";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const GradientWrapper = styled.div`
  flex: 1;
  width: 50vw;
  background-image: url(${bg});
  /* background: linear-gradient(360deg, #1f478b 0%, #bb4981 100%); */
  /* background-repeat: no-repeat; */
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const LoginWrapper = styled.div`
  flex: 1;
  width: 50vw;
  height: 100vh;
  display: grid;
  place-content: center;
  justify-items: center;
`;

export const Form = styled.form`
  max-width: 470px;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 24px;

  ${({ theme }) =>
    css`
      color: ${theme.colors.typographyColors.gray};
    `}
`;

export const Subtitle = styled.h2`
  margin-bottom: 66px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.typographyColors.grayLight};
    font-size: ${theme.font.sizes["6"]};
  `}
`;

export const Link = styled(RouterLink)`
  text-decoration: underline;

  ${({ theme }) => css`
    font-weight: ${theme.font.weight.semiBold};
    color: ${theme.colors.secondaryColor.secondary};

    &:hover {
      color: ${theme.colors.secondaryColor.secondaryDark};
    }
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