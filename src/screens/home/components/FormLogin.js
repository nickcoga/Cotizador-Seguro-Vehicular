import styled from "@emotion/styled";
import InputText from "../../../shared/InputText.js";
import { useState } from "react";
import Button from "../../../shared/Button.js";
import { Link, useHistory } from "react-router-dom";

export default function FormLogin({ setUser }) {
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [placa, setPlaca] = useState(""); // TODO: use english
  let history = useHistory();

  const handleSubmit = (e) => {
    console.log("antes de prevent deafult");
    e.preventDefault();
    console.log("about to submit the form");
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
      <h2>Dejanos tus datos</h2>
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
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <InputText
        required
        label=""
        placeholder="Placa"
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
      />
      {console.log(dni, phone, placa)}
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
    width: 15vw;
  }
`;
// TODO: change checkbox color
