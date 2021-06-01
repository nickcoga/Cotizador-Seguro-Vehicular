import { useState } from "react";
import styled from "@emotion/styled";
import ChevronUp from "../../../assets/chevron_up.svg";
import ChevronDown from "../../../assets/chevron_down.svg";
import Toggle from "../../../shared/Toggle";
import { colors } from "../../../constants/ColorStyles";

export default function ContentCoverage({
  img,
  titleCoverage = "",
  chevronArrow,
  toggleName,
  toggle,
  setToggle,
}) {
  const handleCircleButtonClick = () => {
    setToggle(!toggle);
  };

  const [showText, setShowText] = useState(false);

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
            className="only--desktop"
            src={showText ? ChevronDown : ChevronUp}
            alt={`Chevron ${showText ? "down" : "up"}`}
            onClick={handleChevronClick}
          />

          <div className="only--mobile">
            <Toggle
              toggleName={toggleName}
              toggle={toggle}
              setToggle={setToggle}
            />
          </div>
        </CoverageOption>

        <ContentButton onClick={handleCircleButtonClick}>
          {toggle ? (
            <div className="circle">-</div>
          ) : (
            <div className="circle">+</div>
          )}
          {toggle ? <div>QUITAR</div> : <div>AGREGAR</div>}
        </ContentButton>

        {showText ? (
          <p className="paragraph">
            He salido de casa a las cuatro menos cinco para ir a la academia de
            ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici,
            na llego a la academia que está en el centro del pueblo en una plaza
            medio-grande y dejo donde siempre la bici atada con una pitón a un
            sitio de esos de poner las bicis y mucho más
          </p>
        ) : null}

        <div className="only--mobile" onClick={handleChevronClick}>
          <label>Ver {showText ? "menos" : "más"}</label>
          <img
            src={showText ? ChevronUp : ChevronDown}
            alt={`Chevron ${showText ? "up" : "down"}`}
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

  .paragraph {
    width: 66vw;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }
  @media (min-width: 768px) {
    width: 20vw;
    .paragraph {
      width: 15vw;
    }
  }
`;

const Content = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 20vw;
  }
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
      height: 24px;
      width: 24px;
      padding: 2px;
      border: 1px solid ${colors.Purple};
      color: ${colors.Purple};
      border-radius: 80px;
      text-align: center;
    }
  }
`;
