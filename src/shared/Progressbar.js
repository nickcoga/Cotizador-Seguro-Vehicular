import styled from "@emotion/styled";
import { Fragment } from "react";
import { colors } from "../constants/ColorStyles.js";
import Chevronleft from "../assets/chevron_left.svg";

export default function Progressbar() {
  return (
    <Fragment>
      <ContentProgress>
        <CircleReturn>
          <img src={Chevronleft} alt="Chevronleft" />
        </CircleReturn>
        <StepText>PASO 1 DE 2</StepText>

        <progress className="progress" value="32" max="100">
          32%
        </progress>
      </ContentProgress>
    </Fragment>
  );
}

const ContentProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  progress {
    border: none;
    width: 176px;
    height: 6px;
  }
  progress::-webkit-progress-value {
    background: ${colors.Purple};
    border-radius: 20px;
  }

  progress::-webkit-progress-bar {
    background: ${colors.LightPurple};
    border-radius: 20px;
  }
`;

const CircleReturn = styled.div`
  height: 24px;
  width: 24px;
  padding: 2px;
  color: ${colors.White};
  border: 1px solid ${colors.BorderGray};
  border-radius: 80px;
  display: inline-block;
  text-align: center;

  img {
    position: relative;
    top: -3px;
    left: -1px;
  }
`;

const StepText = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #676f8f;
`;
