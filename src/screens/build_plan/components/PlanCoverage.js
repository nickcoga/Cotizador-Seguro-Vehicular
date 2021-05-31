import styled from "@emotion/styled";
import { colors } from "../../../constants/ColorStyles";
import ContentCoverage from "./ContentCoverage";
import StolenTire from "../../../assets/stolen_tire.svg";
import Shock from "../../../assets/shock.svg";
import TotalLoss from "../../../assets/total_loss.svg";

export default function PlanCoverage() {
  return (
    <Container>
      <Title>Agregar o quita coberturas</Title>
      <ContentTab>
        <Tab className="tab tab-active active-tab">Protege a tu auto</Tab>
        <Tab className="tab tab-active active-tab">
          Protege a los que te rodean
        </Tab>
        <Tab className="tab tab-active active-tab">Mejora tu plan</Tab>
      </ContentTab>
      <ContentCoverage img={StolenTire} titleCoverage="Llanta Robada" />
      <ContentCoverage
        img={Shock}
        titleCoverage="Choque y/o pasarte la luz roja "
      />
      <ContentCoverage
        img={TotalLoss}
        titleCoverage="Atropello en la vía Evitamiento "
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 61vh;
  left: 0vw;
  @media (min-width: 768px) {
    width: 21vw;
    height: 100vh;
    top: 49vh;
    left: 38vw;
  }
`;
const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: ${colors.DarkGray};
  padding: 56px 0px 40px 0px;
`;

const ContentTab = styled.div`
  display: flex;
  @media (min-width: 768px) {
    position: absolute;
    top: 12vh;
    left: 0vw;
  }
`;

const Tab = styled.button`
  width: 128px;
  background-color: inherit;
  outline: none;
  transition: 0.3s;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid ${colors.White};
  color: ${colors.DarkGray};
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.8px;
  text-transform: uppercase;

  &:hover {
    color: ${colors.Red};
    border-bottom: 2px solid ${colors.Red};
  }
  @media (min-width: 768px) {
    width: 7vw;
  }
`;
