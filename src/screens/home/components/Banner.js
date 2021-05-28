import styled from "@emotion/styled";
import LadyCarDesktop from "../../../assets/lady_car_desktop.svg";
import LadyCarMobile from "../../../assets/lady_car_mobile.svg";
import HomeBackground from "../../../assets/home_background.svg";
import { colors } from "../../../constants/ColorStyles";

export default function Banner() {
  return (
    <Content>
      <ContentText>
        <Text>¡Nuevo!</Text>
        <Title>Seguro Vehicular Tracking</Title>
        <Paragraph>Cuentanos donde le haras seguimiento a tu seguro</Paragraph>
      </ContentText>

      <ContentImage>
        <img
          className="mobile__only lady_car_mobile"
          src={LadyCarMobile}
          alt="Lady with car"
        />
        <img
          className="desktop__only home_background"
          src={HomeBackground}
          alt="Home"
        />
        <img
          className="desktop__only lady_car_desktop" // TODO: check BEM convention for classes
          src={LadyCarDesktop}
          alt="Lady with car"
        />
      </ContentImage>

      <Copyright>© 2020 RIMAC Seguros y Reaseguros.</Copyright>
    </Content>
  );
}

const Content = styled.div`
  background-color: ${colors.LightPurple};
  padding-top: 50px;

  .mobile__only {
    display: initial;
  }
  .desktop__only {
    display: none;
  }

  @media (min-width: 768px) {
    width: 39vw;
    height: 100vh;

    .mobile__only {
      display: none;
    }
    .desktop__only {
      display: initial;
    }

    display: flex;
    flex-direction: column-reverse;
  }
`;

const ContentText = styled.div`
  position: absolute;
  top: 20vw;
  left: 5vh;

  @media (min-width: 768px) {
    position: absolute;
    top: 25vw;
    left: 28vh;
  }
`;

const ContentImage = styled.div`
  .lady_car_mobile {
    position: relative;
    left: 69vw;
    top: 7vh;
  }

  @media (min-width: 768px) {
    .home_background {
      width: 100%;
    }
    .lady_car_desktop {
      position: absolute;
      left: 17vw;
      top: 23vh;

      width: 10vw;
    }
  }
`;

const Text = styled.h2`
  width: 46px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${colors.DarkPurple};

  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const Title = styled.h1`
  width: 80%;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.6px;
  color: ${colors.DarkPurple};

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

const Paragraph = styled.p`
  width: 50%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.DarkPurple};

  @media (min-width: 768px) {
    width: 90%;
  }
`;

const Copyright = styled.div`
  display: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  @media (min-width: 768px) {
    position: absolute;
    top: 47vw;
    left: 25vh;
    display: initial;
  }
`;