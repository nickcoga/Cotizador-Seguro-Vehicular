import styled from "@emotion/styled";
import Flexible from "../../../assets/flexible_vehicular.svg";
import Check from "../../../assets/check.svg";

import { colors } from "../../../constants/ColorStyles";
import Button from "../../../shared/Button";
import { useHistory } from "react-router";
export default function ContentPrice() {
  let history = useHistory();

  const handlerClick = () => {
    history.push(`/thanks`);
  };

  return (
    <Container>
      <Content>
        <Price>
          <div>$35.00</div>
          <p>mensuales</p>
        </Price>

        <ContentLogo>
          <div>
            <img
              className="only--desktop"
              src={Flexible}
              alt="Flexible Vehicular"
            />
          </div>
        </ContentLogo>
      </Content>
      <Line />
      <ContentDetails>
        <div className="only--desktop">El precio incluye:</div>
        <div className="list only--desktop">
          <div>
            <img src={Check} alt="Check" />
            <label>Llanta de repuesto</label>
          </div>
          <div>
            <img src={Check} alt="Check" />
            <label>Analisis de motor</label>
          </div>
          <div>
            <img src={Check} alt="Check" />
            <label>Aros gratis</label>
          </div>
        </div>
        <ContentButton>
          <Button onClick={handlerClick}>Lo quiero</Button>
        </ContentButton>
      </ContentDetails>
    </Container>
  );
}

const Container = styled.div`
  width: 90vw;
  display: flex;
  gap: 15vw;
  top: 190vh;
  padding: 40px 0px;
  margin: auto;
  @media (min-width: 768px) {
    position: absolute;
    flex-direction: column;
    width: 15vw;
    top: 27vh;
    left: 65vw;
    padding: 0px 0px;
  }
`;

const Content = styled.div`
  width: 14vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 15vw;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  p {
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
  }
`;
const ContentLogo = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: initial;
    display: flex;
  }
`;

const Line = styled.hr`
  display: none;
  @media (min-width: 768px) {
    display: initial;
    position: absolute;
    top: 6vh;
    left: 0vw;
    width: 15vw;
    border: 1px solid ${colors.BorderGray};
  }
`;

const ContentDetails = styled.div`
  @media (min-width: 768px) {
    width: 15vw;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 8vh;
    left: 0vw;

    gap: 12px;
    padding-bottom: 10px;
    .list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

const ContentButton = styled.div`
  width: 60vw;
  @media (min-width: 768px) {
    width: 224px;
    padding-top: 32px;
  }
`;
