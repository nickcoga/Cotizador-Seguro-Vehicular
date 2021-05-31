import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BuildPlan from "./screens/build_plan/BuildPlan";
import CarData from "./screens/car_data/CarData";
import Home from "./screens/home/Home";
import Thanks from "./screens/thanks/Thanks";

function App() {
  const [user, setUser] = useState();
  const [plate, setPlate] = useState();
  const [year, setYear] = useState(2019);
  const [brand, setBrand] = useState("Wolkswagen");
  const [enabledIndex, setEnabledIndex] = useState(1);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
              setUser={setUser}
              plate={plate}
              setPlate={setPlate}
            />
          )}
        />
        <Route
          path="/cardata/:id"
          render={(props) => (
            <CarData
              {...props}
              user={user}
              year={year}
              setYear={setYear}
              brand={brand}
              setBrand={setBrand}
              enabledIndex={enabledIndex}
              setEnabledIndex={setEnabledIndex}
            />
          )}
        />

        <Route
          path="/buildplan"
          render={(props) => (
            <BuildPlan
              {...props}
              plate={plate}
              year={year}
              brand={brand}
              enabledIndex={enabledIndex}
            />
          )}
        />
        <Route path="/thanks" component={Thanks} />
      </Switch>
    </Router>
  );
}

export default App;
