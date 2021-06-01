import React, { Fragment, useState } from "react";
import ButtonReturn from "../../shared/ButtonReturn";
import Header from "../../shared/Header";
import Stepper from "../../shared/Stepper";
import Coverage from "./components/Coverage";
import PlanCoverage from "./components/PlanCoverage";
import ContentPrice from "./components/ContentPrice";

export default function BuildPlan({ plate, year, brand, enabledIndex }) {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <Fragment>
      <Header showBorder />
      <Stepper enabledIndex={enabledIndex} />
      <ButtonReturn />
      <Coverage plate={plate} year={year} brand={brand} />
      <PlanCoverage
        toggle1={toggle1}
        toggle2={toggle2}
        toggle3={toggle3}
        setToggle1={setToggle1}
        setToggle2={setToggle2}
        setToggle3={setToggle3}
      />
      <ContentPrice toggle1={toggle1} toggle2={toggle2} toggle3={toggle3} />
    </Fragment>
  );
}
