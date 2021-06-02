import styled from "@emotion/styled";
import InputText from "../../../shared/InputText.js";
import { useState } from "react";
import Button from "../../../shared/Button.js";
import { useHistory } from "react-router-dom";
import { colors } from "../../../constants/ColorStyles.js";
import UserService from "../../../services/users_services.js";
import InputTextSelect from "../../../shared/InputTextSelect.js";
import typeDocs from "../../../constants/TypeDocs.js";

export default function FormLogin({ setUser, plate, setPlate }) {
  const [phone, setPhone] = useState("");
  const [nroDoc, setNroDoc] = useState("");
  const [typeDoc, setTypeDoc] = useState("Dni");

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usersService = new UserService();
    const [user] = await usersService.show(nroDoc, typeDoc);
    setUser(user);
    // TODO: handle error when user doesn't exist in db.json
    history.push(`/cardata/${user.id}`);
  };

  return (
    <Form id="form1" onSubmit={handleSubmit}>
      <Title>Déjanos tus datos</Title>
      <ContentInputs>
        <InputTextSelect
          required
          options={typeDocs}
          placeholderInput="Nro. de Doc"
          valueInput={nroDoc}
          valueSelect={typeDoc}
          onChangeInput={(e) => setNroDoc(e.target.value)}
          onChangeSelect={(e) => setTypeDoc(e.target.value)}
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
        <a
          className="link"
          href="https://www.rimac.com.pe/uploads/Ley29733_proteccion_de_datos_personales.pdf"
        >
          Política de Protección de Datos Personales
        </a>{" "}
        y los{" "}
        <a
          className="link"
          href="https://rimac.com/content/dam/rimac/publica/rimac/footer/TERMINOS-Y-CONDICIONES.pdf"
        >
          Términos y Condiciones.
        </a>
      </Label>

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
