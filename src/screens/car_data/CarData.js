import React, { Fragment } from "react";
import Header from "../../shared/Header";
import FormCarData from "./components/FormCarData";
import Stepper from "../../shared/Stepper.js";

export default function CarData({ user, year, setYear, brand, setBrand }) {
  return (
    <Fragment>
      <Header showBorder={true} />
      <Stepper />
      <FormCarData
        user={user}
        year={year}
        setYear={setYear}
        brand={brand}
        setBrand={setBrand}
      />
    </Fragment>
  );
}
