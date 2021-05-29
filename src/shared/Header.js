import styled from "@emotion/styled";
import Logo from ".././assets/rimac_logo.svg";
import Phone from ".././assets/ic_phone.svg";
import { colors } from ".././constants/ColorStyles.js";
// TODO: move Header component to shre
// mobile: 360 x 56
// desktop header: 1360 x 64

export default function Header({ showBorder }) {
  return (
    <Navbar showBorder={showBorder}>
      <ContainerLeft>
        <img className="img_logo" src={Logo} alt="rimac_logo.svg" />
      </ContainerLeft>

      <ContainerRight>
        <Text className="desktop-only gray">¿Tienes alguna duda?</Text>
        <img src={Phone} alt="phone.svg" />
        <Text className="mobile-only">Llámanos</Text>
        <Text className="desktop-only">(01) 411 6001</Text>
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
  // TODO: change color

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
`;
