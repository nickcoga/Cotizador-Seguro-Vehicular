import React, { Fragment } from "react";
import Banner from "./components/Banner";
import FormLogin from "./components/FormLogin";
import Header from "../../shared/Header.js";

export default function Home() {
  return (
    <Fragment>
      <Header showBorder={false} />
      <Banner />
      <FormLogin />
    </Fragment>
  );
}
