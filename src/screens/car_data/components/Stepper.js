import styled from "@emotion/styled";
import { Fragment } from "react";
import { colors } from "../../../constants/ColorStyles";
import Progressbar from "../../../shared/Progressbar";

export default function Stepper() {
  return (
    <Fragment>
      <StepperDesktop>
        <Contentoption>
          <Number>1</Number>
          <Option>Datos del auto</Option>
        </Contentoption>
        <Contentoption>
          <Number>2</Number>
          <Option>Arma tu plan</Option>
        </Contentoption>
      </StepperDesktop>
      <StepperMobile>
        <Progressbar />
      </StepperMobile>
    </Fragment>
  );
}

const StepperMobile = styled.div`
  position: absolute;
  top: 57px;
  left: 0vw;
  width: 100%;
  border-bottom: 1px solid ${colors.BorderGray};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StepperDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 30vw;
    height: calc(100vh - 64px);
    margin-top: 65px;
    background-color: ${colors.LightPurple};
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;

const Contentoption = styled.div`
  width: 15vw;
  gap: 24px;
  position: relative;
  top: 5vw;
  left: 15vh;
  display: flex;
  align-item: center;
`;

const Option = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const Number = styled.div`
  height: 16px;
  width: 16px;
  padding: 2px;
  background-color: ${colors.Purple};
  color: ${colors.White};
  border-radius: 80px;
  display: inline-block;
  text-align: center;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;
