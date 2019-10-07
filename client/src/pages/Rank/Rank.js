import React, { Component } from "react";
import "./Rank.css";
import RankExp from "../../components/RankExp";

class Rank extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
// Save the SM.JPG in Excel 100% zoom on laptop screen//
  render() {
    return (
      <div className="container">
        <h3>EarningStats Predictability Rank<hr /></h3>
        <img className="rankImg" src={require("./SM.JPG")} alt="EarningStats Predictability Rank" useMap="#stockmap" />
          
        <map name="stockmap">
          <area shape="rect" coords="3,50,75,25" href="http://www.earningstats.com/results/AGN" alt="" / >
          <area shape="rect" coords="3,75,75,50" href="http://www.earningstats.com/results/CVX" alt="" / >
          <area shape="rect" coords="3,100,75,75" href="http://www.earningstats.com/results/JNJ" alt="" / >
          <area shape="rect" coords="3,125,75,100" href="http://www.earningstats.com/results/C" alt="" / >
          <area shape="rect" coords="3,150,75,125" href="http://www.earningstats.com/results/HD" alt="" / >
          <area shape="rect" coords="3,187,75,158" href="http://www.earningstats.com/results/JPM" alt="" / >
          <area shape="rect" coords="3,212,75,187" href="http://www.earningstats.com/results/XOM" alt="" / >
          <area shape="rect" coords="3,241,75,212" href="http://www.earningstats.com/results/ADP" alt="" / >
          <area shape="rect" coords="3,266,75,241" href="http://www.earningstats.com/results/AMGN" alt="" / >
          <area shape="rect" coords="3,295,75,266" href="http://www.earningstats.com/results/AXP" alt="" / >
          <area shape="rect" coords="3,320,75,295" href="http://www.earningstats.com/results/BA" alt="" / >
          <area shape="rect" coords="3,349,75,320" href="http://www.earningstats.com/results/DIS" alt="" / >
          <area shape="rect" coords="3,374,75,349" href="http://www.earningstats.com/results/DPZ" alt="" / >
          <area shape="rect" coords="3,403,75,374" href="http://www.earningstats.com/results/GS" alt="" / >
          <area shape="rect" coords="3,428,75,403" href="http://www.earningstats.com/results/MCD" alt="" / >
          <area shape="rect" coords="3,457,75,428" href="http://www.earningstats.com/results/PEP" alt="" / >
          <area shape="rect" coords="3,484,75,457" href="http://www.earningstats.com/results/UNH" alt="" / >
          <area shape="rect" coords="3,511,75,484" href="http://www.earningstats.com/results/UPS" alt="" / >
          <area shape="rect" coords="3,538,75,511" href="http://www.earningstats.com/results/V" alt="" / >
          <area shape="rect" coords="3,565,75,538" href="http://www.earningstats.com/results/WYNN" alt="" / >
          <area shape="rect" coords="3,592,75,565" href="http://www.earningstats.com/results/XLNX" alt="" / >
          <area shape="rect" coords="3,619,75,592" href="http://www.earningstats.com/results/AVGO" alt="" / >
          <area shape="rect" coords="3,646,75,619" href="http://www.earningstats.com/results/BIIB" alt="" / >
          <area shape="rect" coords="3,673,75,646" href="http://www.earningstats.com/results/COST" alt="" / >
          <area shape="rect" coords="3,700,75,673" href="http://www.earningstats.com/results/CRM" alt="" / >
          <area shape="rect" coords="3,727,75,700" href="http://www.earningstats.com/results/DE" alt="" / >
          <area shape="rect" coords="3,754,75,727" href="http://www.earningstats.com/results/FDX" alt="" / >
          <area shape="rect" coords="3,781,75,754" href="http://www.earningstats.com/results/GILD" alt="" / >
          <area shape="rect" coords="3,808,75,781" href="http://www.earningstats.com/results/SBUX" alt="" / >
          <area shape="rect" coords="3,835,75,808" href="http://www.earningstats.com/results/SQ" alt="" / >
          <area shape="rect" coords="3,862,75,835" href="http://www.earningstats.com/results/TTWO" alt="" / >
          <area shape="rect" coords="3,889,75,862" href="http://www.earningstats.com/results/TXN" alt="" / >
          <area shape="rect" coords="3,916,75,889" href="http://www.earningstats.com/results/WMT" alt="" / >
          <area shape="rect" coords="3,943,75,916" href="http://www.earningstats.com/results/ACN" alt="" / >
          <area shape="rect" coords="3,970,75,943" href="http://www.earningstats.com/results/ADBE" alt="" / >
          <area shape="rect" coords="3,997,75,970" href="http://www.earningstats.com/results/MA" alt="" / >
          <area shape="rect" coords="3,1024,75,997" href="http://www.earningstats.com/results/NKE" alt="" / >
          <area shape="rect" coords="3,1051,75,1024" href="http://www.earningstats.com/results/NOW" alt="" / >
          <area shape="rect" coords="3,1078,75,1051" href="http://www.earningstats.com/results/NVDA" alt="" / >
          <area shape="rect" coords="3,1105,75,1078" href="http://www.earningstats.com/results/QCOM" alt="" / >
          <area shape="rect" coords="3,1132,75,1105" href="http://www.earningstats.com/results/TGT" alt="" / >
          <area shape="rect" coords="3,1159,75,1132" href="http://www.earningstats.com/results/TSLA" alt="" / >
          <area shape="rect" coords="3,1186,75,1159" href="http://www.earningstats.com/results/AAPL" alt="" / >
          <area shape="rect" coords="3,1213,75,1186" href="http://www.earningstats.com/results/ADSK" alt="" / >
          <area shape="rect" coords="3,1240,75,1213" href="http://www.earningstats.com/results/BABA" alt="" / >
          <area shape="rect" coords="3,1267,75,1240" href="http://www.earningstats.com/results/CAT" alt="" / >
          <area shape="rect" coords="3,1294,75,1267" href="http://www.earningstats.com/results/CMG" alt="" / >
          <area shape="rect" coords="3,1321,75,1294" href="http://www.earningstats.com/results/EA" alt="" / >
          <area shape="rect" coords="3,1348,75,1321" href="http://www.earningstats.com/results/IBM" alt="" / >
          <area shape="rect" coords="3,1375,75,1348" href="http://www.earningstats.com/results/LOW" alt="" / >
          <area shape="rect" coords="3,1402,75,1375" href="http://www.earningstats.com/results/MSFT" alt="" / >
          <area shape="rect" coords="3,1429,75,1402" href="http://www.earningstats.com/results/PYPL" alt="" / >
          <area shape="rect" coords="3,1456,75,1429" href="http://www.earningstats.com/results/STZ" alt="" / >
          <area shape="rect" coords="3,1483,75,1456" href="http://www.earningstats.com/results/TWLO" alt="" / >
          <area shape="rect" coords="3,1537,75,1510" href="http://www.earningstats.com/results/BIDU" alt="" / >
          <area shape="rect" coords="3,1564,75,1537" href="http://www.earningstats.com/results/NTES" alt="" / >
          <area shape="rect" coords="3,1591,75,1564" href="http://www.earningstats.com/results/ULTA" alt="" / >
          <area shape="rect" coords="3,1618,75,1591" href="http://www.earningstats.com/results/FB" alt="" / >
          <area shape="rect" coords="3,1645,75,1618" href="http://www.earningstats.com/results/LULU" alt="" / >
          <area shape="rect" coords="3,1537,75,1510" href="http://www.earningstats.com/results/ROKU" alt="" / >
          <area shape="rect" coords="3,1564,75,1537" href="http://www.earningstats.com/results/ANET" alt="" / >
          <area shape="rect" coords="3,1591,75,1564" href="http://www.earningstats.com/results/GOOGL" alt="" / >
          <area shape="rect" coords="3,1618,75,1591" href="http://www.earningstats.com/results/AMZN" alt="" / >
          <area shape="rect" coords="3,1645,75,1618" href="http://www.earningstats.com/results/BKNG" alt="" / >
          <area shape="rect" coords="3,1645,75,1618" href="http://www.earningstats.com/results/NFLX" alt="" / >




        </map>

        <RankExp />
      </div>   
    );
  }
}
          
export default Rank;