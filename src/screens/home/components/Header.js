import styled from "@emotion/styled";
import Logo from "../../../assets/rimac_logo.svg";
import Phone from "../../../assets/ic_phone.svg";
import CallUs from "../../../assets/call_us.svg";
import { colors } from "../../../constants/ColorStyles";

export default function Header() {
  return (
    <Navbar>
      <ContainerLeft>
        <img className="img_logo" src={Logo} alt="rimac_logo.svg" />
      </ContainerLeft>

      <ContainerRight>
        <Text>¿Tienes alguna duda?</Text>
        <img src={Phone} alt="phone.svg" />
        <img src={CallUs} alt="call_us.svg" />
      </ContainerRight>
    </Navbar>
  );
}

const Navbar = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 0px;
  padding: 0px 0px 0px 0px;
  background: ${colors.White};
  .img_logo {
    padding-right: 200px;
  }
  @media (max-width: 768px) {
    background: ${colors.Purple};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .img_logo {
      padding-right: 0px;
    }
  }
`;

const ContainerLeft = styled.div`
  width: 40%;
  display: flex;
  padding: 20px 10px;
  margin: 0px;
  justify-content: center;
  background: ${colors.Purple};
  @media (max-width: 768px) {
    width: 30%;
  }
`;

const Text = styled.p`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;
  margin: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  @media (max-width: 768px) {
    display: none !important;
  }
`;

const ContainerRight = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8.8px;
  padding: 0px 10px;
  margin: 0px;
  @media (max-width: 768px) {
    width: 30%;
    flex-direction: row;
  }
`;
