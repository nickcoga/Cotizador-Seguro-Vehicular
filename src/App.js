import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DatosAuto from "./screens/Datos_Auto/Datos_Auto/DatosAuto";
import Home from "./screens/home/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/datosauto/:id" component={DatosAuto} />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
