import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NonResults from "./pages/NonResults";
import Navbar from "./components/Navbar";
import NoMatch from "./pages/NoMatch";


const App = () =>
  <Router>
    <div>
      <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results/nonuser/:stock" component={NonResults} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>;

export default App;