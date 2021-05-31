import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../constants/ColorStyles.js";
import ChevronRight from "../assets/chevron_right.svg";

const StyledButton = styled.button(
  (props) => css`
    width: 100%;
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
      width: 100%;
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
  `
);

function Button({ children, onClick, showArrow }) {
  return (
    <StyledButton onClick={onClick} showArrow={showArrow}>
      {children}
      {showArrow ? <img src={ChevronRight} alt="ChevronRight.svg" /> : ""}
    </StyledButton>
  );
}

export default Button;
