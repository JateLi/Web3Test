import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "./components/pages/login";
import { Home } from "./components/pages/home";
import { Edit } from "./components/pages/edit";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/edit/:id" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
