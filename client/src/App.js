import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import TotalPercentUp from "./pages/Sorted/totalPercentUp";
import PercentInside from "./pages/Sorted/percentInside";
import PercentHalfEM from "./pages/Sorted/percentHalfEM";
import DoubleEM from "./pages/Sorted/doubleEM";
import OutsidePercentUp from "./pages/Sorted/outsidePercentUp";
import OutsidePercentDown from "./pages/Sorted/outsidePercentDown";
import AvgPercentEM from "./pages/Sorted/avgPercentEM";
import Q1PercentInside from "./pages/Sorted/q1PercentInside";
import Q2PercentInside from "./pages/Sorted/q2PercentInside";
import Q3PercentInside from "./pages/Sorted/q3PercentInside";
import Q4PercentInside from "./pages/Sorted/q4PercentInside";
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
          <Route exact path="/sorted/percentinside" component={PercentInside} />
          <Route exact path="/sorted/percenthalfem" component={PercentHalfEM} />
          <Route exact path="/sorted/doubleem" component={DoubleEM} />
          <Route exact path="/sorted/outsidepercentup" component={OutsidePercentUp} />
          <Route exact path="/sorted/outsidepercentdown" component={OutsidePercentDown} />
          <Route exact path="/sorted/avgpercentem" component={AvgPercentEM} />
          <Route exact path="/sorted/q1percentinside" component={Q1PercentInside} />
          <Route exact path="/sorted/q2percentinside" component={Q2PercentInside} />
          <Route exact path="/sorted/q3percentinside" component={Q3PercentInside} />
          <Route exact path="/sorted/q4percentinside" component={Q4PercentInside} />
          <Route exact path="/results/:stock" component={Results} />
          <Route component={NoMatch} />
        </Switch>
  
    </div>
  </Router>;

export default App;