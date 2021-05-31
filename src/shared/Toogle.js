import styled from "@emotion/styled";
import { colors } from "../constants/ColorStyles";

export default function Toogle() {
  const handleChange = () => {
    // setActive(!active); // TODO: finish the toggle
  };

  return (
    <div className="container">
      <Content className="only--mobile">
        <label className="toogle switch">
          <input type="checkbox" onChange={handleChange} /> <div></div>
        </label>
      </Content>
    </div>
  );
}

const Content = styled.div`
  display: initial;
  padding: 16px 5px;
  margin: 0;
  .img1 {
    width: 220px;
  }
  .img2 {
    width: 100px;
  }
  .toogle {
    color: white;
  }

  .switch input {
    position: absolute;
    opacity: 0;
  }

  .switch {
    display: inline-block;
    font-size: 20px; /* 1 */
    height: 1em;
    width: 2em;
    background: ${colors.Green};
    border-radius: 1em;
  }

  .switch div {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #fff;
    box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
    -webkit-transition: all 300ms;
    -moz-transition: all 300ms;
    transition: all 300ms;
  }

  .switch input:checked + div {
    -webkit-transform: translate3d(100%, 0, 0);
    -moz-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
