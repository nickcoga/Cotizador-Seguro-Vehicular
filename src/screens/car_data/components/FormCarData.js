import styled from "@emotion/styled";
import { Fragment, useState } from "react";
import Select from "../../../shared/Select.js";
import Car from "../../../assets/car.svg";
import { colors } from "../../../constants/ColorStyles.js";
import yearOptions from "../../../constants/YearOptions.js";
import Button from "../../../shared/Button.js";
import { useHistory } from "react-router";
import Brands from "../../../constants/Brands.js";
import helpers from "../../../helpers/index.js";

export default function FormCarData({ user, year, setYear, brand, setBrand }) {
  let history = useHistory();
  const [sum, setSum] = useState(14300);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/buildplan`);
  };

  const handleDecrement = () => {
    if (sum > 12500) setSum(sum - 100);
  };

  const handleIncrement = () => {
    if (sum < 16500) setSum(sum + 100);
  };

  return (
    <Fragment>
      <Formcardata id="form-cardata" onSubmit={handleSubmit}>
        <TextName>
          ¡Hola, <Name>{user.name}!</Name>
        </TextName>
        <TextDescription>Completa los datos de tu auto</TextDescription>

        <Content>
          <Select
            label="Año"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            options={yearOptions}
          />

          <Select
            label="Marca"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            options={Brands}
          />
          <Text>¿Tu auto es a gas?</Text>
        </Content>

        <ContentRadioButtons>
          <input
            className="radio"
            id="radio-button-yes"
            type="radio"
            name="radio_option"
            value="yes"
          />
          <label htmlFor="radio-button-yes">Si</label>
          <input
            id="radio-button-no"
            type="radio"
            name="radio_option"
            value="no"
            defaultChecked
          />
          <label htmlFor="radio-button-no">No</label>
        </ContentRadioButtons>

        <ContentSum>
          <label>Indica la suma asegurada</label>
          <div className="content__sum">
            <label>MIN $12.500</label>
            <label>|</label>
            <label>MAX $16.500</label>
          </div>
          <InputNumber>
            <span onClick={handleDecrement}> — </span>
            <div>
              <div>$ </div>
              <input type="number" value={sum} readOnly />
              <div>{helpers.largeNumberFormatter(sum)}</div>
            </div>
            <span onClick={handleIncrement}> + </span>
          </InputNumber>
          <Button showArrow type="submit" form="form-cardata">
            CONTINUAR
          </Button>
        </ContentSum>
      </Formcardata>
      <Line />
      <Copyright>© 2020 RIMAC Seguros y Reaseguros.</Copyright>
      <ContenRight>
        <Label>AYUDA</Label>
        <HelpButton>
          <img src={Car} alt="Car" />
          <div className="text__helpbutton">
            <div>¿No encuentras el modelo?</div>
            <div className="text__helbutton--colorclick">CLIC AQUÍ</div>
          </div>
        </HelpButton>
      </ContenRight>
    </Fragment>
  );
}

const Formcardata = styled.form`
  position: absolute;
  top: 12vh;
  left: 10vw;
  @media (min-width: 768px) {
    width: 28vw;
    height: 80vh;
    top: 14vh;
    left: 37vw;
  }
`;

const TextName = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.6px;
`;

const Name = styled.span`
  color: ${colors.Red};
`;

const TextDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
  }
`;

const ContenRight = styled.div`
  position: absolute;
  top: 45vh;
  left: 10vw;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  @media (min-width: 768px) {
    top: 18vh;
    left: 67vw;
  }
`;

const Label = styled.label`
  display: none;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    display: initial;
  }
`;

const HelpButton = styled.button`
  border: none;
  width: 79vw;
  display: flex;
  align-items: center;
  gap: 19px;
  border-radius: 8px;
  background-color: ${colors.LightPurple};
  padding: 16px 16px 20px 19px;
  cursor: pointer;
  .text__helpbutton {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  .text__helbutton--colorclick {
    color: ${colors.Purple};
  }
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    width: 14vw;
    background-color: initial;
  }
`;

const Text = styled.p`
  position: absolute;
  top: 44vh;
  left: 5vw;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.2px;
  @media (min-width: 768px) {
    width: 10vw;
    top: 28vh;
    left: 0vw;
  }
`;

const ContentRadioButtons = styled.div`
  position: absolute;
  top: 50vh;
  left: 0vw;
  display: flex;

  input[type="radio"] + label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 30px;
    margin-right: 15px;
    font-size: 16px;

    &:before {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      margin-right: 14px;
      position: absolute;
      top: -3px;
      left: 0;
      border: 1px solid ${colors.Green};
      background-color: #fff;
      border-radius: 50%;
    }
  }

  input[type="radio"] {
    display: none !important;
    *display: inline;

    &:checked + label:after {
      content: "";
      display: block;
      position: absolute;
      top: 2px;
      left: 5px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${colors.Green};
    }
  }

  @media (min-width: 768px) {
    top: 30vh;
    left: 16vw;
    gap: 36px;
  }
`;

const Line = styled.hr`
  width: 100vw;
  position: absolute;
  top: calc(100vh - 75px);
  left: 0vw;
  @media (min-width: 768px) {
    width: 27vw;
    top: 48vh;
    left: 37vw;
  }
`;

const ContentSum = styled.div`
  position: absolute;
  top: 55vh;
  left: 0vw;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  .content__sum {
    display: flex;
    gap: 5px;
    font-size: 12px;
    line-height: 16px;
  }
  @media (min-width: 768px) {
    width: 28vw;
    top: 40vh;
    left: 0vw;
    .content__sum {
      width: 12vw;
      padding: 2px;
      gap: 10px;
    }
  }
`;

const InputNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 4px;
  gap: 10px;
  input {
    border: none;
    width: 40vw;
    height: 5vh;
    text-align: center;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
  span {
    color: ${colors.Purple};
  }
  div {
    display: flex;
    align-items: center;
  }
  input {
    display: none;
  }
  height: 56px;
  @media (min-width: 768px) {
    width: 12vw;
    position: absolute;
    top: 1vh;
    left: 15vw;
    input {
      width: 5vw;
    }
  }
`;

const Copyright = styled.div`
  position: absolute;
  top: 95vh;
  left: 24vw;
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  @media (min-width: 768px) {
    top: 92vh;
    left: 14vw;
    display: none;
  }
`;
