import styled from "@emotion/styled";
import { colors } from "../../../constants/ColorStyles";
import PersonCard from "../../../assets/person_card.svg";

export default function Coverage({ plate, year, brand }) {
  return (
    <Content>
      <Title>Mira las coberturas</Title>
      <Subtitle>Conoce las coberturas para tu plan</Subtitle>
      <Card>
        <TextContainer>
          <TextPlate>Placa: {plate}</TextPlate>
          <ContentSubText>
            <div>
              {brand} {year}
            </div>
            <div>Modelo</div>
          </ContentSubText>
          <EditText>Editar</EditText>
        </TextContainer>
        <ImageContainer>
          <img className="person__Card" src={PersonCard} alt="PersonCard" />
        </ImageContainer>
      </Card>
    </Content>
  );
}

const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px 56px 0px;
  background-color: ${colors.LightPurple};
  @media (min-width: 768px) {
    position: absolute;
    width: 28vw;
    top: 15vh;
    left: 35vw;
    background-color: ${colors.White};
  }
`;

const Title = styled.div`
  width: 80vw;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.6px;
  @media (min-width: 768px) {
    width: 23vw;
  }
`;

const Subtitle = styled.p`
  width: 80vw;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  margin: 16px 0px 24px 0px;
  @media (min-width: 768px) {
    width: 23vw;
  }
`;

const Card = styled.div`
  width: 82vw;
  border-radius: 12px;
  border: 3px solid ${colors.BorderlightGray};
  background-color: ${colors.White};
  display: flex;
  padding: 0px 10px 0px 15px;
  gap: 20px;
  .person__Card {
    width: 28vw;
  }

  @media (min-width: 768px) {
    width: 23vw;
    .person__Card {
      width: 7vw;
      top: 12vh;
      left: 20vw;
    }
  }
`;

const TextPlate = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  padding: 6px;
  color: ${colors.LightGray};
  @media (min-width: 768px) {
    width: 12vw;
  }
`;

const ContentSubText = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.DarkGrey};
  padding: 6px;
  margin-top @media (min-width: 768px) {
    width: 12vw;
  }
`;

const EditText = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #6f7dff;
  padding: 6px;

  @media (min-width: 768px) {
    width: 12vw;
  }
`;

const TextContainer = styled.div`
  margin-top: 15px;
`;

const ImageContainer = styled.div`
  display: initial;
`;
