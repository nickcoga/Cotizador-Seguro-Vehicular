import styled from "@emotion/styled";
import Flexible from "../../../assets/flexible_vehicular.svg";
import Check from "../../../assets/check.svg";

import { colors } from "../../../constants/ColorStyles";
export default function ContentPrice() {
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
              className="only__desktop"
              src={Flexible}
              alt="Flexible Vehicular"
            />
          </div>
        </ContentLogo>
      </Content>
      <Line />
      <ContentDetails>
        <div className="only__desktop">El precio incluye:</div>
        <div className="list only__desktop">
          <div>
            <img src={Check} alt="Check" />
            <label>Llanta de repuesto</label>
          </div>
          <div>
            <img src={Check} alt="Check" />
            <label>Llanta de repuesto</label>
          </div>
          <div>
            <img src={Check} alt="Check" />
            <label>Llanta de repuesto</label>
          </div>
        </div>
        <Button>Lo quiero</Button>
      </ContentDetails>
    </Container>
  );
}

const Container = styled.div`
  width: 90vw;
  display: flex;
  gap: 15vw;
  position: absolute;
  top: 135vh;
  left: 6vw;
  @media (min-width: 768px) {
    flex-direction: column;
    width: 15vw;
    top: 27vh;
    left: 65vw;
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
  .only__desktop {
    display: none;
  }
  @media (min-width: 768px) {
    width: 15vw;
    position: absolute;
    top: 8vh;
    left: 0vw;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 10px;
    .list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .only__desktop {
      display: initial;
    }
  }
`;

const Button = styled.button`
  width: 60vw;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  outline: none;
  padding: 16px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 8px;
  border: 1px solid ${colors.Red};
  background-color: ${colors.Red};
  color: ${colors.White};
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background: ${colors.ShallowPink};
  }
  @media (min-width: 768px) {
    width: 15vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    border-radius: 8px;
    border: 1px solid ${colors.Red};
    background-color: ${colors.Red};
    color: ${colors.White};
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    &:hover {
      background: ${colors.ShallowPink};
    }
  }
`;
