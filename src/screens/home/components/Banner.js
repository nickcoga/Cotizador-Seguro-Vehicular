import styled from "@emotion/styled";
import Lady from "../../../assets/lady_login.svg";
import LadyCar from "../../../assets/lady_login_car.svg";
import font from "../../../assets/font.svg";
import { colors } from "../../../constants/ColorStyles";

export default function Banner() {
  return (
    <Content>
      <Contentleft>
        <Text>¡Nuevo!</Text>
        <Title>Seguro Vehicular Tracking</Title>
        <Paragraph>Cuentanos donde le haras seguimiento a tu seguro</Paragraph>
      </Contentleft>
      <img className="img" src={LadyCar} alt="Ladycar.svg" />
      <ContentRight />
    </Content>
  );
}

const Content = styled.div`
  width: 45%;
  height: 920px;
  display: flex;
  flex-direction: center;
  background: url(${font});
  background-size: 865px 900px;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  .img {
    position: absolute;
    top: 200px;
    left: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    background: ${colors.Purple};
    background-repeat: no-repeat;
    .img {
      display: none !important;
    }
  }
`;

const Text = styled.h2`
  width: 46px;
  height: 16px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${colors.DarkPurple};
`;

const Title = styled.h1`
  width: 200px;
  height: 72px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.6px;
`;

const Paragraph = styled.p`
  width: 90%;
  height: 48px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.DarkPurple};
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Contentleft = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 500px;
  left: 300px;
  @media (max-width: 768px) {
    position: absolute;
    top: 90px;
    left: 50px;
  }
`;

const ContentRight = styled.div`
  position: absolute;
  left: 260px;
  top: 88px;
  background: url(${LadyCar});
  @media (max-width: 768px) {
    position: absolute;
    width: 142.61px;
    height: 240px;
    left: 260px;
    top: 88px;
    flex-direction: row;
    background: url(${Lady});
    background-repeat: no-repeat;
  }
`;
