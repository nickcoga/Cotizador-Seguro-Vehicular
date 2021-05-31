import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../constants/ColorStyles.js";

export default function Select({
  label = "",
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
  );
}

const Container = styled.div(
  (props) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 12px;
    background: ${colors.white};
    border: ${`1px solid ${props.error ? colors.Pink : colors.DarkPurple}`};
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
      width: 100%;
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
