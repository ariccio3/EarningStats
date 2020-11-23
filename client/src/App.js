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
       
          <Route component={NoMatch} />
          <Route exact path="sitemap.xml" />
        </Switch>
      <Footer />
    </div>
  </Router>;

export default App;