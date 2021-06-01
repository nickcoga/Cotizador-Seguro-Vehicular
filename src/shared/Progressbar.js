import styled from "@emotion/styled";
import { Fragment } from "react";
import { colors } from "../constants/ColorStyles.js";
import Chevronleft from "../assets/chevron_left.svg";
import { useHistory } from "react-router";

export default function Progressbar({ enabledIndex, setEnabledIndex }) {
  let history = useHistory();

  const handleClick = () => {
    if (enabledIndex > 1) {
      setEnabledIndex(enabledIndex - 1);
    }

    history.goBack();
  };

  return (
    <Fragment>
      <ContentProgress>
        <CircleReturn onClick={handleClick}>
          <img src={Chevronleft} alt="Chevronleft" />
        </CircleReturn>
        <StepText>PASO {enabledIndex} DE 2</StepText>

        <progress
          className="progress"
          value={enabledIndex === 1 ? "50" : "100"}
          max="100"
        >
          {enabledIndex === 1 ? "50%" : "100%"}
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
