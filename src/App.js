import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarData from "./screens/car_data/CarData";
import Home from "./screens/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/datosauto/:id" component={CarData} />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
