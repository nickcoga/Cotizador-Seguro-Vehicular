import styled from "@emotion/styled";
import Logo from "../../../assets/Logo RIMAC.svg";
import Phone from "../../../assets/ic_phone.svg";
import Llamanos from "../../../assets/Llamanos.svg";
import { colors } from "../../../UI/ColorStyles";

export default function Header() {
  return (
    <div>
      <Navbar>
        <div>
          <img src={Logo} alt="Logo Rimac" />
        </div>

        <div className="llamanos">
          <img src={Phone} alt="Logo Rimac" />
          <img src={Llamanos} alt="Logo Rimac" />
        </div>
      </Navbar>
    </div>
  );
}

const Navbar = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0px 0px;
  padding: 20px 0px;
  background: ${colors.Purple};
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
  .llamanos {
    display: flex;
    align-items: center;
    gap: 8.8px;
  }
`;
