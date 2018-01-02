import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import TotalPercentUp from "./pages/Sorted/totalPercentUp";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";

const App = () =>
  <Router>
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sorted/totalpercentup" component={TotalPercentUp} />
          <Route exact path="/results/:stock" component={Results} />
          <Route component={NoMatch} />
        </Switch>
  
    </div>
  </Router>;

export default App;