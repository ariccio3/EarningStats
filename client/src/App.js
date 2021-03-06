import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "./pages/Home";
import Home from "./pages/Dashboard";
import Glossary from "./pages/Glossary";
import EarningsCalendar from "./pages/EarningsCalendar";
/*import Results from "./pages/Results";
import Annual from "./pages/Annual";
import TotalPercentUp from "./pages/Sorted/totalPercentUp";
import PercentInside from "./pages/Sorted/percentInside";
import PercentHalfEM from "./pages/Sorted/percentHalfEM";
import DoubleEM from "./pages/Sorted/doubleEM";
import BackToBack from "./pages/Sorted/backToBack";
import OutsidePercentUp from "./pages/Sorted/outsidePercentUp";
import OutsidePercentDown from "./pages/Sorted/outsidePercentDown";
import AvgPercentEM from "./pages/Sorted/avgPercentEM";
import Q1PercentInside from "./pages/Sorted/q1PercentInside";
import Q2PercentInside from "./pages/Sorted/q2PercentInside";
import Q3PercentInside from "./pages/Sorted/q3PercentInside";
import Q4PercentInside from "./pages/Sorted/q4PercentInside";
import AmOver2XemPercent from "./pages/Sorted/amOver2XemPercent";
import AmUnder2XemPercent from "./pages/Sorted/amUnder2XemPercent";
import AmUnder175XemPercent from "./pages/Sorted/amUnder175XemPercent";
import AmUnder150XemPercent from "./pages/Sorted/amUnder150XemPercent";
import AmUnder125XemPercent from "./pages/Sorted/amUnder125XemPercent";
import UnderEMPercent from "./pages/Sorted/underEMPercent";
import AmUnder75XemPercent from "./pages/Sorted/amUnder75XemPercent";
import AboveAvgEM from "./pages/Sorted/aboveAvgEM";
import BelowAvgEM from "./pages/Sorted/belowAvgEM";
import ProsCons from "./pages/ProsCons";
import Setup from "./pages/Setup";
import Rank from "./pages/Rank";
import Dashboard from "./pages/Dashboard";
*/
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";

const App = () =>
  <Router>
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/glossary" component={Glossary} />          
          <Route exact path="/earningscalendar" component={EarningsCalendar} />          
          {/*<Route exact path="/sorted/totalpercentup" component={TotalPercentUp} />
          <Route exact path="/results/:stock" component={Results} />
          <Route exact path="/annual" component={Annual} />
          <Route exact path="/sorted/percentinside" component={PercentInside} />
          <Route exact path="/sorted/percenthalfem" component={PercentHalfEM} />
          <Route exact path="/sorted/doubleem" component={DoubleEM} />
          <Route exact path="/sorted/backtoback" component={BackToBack} />
          <Route exact path="/sorted/outsidepercentup" component={OutsidePercentUp} />
          <Route exact path="/sorted/outsidepercentdown" component={OutsidePercentDown} />
          <Route exact path="/sorted/avgpercentem" component={AvgPercentEM} />
          <Route exact path="/sorted/q1percentinside" component={Q1PercentInside} />
          <Route exact path="/sorted/q2percentinside" component={Q2PercentInside} />
          <Route exact path="/sorted/q3percentinside" component={Q3PercentInside} />
          <Route exact path="/sorted/q4percentinside" component={Q4PercentInside} />
          <Route exact path="/sorted/amover2xempercent" component={AmOver2XemPercent} />
          <Route exact path="/sorted/amunder2xempercent" component={AmUnder2XemPercent} />
          <Route exact path="/sorted/amunder175xempercent" component={AmUnder175XemPercent} />
          <Route exact path="/sorted/amunder150xempercent" component={AmUnder150XemPercent} />
          <Route exact path="/sorted/amunder125xempercent" component={AmUnder125XemPercent} />
          <Route exact path="/sorted/underempercent" component={UnderEMPercent} />
          <Route exact path="/sorted/amunder75xempercent" component={AmUnder75XemPercent} />
          <Route exact path="/sorted/aboveavgem" component={AboveAvgEM} />
          <Route exact path="/sorted/belowavgem" component={BelowAvgEM} />
          <Route exact path="/proscons/:stock" component={ProsCons}  {...this.props}/>
          <Route exact path="/setup" component={Setup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/rank" component={Rank} /> */}         
          <Route component={NoMatch} />
          <Route exact path="sitemap.xml" />
        </Switch>
      <Footer />
    </div>
  </Router>;

export default App;