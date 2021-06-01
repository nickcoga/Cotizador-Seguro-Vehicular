import styled from "@emotion/styled";
import { colors } from "../constants/ColorStyles";

export default function InputTextSelect({
  required,
  placeholderInput = "",
  placeholderSelect = "",
  nameInput = "",
  nameSelect = "",
  valueInput,
  valueSelect,
  showDefaultOption = false,
  options = [],
  onChangeInput,
  onChangeSelect,
}) {
  return (
    <Container>
      <ContentSelect>
        <StyledSelect
          type="select"
          value={valueSelect}
          name={nameSelect}
          onChange={onChangeSelect}
        >
          {showDefaultOption ? (
            <option disabled value="">
              {placeholderSelect}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </StyledSelect>
      </ContentSelect>
      <ContentInpunText>
        <StyledInputText
          value={valueInput}
          name={nameInput}
          onChange={onChangeInput}
          required={required}
          placeholder={placeholderInput}
        />
      </ContentInpunText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 80vw;
  gap: 5px;
  border: 1px solid;
  border-radius: 4px;
  @media (min-width: 768px) {
    width: 15vw;
  }
`;

const ContentSelect = styled.div`
  @media (min-width: 768px) {
  }
`;
const StyledSelect = styled.select`
  width: 100%;
  height: 56px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: none;
  background-color: ${colors.White};
  padding-left: 16px;
  padding-right: 11px;
  outline: none;
`;

const ContentInpunText = styled.div`
  @media (min-width: 768px) {
  }
`;

const StyledInputText = styled.input`
  width: 100%;
  height: 56px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: none;

  &:focus {
    color: ${colors.DarkGray};
    outline: none;
  }
  &::placeholder {
    color: ${colors.LightGray};
  }
  @media (min-width: 768px) {
    border: none;
  }
`;
