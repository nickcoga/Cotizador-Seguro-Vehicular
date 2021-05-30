import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../constants/ColorStyles.js";

const FieldContainer = styled.div(
  ({ cssProp }) => css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    ${cssProp}
  `
);

const Caption = styled.span(
  (props) => css`
    font-size: 14px;
    line-height: 17px;
    color: ${props.error ? colors.red : colors.Gray};
  `
);

const Container = styled.div(
  (props) => css`
    width: 296px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 12px;
    background: ${colors.white};
    border: ${`1px solid ${props.error ? colors.Pink : colors.DarkPurple}`};
    box-sizing: border-box;
    border-radius: 4px;
    gap: 4px;
    height: fit-content;
    margin-bottom: 16px;
    &:hover {
      border: ${`1px solid ${colors.ShallowPink}`};
    }
    &:focus-within {
      border: ${`1px solid ${colors.ShallowPink}`};
      box-shadow: ${`0px 0px 4px ${colors.ShallowPink}`};
    }
    @media (min-width: 768px) {
      width: 28vw;
    }
  `
);

const StyledSelect = styled.select`
  border: none;
  width: 100%;
  background-color: ${colors.White};
  color: ${colors.Gray};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.LightGray};
  }
  option:first-of-type {
    color: red;
  }
`;

const InputLabel = styled.label`
  font-size: 14px;
  line-height: 17px;
`;

function Select({
  label = "",
  caption = "",
  icon,
  error = false,
  showDefaultOption = false,
  placeholder = "",
  name = "",
  value,
  options = [],
  onChange,
}) {
  return (
    <FieldContainer>
      <Container error={error}>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <StyledSelect
          type="select"
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
        >
          {showDefaultOption ? (
            <option disabled value="">
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </StyledSelect>
        {icon}
      </Container>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

export default Select;
