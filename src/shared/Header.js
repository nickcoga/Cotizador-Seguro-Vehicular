import styled from "@emotion/styled";
import Logo from "../assets/rimac_logo.svg";
import Phone from "../assets/ic_phone.svg";
import { colors } from "../constants/ColorStyles.js";

export default function Header({ showBorder }) {
  return (
    <Navbar showBorder={showBorder}>
      <ContainerLeft>
        <img className="img_logo" src={Logo} alt="rimac_logo.svg" />
      </ContainerLeft>

      <ContainerRight>
        <Text className="desktop-only gray">¿Tienes alguna duda?</Text>
        <img src={Phone} alt="phone.svg" />
        <TextR className="mobile-only">Llámanos</TextR>
        <TextR className="desktop-only">(01) 411 6001</TextR>
      </ContainerRight>
    </Navbar>
  );
}

const Navbar = styled.div`
  border-bottom: ${({ showBorder }) =>
    showBorder ? `1px solid ${colors.BorderGray};` : "initial;"}
  display: flex;
  align-items: center;
  height: 56px;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    height: 64px;
  }
`;

const ContainerLeft = styled.div`
  margin-left: 9vw;
`;

const ContainerRight = styled.div`
  margin-right: 9vw;
  display: flex;
  align-items: center;
  gap: 2.4vw;

  .mobile-only {
    display: initial;
  }
  .desktop-only {
    display: none;
  }

  .gray {
    color: ${colors.Gray};
  }

  @media (min-width: 768px) {
    .mobile-only {
      display: none;
    }
    .desktop-only {
      display: initial;
    }
  }
`;

const Text = styled.p`
  color: ${colors.Purple};
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
`;

const TextR = styled.p`
  color: ${colors.Purple};
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`;
