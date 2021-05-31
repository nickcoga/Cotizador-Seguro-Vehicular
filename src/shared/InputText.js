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
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4px 12px;
    background: ${colors.white};
    border: ${`1px solid ${props.error ? colors.Pink : colors.DarkPurple}`};
    box-sizing: border-box;
    border-radius: 4px;
    gap: 4px;
    height: fit-content;
    &:hover {
      border: ${`1px solid ${colors.ShallowPink}`};
    }
    &:focus-within {
      border: ${`1px solid ${colors.ShallowPink}`};
      box-shadow: ${`0px 0px 4px ${colors.ShallowPink}`};
    }
    @media (min-width: 768px) {
      width: 100%;
      height: 56px;
    }
  `
);

const InputLabel = styled.label`
  font-size: 14px;
  line-height: 17px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  height: 25px;
  color: ${colors.DarkGray};
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.LightGray};
  }
`;

function InputText({
  label = "",
  caption = "",
  error = false,
  placeholder = "",
  name = "",
  value = "",
  onChange,
  cssProp,
  required,
}) {
  return (
    <FieldContainer cssProp={cssProp}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledInput
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
          required={required}
        />
      </Container>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

export default InputText;
