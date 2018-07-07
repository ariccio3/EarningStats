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
          <area shape="rect" coords="3,108,75,81" href="http://www.earningstats.com/results/XOM" alt="" / >
          <area shape="rect" coords="3,135,50,109" href="http://www.earningstats.com/results/HD" alt="" / >
          <area shape="rect" coords="3,162,50,135" href="http://www.earningstats.com/results/MU" alt="" / >
          <area shape="rect" coords="3,189,50,163" href="http://www.earningstats.com/results/C" alt="" / >
          <area shape="rect" coords="3,215,50,189" href="http://www.earningstats.com/results/MCD" alt="" / >
          <area shape="rect" coords="3,244,50,215" href="http://www.earningstats.com/results/GS" alt="" / >
          <area shape="rect" coords="3,270,50,244" href="http://www.earningstats.com/results/WYNN" alt="" / >
          <area shape="rect" coords="3,298,50,270" href="http://www.earningstats.com/results/JPM" alt="" / >
          <area shape="rect" coords="3,324,50,298" href="http://www.earningstats.com/results/PEP" alt="" / >
          <area shape="rect" coords="3,351,50,324" href="http://www.earningstats.com/results/BA" alt="" / >
          <area shape="rect" coords="3,377,50,351" href="http://www.earningstats.com/results/AXP" alt="" / >
          <area shape="rect" coords="3,403,50,377" href="http://www.earningstats.com/results/UPS" alt="" / >
          <area shape="rect" coords="3,431,50,403" href="http://www.earningstats.com/results/AMGN" alt="" / >
          <area shape="rect" coords="3,459,50,431" href="http://www.earningstats.com/results/DIS" alt="" / >
          <area shape="rect" coords="3,487,50,459" href="http://www.earningstats.com/results/TSLA" alt="" / >
          <area shape="rect" coords="3,514,50,487" href="http://www.earningstats.com/results/V" alt="" / >
          <area shape="rect" coords="3,541,50,514" href="http://www.earningstats.com/results/CELG" alt="" / >
          <area shape="rect" coords="3,568,50,541" href="http://www.earningstats.com/results/FDX" alt="" / >
          <area shape="rect" coords="3,594,50,568" href="http://www.earningstats.com/results/TGT" alt="" / >
          <area shape="rect" coords="3,622,50,594" href="http://www.earningstats.com/results/AVGO" alt="" / >
          <area shape="rect" coords="3,649,50,622" href="http://www.earningstats.com/results/COST" alt="" / >
          <area shape="rect" coords="3,676,50,649" href="http://www.earningstats.com/results/CRM" alt="" / >
          <area shape="rect" coords="3,703,50,676" href="http://www.earningstats.com/results/WMT" alt="" / >
          <area shape="rect" coords="3,729,50,703" href="http://www.earningstats.com/results/DE" alt="" / >
          <area shape="rect" coords="3,756,50,729" href="http://www.earningstats.com/results/NVDA" alt="" / >
          <area shape="rect" coords="3,783,50,756" href="http://www.earningstats.com/results/GILD" alt="" / >
          <area shape="rect" coords="3,810,50,783" href="http://www.earningstats.com/results/ADBE" alt="" / >
          <area shape="rect" coords="3,836,50,810" href="http://www.earningstats.com/results/STZ" alt="" / >
          <area shape="rect" coords="3,863,50,836" href="http://www.earningstats.com/results/BABA" alt="" / >
          <area shape="rect" coords="3,890,50,863" href="http://www.earningstats.com/results/NKE" alt="" / >
          <area shape="rect" coords="3,917,50,890" href="http://www.earningstats.com/results/CMG" alt="" / >
          <area shape="rect" coords="3,944,50,917" href="http://www.earningstats.com/results/CAT" alt="" / >
          <area shape="rect" coords="3,971,50,944" href="http://www.earningstats.com/results/FB" alt="" / >
          <area shape="rect" coords="3,998,50,971" href="http://www.earningstats.com/results/ADSK" alt="" / >
          <area shape="rect" coords="3,1025,50,988" href="http://www.earningstats.com/results/MSFT" alt="" / >
          <area shape="rect" coords="3,1052,50,1025" href="http://www.earningstats.com/results/IBM" alt="" / >
          <area shape="rect" coords="3,1079,50,1052" href="http://www.earningstats.com/results/AAPL" alt="" / >
          <area shape="rect" coords="3,1106,50,1079" href="http://www.earningstats.com/results/BIDU" alt="" / >
          <area shape="rect" coords="3,1133,50,1106" href="http://www.earningstats.com/results/NTES" alt="" / >
          <area shape="rect" coords="3,1160,50,1133" href="http://www.earningstats.com/results/GOOGL" alt="" / >
          <area shape="rect" coords="3,1187,56,1160" href="http://www.earningstats.com/results/LULU" alt="" / >
          <area shape="rect" coords="3,1214,50,1187" href="http://www.earningstats.com/results/AMZN" alt="" / >
          <area shape="rect" coords="3,1241,50,1214" href="http://www.earningstats.com/results/NFLX" alt="" / >
          <area shape="rect" coords="3,1268,50,1241" href="http://www.earningstats.com/results/BKNG" alt="" / >
        </map>

        <RankExp />
      </div>   
    );
  }
}
          
export default Rank;