import React, { Fragment } from "react";
import Banner from "./components/Banner";
import FormLogin from "./components/FormLogin";
import Header from "../../shared/Header.js";

export default function Home({ setUser, plate, setPlate }) {
  return (
    <Fragment>
      <Header showBorder={false} />
      <Banner />
      <FormLogin setUser={setUser} plate={plate} setPlate={setPlate} />
    </Fragment>
  );
}
