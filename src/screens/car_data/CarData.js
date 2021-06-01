import React, { Fragment } from "react";
import Header from "../../shared/Header";
import FormCarData from "./components/FormCarData";
import Stepper from "../../shared/Stepper";
import ButtonReturn from "../../shared/ButtonReturn";

export default function CarData({
  user,
  year,
  setYear,
  brand,
  setBrand,
  enabledIndex,
  setEnabledIndex,
}) {
  return (
    <Fragment>
      <Header showBorder={true} />
      <Stepper enabledIndex={enabledIndex} setEnabledIndex={setEnabledIndex} />
      <ButtonReturn />
      <FormCarData
        user={user}
        year={year}
        setYear={setYear}
        brand={brand}
        setBrand={setBrand}
        setEnabledIndex={setEnabledIndex}
      />
    </Fragment>
  );
}
