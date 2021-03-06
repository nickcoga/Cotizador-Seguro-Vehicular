import styled from "@emotion/styled";
import { Fragment, useState } from "react";
import Select from "../../../shared/Select.js";
import Car from "../../../assets/car.svg";
import { colors } from "../../../constants/ColorStyles.js";
import yearOptions from "../../../constants/YearOptions.js";
import Button from "../../../shared/Button.js";
import { useHistory } from "react-router";
import Brands from "../../../constants/Brands.js";
import { helpers } from "../../../helpers/index.js";

export default function FormCarData({
  user,
  year,
  setYear,
  brand,
  setBrand,
  setEnabledIndex,
}) {
  let history = useHistory();
  const [sum, setSum] = useState(14300);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnabledIndex(2);
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
          <ContainerButton>
            <Button showArrow type="submit" form="form-cardata">
              CONTINUAR
            </Button>
          </ContainerButton>
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
            <div className="text__helpbutton--colorclick">CLIC AQUÍ</div>
          </div>
        </HelpButton>
      </ContenRight>
    </Fragment>
  );
}

const Formcardata = styled.form`
  position: absolute;
  top: 17vh;
  left: 10vw;
  @media (min-width: 768px) {
    width: 28vw;
    height: 100vh;
    top: 14vh;
    left: 37vw;
  }
`;

const TextName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.6px;
  padding: 8px 0px;
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
  padding-bottom: 36px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  gap: 16px;
  @media (min-width: 768px) {
    width: 20vw;
  }
`;

const ContenRight = styled.div`
  position: absolute;
  top: 58vh;
  left: 10vw;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  @media (min-width: 768px) {
    top: 26vh;
    left: 60vw;
  }
`;

const Label = styled.label`
  display: none;
  text-transform: uppercase;
  @media (min-width: 768px) {
    display: initial;

    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.6px;
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
  .text__helpbutton--colorclick {
    color: ${colors.Purple};
  }
  @media (min-width: 768px) {
    border-top: 1px solid ${colors.LightPurple};
    border-radius: initial;
    flex-direction: row-reverse;
    width: 10vw;
    height: 8vh;

    background-color: initial;
    padding: 0px;
    .text__helpbutton {
      text-align: left;
    }
    .text__helpbutton--colorclick {
      color: ${colors.Purple};
    }
  }
`;

const Text = styled.p`
  position: absolute;
  top: 58vh;
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

  top: 64vh;
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
    top: 28.5vh;
    left: 12vw;
    gap: 36px;
  }
`;

const Line = styled.hr`
  display: none;
  width: 100vw;
  position: absolute;
  top: calc(136vh - 75px);
  left: 0vw;
  border: 1px solid ${colors.BorderGray};
  @media (min-width: 768px) {
    width: 20vw;
    top: 48vh;
    left: 37vw;
  }
`;

const ContentSum = styled.div`
  position: absolute;
  top: 72vh;
  left: 0vw;
  display: flex;
  flex-direction: column;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  .content__sum {
    display: flex;
    gap: 5px;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    padding: 4px 0px 16px 0px;
    color: ${colors.RegularGray};
  }
  @media (min-width: 768px) {
    width: 28vw;
    top: 40vh;
    left: 0vw;
    .content__sum {
      width: 12vw;
      padding: 2px;
      gap: 10px;
      padding: 4px 0px 46px 0px;
      font-size: 12px;
    }
  }
`;

const InputNumber = styled.div`
  width: 80vw;
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
    width: 8vw;
    position: absolute;
    top: 1vh;
    left: 12vw;
    input {
      width: 5vw;
    }
  }
`;

const ContainerButton = styled.div`
  display: flex;
  width: 80vw;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 56px;
  @media (min-width: 768px) {
    align-items: flex-start;
    width: 10vw;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const Copyright = styled.div`
  width: 100vw;
  position: absolute;
  top: 125vh;
  left: 0vw;
  padding: 30px 0px 30px 32px;
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  border-top: 1px solid ${colors.BorderGray};
  @media (min-width: 768px) {
    top: 92vh;
    left: 14vw;
    display: none;
  }
`;
