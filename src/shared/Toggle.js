import { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../constants/ColorStyles";

export default function Toggle({ toggleName }) {
  const [checked, setChecked] = useState();

  const handleChange = () => {
    // setActive(!active); // TODO: finish the toggle
    setChecked(!checked);
  };

  return (
    <Container>
      <input
        type="checkbox"
        name={toggleName}
        className="mobileToggle"
        id={toggleName}
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor={toggleName}></label>
    </Container>
  );
}

const Container = styled.div`
  input.mobileToggle {
    opacity: 0;
    position: absolute;
  }
  input.mobileToggle + label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition: 0.4s ease;
    height: 30px;
    width: 50px;
    border: 1px solid #e4e4e4;
    border-radius: 60px;
  }
  input.mobileToggle + label:before {
    content: "";
    position: absolute;
    display: block;
    transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
    height: 30px;
    width: 51px;
    top: 0;
    left: 0;
    border-radius: 30px;
  }
  input.mobileToggle + label:after {
    content: "";
    position: absolute;
    display: block;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0px 0 rgba(0, 0, 0, 0.04),
      0 4px 9px rgba(0, 0, 0, 0.13), 0 3px 3px rgba(0, 0, 0, 0.05);
    transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
    background: whitesmoke;
    height: 28px;
    width: 28px;
    top: 1px;
    left: 0px;
    border-radius: 60px;
  }
  input.mobileToggle:checked + label:before {
    background: #2ecc71;
    transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
  }
  input.mobileToggle:checked + label:after {
    left: 24px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
