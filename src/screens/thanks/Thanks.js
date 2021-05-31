import styled from "@emotion/styled";
import PersonBackgroundMobile from "../../assets/person_background_mobile.svg";
import PersonBackgroundDesktop from "../../assets/person_background_desktop.svg";
import Header from "../../shared/Header";
import { colors } from "../../constants/ColorStyles";
import Button from "../../shared/Button";

export default function Thanks() {
  return (
    <Container>
      <Header showBorder />
      <ContentImage>
        <img
          className="only--mobile"
          src={PersonBackgroundMobile}
          alt="Background Img"
        />
        <img
          className="only--desktop person--desktop"
          src={PersonBackgroundDesktop}
          alt="Background Img"
        />
      </ContentImage>
      <ContentText>
        <Title>¡Te damos la bienvenida!</Title>
        <SubTitle>Cuenta con nosotros para proteger tu vehículo</SubTitle>
        <Description>
          <Email>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo:
          </Email>

          <Email> joel.sanchez@gmail.com</Email>
        </Description>
        <ContainerButton>
          <Button>CÓMO USAR MI SEGURO</Button>
        </ContainerButton>
        <Footer>© 2020 RIMAC Seguros y Reaseguros.</Footer>
      </ContentText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 768px) {
    width: 100vw;
    position: absolute;
    top: 64px;
    flex-direction: row;
  }
`;

const ContentImage = styled.div`
  @media (min-width: 768px) {
    width: 55vh;
    background-color: ${colors.LightPurple};

    .person--desktop {
      width: 36vw;
      height: calc(100vh - 67px);
    }
  }
`;

const ContentText = styled.div`
  width: 100vw;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    position: absolute;
    width: initial;
    top: 20vh;
    left: 40vw;
  }
`;

const Title = styled.span`
  width: 84vw;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  color: ${colors.Red};
  padding: 30px 0px 24px 0px;
  @media (min-width: 768px) {
    width: 25vw;
    font-size: 36px;
    line-height: 48px;
  }
`;

const SubTitle = styled.span`
  width: 86vw;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  color: ${colors.DarkGray};
  padding-bottom: 24px;
  @media (min-width: 768px) {
    width: 25vw;
  }
`;

const Description = styled.span`
  width: 84vw;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  padding: 24px 0px 40px 0px;
  @media (min-width: 768px) {
    width: 25vw;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    line-height: 28px;
  }
`;

const Email = styled.span``;

const ContainerButton = styled.div`
  display: flex;
  width: 296px;
  justify-content: center;
  padding-bottom: 56px;
  @media (min-width: 768px) {
    width: 255px;
  }
`;

const Footer = styled.div`
  width: 100vw;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  padding: 20px 100px 20px 32px;
  @media (min-width: 768px) {
    display: none;
  }
`;
