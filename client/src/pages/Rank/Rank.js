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
          <area shape="rect" coords="3,52,75,25" href="http://www.earningstats.com/results/CVX" alt="" / >
          <area shape="rect" coords="3,80,75,53" href="http://www.earningstats.com/results/JNJ" alt="" / >
          <area shape="rect" coords="3,108,75,81" href="http://www.earningstats.com/results/C" alt="" / >
          <area shape="rect" coords="3,135,75,109" href="http://www.earningstats.com/results/JPM" alt="" / >
          <area shape="rect" coords="3,162,75,135" href="http://www.earningstats.com/results/GS" alt="" / >
          <area shape="rect" coords="3,189,75,163" href="http://www.earningstats.com/results/HD" alt="" / >
          <area shape="rect" coords="3,215,75,189" href="http://www.earningstats.com/results/XOM" alt="" / >
          <area shape="rect" coords="3,244,75,215" href="http://www.earningstats.com/results/MCD" alt="" / >
          <area shape="rect" coords="3,270,75,244" href="http://www.earningstats.com/results/PEP" alt="" / >
          <area shape="rect" coords="3,298,75,270" href="http://www.earningstats.com/results/WYNN" alt="" / >
          <area shape="rect" coords="3,324,75,298" href="http://www.earningstats.com/results/MU" alt="" / >
          <area shape="rect" coords="3,351,75,324" href="http://www.earningstats.com/results/AXP" alt="" / >
          <area shape="rect" coords="3,377,75,351" href="http://www.earningstats.com/results/BA" alt="" / >
          <area shape="rect" coords="3,403,75,377" href="http://www.earningstats.com/results/UPS" alt="" / >
          <area shape="rect" coords="3,431,75,403" href="http://www.earningstats.com/results/DIS" alt="" / >
          <area shape="rect" coords="3,459,75,431" href="http://www.earningstats.com/results/FDX" alt="" / >
          <area shape="rect" coords="3,487,75,459" href="http://www.earningstats.com/results/AMGN" alt="" / >
          <area shape="rect" coords="3,514,75,487" href="http://www.earningstats.com/results/CELG" alt="" / >
          <area shape="rect" coords="3,541,75,514" href="http://www.earningstats.com/results/V" alt="" / >
          <area shape="rect" coords="3,568,75,541" href="http://www.earningstats.com/results/COST" alt="" / >
          <area shape="rect" coords="3,594,75,568" href="http://www.earningstats.com/results/CRM" alt="" / >
          <area shape="rect" coords="3,622,75,594" href="http://www.earningstats.com/results/DE" alt="" / >
          <area shape="rect" coords="3,649,75,622" href="http://www.earningstats.com/results/SQ" alt="" / >
          <area shape="rect" coords="3,676,75,649" href="http://www.earningstats.com/results/TGT" alt="" / >
          <area shape="rect" coords="3,703,75,676" href="http://www.earningstats.com/results/WMT" alt="" / >
          <area shape="rect" coords="3,729,75,703" href="http://www.earningstats.com/results/AVGO" alt="" / >
          <area shape="rect" coords="3,756,75,729" href="http://www.earningstats.com/results/TXN" alt="" / >
          <area shape="rect" coords="3,783,75,756" href="http://www.earningstats.com/results/NVDA" alt="" / >
          <area shape="rect" coords="3,810,75,783" href="http://www.earningstats.com/results/ADBE" alt="" / >
          <area shape="rect" coords="3,836,75,810" href="http://www.earningstats.com/results/GILD" alt="" / >
          <area shape="rect" coords="3,863,75,836" href="http://www.earningstats.com/results/TSLA" alt="" / >
          <area shape="rect" coords="3,890,75,863" href="http://www.earningstats.com/results/EA" alt="" / >
          <area shape="rect" coords="3,917,75,890" href="http://www.earningstats.com/results/CAT" alt="" / >
          <area shape="rect" coords="3,944,75,917" href="http://www.earningstats.com/results/NKE" alt="" / >
          <area shape="rect" coords="3,971,75,944" href="http://www.earningstats.com/results/STZ" alt="" / >
          <area shape="rect" coords="3,998,75,971" href="http://www.earningstats.com/results/ADSK" alt="" / >
          <area shape="rect" coords="3,1025,75,988" href="http://www.earningstats.com/results/CMG" alt="" / >
          <area shape="rect" coords="3,1052,75,1025" href="http://www.earningstats.com/results/MSFT" alt="" / >
          <area shape="rect" coords="3,1079,75,1052" href="http://www.earningstats.com/results/IBM" alt="" / >
          <area shape="rect" coords="3,1106,75,1079" href="http://www.earningstats.com/results/BABA" alt="" / >
          <area shape="rect" coords="3,1133,75,1106" href="http://www.earningstats.com/results/AAPL" alt="" / >
          <area shape="rect" coords="3,1160,75,1133" href="http://www.earningstats.com/results/PYPL" alt="" / >
          <area shape="rect" coords="3,1187,75,1160" href="http://www.earningstats.com/results/BIDU" alt="" / >
          <area shape="rect" coords="3,1214,75,1187" href="http://www.earningstats.com/results/FB" alt="" / >
          <area shape="rect" coords="3,1241,75,1214" href="http://www.earningstats.com/results/NTES" alt="" / >
          <area shape="rect" coords="3,1268,75,1241" href="http://www.earningstats.com/results/GOOGL" alt="" / >
          <area shape="rect" coords="3,1295,75,1268" href="http://www.earningstats.com/results/LULU" alt="" / >
          <area shape="rect" coords="3,1322,75,1295" href="http://www.earningstats.com/results/AMZN" alt="" / >
          <area shape="rect" coords="3,1349,75,1322" href="http://www.earningstats.com/results/BKNG" alt="" / >
          <area shape="rect" coords="3,1376,75,1349" href="http://www.earningstats.com/results/NFLX" alt="" / >

        </map>

        <RankExp />
      </div>   
    );
  }
}
          
export default Rank;