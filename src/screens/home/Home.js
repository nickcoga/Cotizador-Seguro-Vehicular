import React, { Fragment } from "react";
import Banner from "./components/Banner";
import FormLogin from "./components/FormLogin";
import Header from "../../shared/Header.js";

export default function Home({ setUser }) {
  return (
    <Fragment>
      <Header showBorder={false} />
      <Banner />
      <FormLogin setUser={setUser} />
    </Fragment>
  );
}
