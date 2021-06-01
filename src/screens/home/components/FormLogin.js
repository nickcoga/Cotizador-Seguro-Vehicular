import styled from "@emotion/styled";
import InputText from "../../../shared/InputText.js";
import { useState } from "react";
import Button from "../../../shared/Button.js";
import { useHistory, Link } from "react-router-dom";
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
          history.push(`/cardata/${json[0].id}`);
        });
    } catch (error) {
      console.error(error); // TODO: show error message on screen
    }
  };

  return (
    <Form id="form1" onSubmit={handleSubmit}>
      <Title>Déjanos tus datos</Title>
      <ContentInputs>
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
      </ContentInputs>

      <Label>
        <input type="checkbox" required />
        Acepto la{" "}
        <Link
          className="link"
          to="https://www.rimac.com.pe/uploads/Ley29733_proteccion_de_datos_personales.pdf"
        >
          Política de Protección de Datos Personales
        </Link>{" "}
        y los{" "}
        <Link
          className="link"
          to="https://rimac.com/content/dam/rimac/publica/rimac/footer/TERMINOS-Y-CONDICIONES.pdf"
        >
          Términos y Condiciones.
        </Link>
      </Label>

      {/* https://reactrouter.com/web/api/Link */}

      <ContainerButton>
        <Button showArrow type="submit" form="form1">
          <div>COTÍZALO</div>
        </Button>
      </ContainerButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
  margin: 0;
  @media (min-width: 768px) {
    width: 22vw;
    align-items: flex-start;
    padding: 15px 10px;
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
  padding-bottom: 24px;
  color: ${colors.DarkGray};
`;

const ContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 80vw;
  @media (min-width: 768px) {
    width: 15vw;
  }
`;

const Label = styled.label`
  width: 80vw;
  padding: 24px 0px 32px 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;

  .link {
    color: ${colors.RegularGray};
    text-decoration: underline;
    text-decoration-color: ${colors.RegularGray};
  }
  input {
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    width: 288px;
    padding: 24px 0px 40px 0px;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  width: 80vw;
  justify-content: center;
  padding-bottom: 56px;
  @media (min-width: 768px) {
    align-items: flex-start;
    width: 10vw;
    padding-bottom: 0px;
  }
`;
