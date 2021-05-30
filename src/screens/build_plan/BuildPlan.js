import React, { Fragment } from "react";
import ButtonReturn from "../../shared/ButtonReturn";
import Header from "../../shared/Header";
import Stepper from "../../shared/Stepper";
import Coverage from "./components/Coverage";
import PlanCoverage from "./components/PlanCoverage";
import ContentPrice from "./components/ContentPrice";

export default function BuildPlan({ plate, year, brand }) {
  return (
    <Fragment>
      <Header />
      <Stepper />
      <ButtonReturn />
      <Coverage plate={plate} year={year} brand={brand} />
      <PlanCoverage />
      <ContentPrice />
    </Fragment>
  );
}
