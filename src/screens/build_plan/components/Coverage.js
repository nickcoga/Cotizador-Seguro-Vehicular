import styled from "@emotion/styled";
import { Fragment } from "react";
import { colors } from "../../../constants/ColorStyles";
import PersonCard from "../../../assets/person_card.svg";

export default function Coverage({ plate, year, brand }) {
  return (
    <Fragment>
      <Content>
        <Title>Mira las coberturas</Title>
        <Subtitle>Conoce las coberturas para tu plan</Subtitle>
        <Card>
          <TextPlate>Placa: {plate}</TextPlate>
          <ContenteSubText>
            <div>{brand}</div>
            <div>{year}</div>
            <div>Golf</div>
            <img className="person__Card" src={PersonCard} alt="PersonCard" />
          </ContenteSubText>
          <EditarText>Editar</EditarText>
        </Card>
      </Content>
    </Fragment>
  );
}

const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px 56px 0px;
  background-color: ${colors.LightPurple};
  position: absolute;
  top: 12vh;
  left: 0vw;
  @media (min-width: 768px) {
    width: 28vw;
    top: 12vh;
    left: 40vw;
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
  box-sizing: border-box;
  background-color: ${colors.White};
  display: flex;
  flex-direction: column;
  padding: 24px;
  .person__Card {
    width: 10vh;
    position: absolute;
    top: 16vh;
    left: 70vw;
  }
  @media (min-width: 768px) {
    width: 23vw;
    .person__Card {
      width: 9vh;
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
`;

const ContenteSubText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40vw;
  gap: 5px;
  margin-bottom: 16px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #494f66;
`;

const EditarText = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #6f7dff;
`;
