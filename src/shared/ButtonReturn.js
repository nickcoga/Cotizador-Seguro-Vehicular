import styled from "@emotion/styled";
import ChrevronLeft from "../assets/chevron_left_orange.svg";
import { colors } from "../constants/ColorStyles";

export default function ButtonReturn() {
  return (
    <Content>
      <img className="circle" src={ChrevronLeft} alt="Return Icon" />
      <div>Volver</div>
    </Content>
  );
}

const Content = styled.div`
  display: none;
  @media (min-width: 768px) {
    position: absolute;
    top: 10vh;
    left: 37vw;
    width: 8vw;
    gap: 4px;
    display: initial;
    display: flex;
    align-items: center;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${colors.LightGray};
    .circle {
      height: 24px;
      width: 24px;
      padding: 2px;
      border: 1px solid ${colors.Red};
      color: ${colors.Red};
      border-radius: 80px;
      text-align: center;
    }
  }
`;
