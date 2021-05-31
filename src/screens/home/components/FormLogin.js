import styled from "@emotion/styled";
import InputText from "../../../shared/InputText.js";
import { useState } from "react";
import Button from "../../../shared/Button.js";
import { useHistory } from "react-router-dom";
import { colors } from "../../../constants/ColorStyles.js";

export default function FormLogin({ setUser, plate, setPlate }) {
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    // TODO: disable button until request is resolved to avoid making more than one request if user clicks too quickly

    e.preventDefault();

    try {
      fetch(
        `https://my-json-server.typicode.com/nickcoga/Cotizador-Seguro-Vehicular/users?dni=${dni}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          setUser(json[0]);
          console.log(json);
          history.push(`/cardata/${json[0].id}`);
        });
    } catch (error) {
      console.error(error); // TODO: show error message on screen
    }
  };

  return (
    <Form id="form1" onSubmit={handleSubmit}>
      <Title>Déjanos tus datos</Title>
      <InputText
        required
        label=""
        placeholder="Nro. de Doc"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />
      <InputText
        required
        label=""
        placeholder="Celular"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <InputText
        required
        label=""
        placeholder="Placa"
        value={plate}
        onChange={(e) => setPlate(e.target.value)}
      />
      {console.log(dni, phone, plate)}
      <Label>
        <input type="checkbox" required />
        Acepto la Política de Protecciòn de Datos Personales y los Términos y
        Condiciones.
      </Label>

      <Button showArrow type="submit" form="form1">
        <div>COTÍZALO</div>
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 40px 0px;
  margin: 0;
  @media (min-width: 768px) {
    width: 22vw;
    align-items: center;
    padding: 15px 20px;
    margin: 0;
    position: absolute;
    left: 55vw;
    top: 15vh;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  line-height: 36px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.2px;
  color: ${colors.DarkGray};
`;

const Label = styled.label`
  width: 72vw;
  display: flex;
  justify-content: center;
  gap: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  @media (min-width: 768px) {
    width: 16vw;
  }
`;
