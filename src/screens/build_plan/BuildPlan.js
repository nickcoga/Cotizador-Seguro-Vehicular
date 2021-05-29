import React, { Fragment } from "react";
import Header from "../../shared/Header";
import Stepper from "../../shared/Stepper";
import Coverage from "./components/Coverage";
import PlanCoverage from "./components/PlanCoverage";

export default function BuildPlan({ plate, year, brand }) {
  return (
    <Fragment>
      <Header />
      <Stepper />
      <Coverage plate={plate} year={year} brand={brand} />
      <PlanCoverage />
    </Fragment>
  );
}
