import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Fragment } from "react";
import { colors } from "../constants/ColorStyles.js";
import Progressbar from "./Progressbar";
import DottepLine from "../assets/dottep_line.svg";

const stepTitles = ["Datos del auto", "Arma tu plan"];

export default function Stepper({ enabledIndex }) {
  return (
    <Fragment>
      <StepperDesktop>
        {stepTitles.map((title, index) => {
          const isLastElement = stepTitles.length === index + 1;

          return (
            <Contentoption>
              <Number enabled={enabledIndex === index + 1}>{index + 1}</Number>
              {isLastElement ? null : (
                <img
                  className="dottep__line"
                  src={DottepLine}
                  alt="Dottep Line"
                />
              )}
              <Option enabled={enabledIndex === index + 1}>{title}</Option>
            </Contentoption>
          );
        })}
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
  position: fixed;
  @media (min-width: 768px) {
    width: 30vw;
    height: calc(100vh - 64px);
    margin-top: 65px;
    background-color: ${colors.LightPurple};
    display: flex;
    flex-direction: column;
    gap: 48px;
    .dottep__line {
      width: 4px;
      position: absolute;
      top: 15px;
      left: 9px;
    }
  }
`;

const Contentoption = styled.div`
  width: 15vw;
  gap: 24px;
  position: relative;
  top: 10vh;
  left: 9vw;
  display: flex;
  align-item: center;
`;

const Option = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.StepColor};
`;

const Number = styled.div(
  (props) => css`
    height: 16px;
    width: 16px;
    padding: 2px;
    background-color: ${props.enabled ? colors.Purple : colors.LightPurple};
    color: ${props.enabled ? colors.White : colors.StepColor};
    border: 1px solid ${props.enabled ? colors.LightPurple : colors.StepColor};
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
  `
);
