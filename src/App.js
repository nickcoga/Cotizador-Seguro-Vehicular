import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarData from "./screens/car_data/CarData";
import Home from "./screens/home/Home";

function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} setUser={setUser} />}
        />
        <Route
          path="/cardata/:id"
          render={(props) => <CarData {...props} user={user} />}
        />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
