import React, { Fragment, useState } from "react";
// import { useParams } from "react-router-dom";
import Header from "../../shared/Header";
import FormCarData from "./components/FormCarData";
import Stepper from "./components/Stepper";

export default function CarData({ user }) {
  return (
    <Fragment>
      <Header showBorder={true} />
      <Stepper />
      <FormCarData user={user} />
    </Fragment>
  );
}
