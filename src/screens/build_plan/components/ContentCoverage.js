import { useState } from "react";
import styled from "@emotion/styled";
import ChevronUp from "../../../assets/chevron_up.svg";
import ChevronDown from "../../../assets/chevron_down.svg";
import Toogle from "../../../shared/Toogle";
import { colors } from "../../../constants/ColorStyles";

export default function ContentCoverage({
  img,
  titleCoverage = "",
  chevronArrow,
}) {
  // controls if the text should show or hide
  const [showText, setShowText] = useState(false);

  // controls what's the current text in text area
  const [text, setText] = useState("");

  const handleChevronClick = () => {
    setShowText(!showText);
  };

  return (
    <Container>
      <Content>
        <CoverageOption>
          {img.length > 0 ? <img src={img} alt="coverage icon" /> : ""}

          <TextCoverage>{titleCoverage}</TextCoverage>

          <img
            className="only__desktop"
            src={showText ? ChevronDown : ChevronUp}
            alt={`Chevron ${showText ? "down" : "up"}`}
            onClick={handleChevronClick}
          />

          <div className="only__mobile">
            <Toogle />
          </div>

          {/* TODO: becomes part of the state of this component (showContent (true/false)) -> css to hide/show the input and the direction of the chevron */}
        </CoverageOption>

        <ContentButton onClick={handleChevronClick}>
          {showText ? (
            <div className="circle">-</div>
          ) : (
            <div className="circle">+</div>
          )}
          {showText ? <div>QUITAR</div> : <div>AGREGAR</div>}
        </ContentButton>

        {showText ? (
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="text__area"
            name="textarea"
            rows="6"
            cols="30"
          />
        ) : null}

        {/* TODO: textarea text should be state of this component. */}
        <div className="only__mobile" onClick={handleChevronClick}>
          <label>Ver {showText ? "menos" : "más"}</label>
          <img
            src={showText ? ChevronDown : ChevronUp}
            alt={`Chevron ${showText ? "down" : "up"}`}
          />
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 3vh;
  left: 0vw;
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  .text__area {
    width: 70vw;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }
  .only__desktop {
    display: none;
  }
  @media (min-width: 768px) {
    width: 17vw;

    .text__area {
      width: 16vw;
    }
    .only__desktop {
      display: initial;
    }
    .only__mobile {
      display: none;
    }
  }
`;

const Content = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoverageOption = styled.div`
  width: 71vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (min-width: 768px) {
    width: 20vw;
  }
`;

const TextCoverage = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #494f66;
`;

const ContentButton = styled.div`
  display: none;

  @media (min-width: 768px) {
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
    color: ${colors.Purple};
    .circle {
      height: 16px;
      width: 16px;
      padding: 2px;
      border: 1px solid ${colors.Purple};
      color: ${colors.Purple};
      border-radius: 80px;
      text-align: center;
    }
  }
`;