import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/pages/login";
import { Home } from "./components/pages/home";
import { Edit } from "./components/pages/edit";
import { Send } from "./components/pages/send";

function getLibrary(provider: any) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/send/:id" component={Send} />
        </Switch>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
