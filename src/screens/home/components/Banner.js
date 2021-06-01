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
        <Title>
          Seguro <SubTitle1>Vehicular</SubTitle1>{" "}
        </Title>
        <SubTitle2>Tracking</SubTitle2>
        <Paragraph>Cuentanos donde le haras seguimiento a tu seguro</Paragraph>
      </ContentText>

      <ContentImage>
        <img
          className="only--mobile lady_car_mobile"
          src={LadyCarMobile}
          alt="Lady with car"
        />
        <img
          className="only--desktop home_background"
          src={HomeBackground}
          alt="Home"
        />
        <img
          className="only--desktop lady_car_desktop"
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

  @media (min-width: 768px) {
    width: 39vw;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ContentText = styled.div`
  position: absolute;
  top: 16vh;
  left: 8vw;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 768px) {
    position: absolute;
    top: 46vh;
    left: 15vw;
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
      left: 15vw;
      top: 12vh;
      width: 13vw;
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
  width: 65vw;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.6px;
  color: ${colors.DarkPurple};

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 48px;
    width: initial;
  }
`;

const SubTitle1 = styled.span`
  @media (min-width: 768px) {
    color: ${colors.Red};
  }
`;

const SubTitle2 = styled.h1`
  color: ${colors.Red};
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.6px;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

const Paragraph = styled.p`
  width: 60vw;
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
    top: 92vh;
    left: 12vw;
    display: initial;
    color: ${colors.LightGray};
  }
`;
