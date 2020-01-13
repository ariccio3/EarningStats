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
          <area shape="rect" coords="0,50,75,25" href="http://www.earningstats.com/results/CVX" alt="" / >
          <area shape="rect" coords="0,75,75,50" href="http://www.earningstats.com/results/JNJ" alt="" / >
          <area shape="rect" coords="0,100,75,75" href="http://www.earningstats.com/results/AGN" alt="" / >
          <area shape="rect" coords="0,125,75,100" href="http://www.earningstats.com/results/C" alt="" / >
          <area shape="rect" coords="0,150,75,125" href="http://www.earningstats.com/results/XOM" alt="" / >
          <area shape="rect" coords="0,175,75,150" href="http://www.earningstats.com/results/HD" alt="" / >
          <area shape="rect" coords="0,200,75,175" href="http://www.earningstats.com/results/MCD" alt="" / >
          <area shape="rect" coords="0,225,75,200" href="http://www.earningstats.com/results/JPM" alt="" / >
          <area shape="rect" coords="0,250,75,225" href="http://www.earningstats.com/results/ADP" alt="" / >
          <area shape="rect" coords="0,275,75,250" href="http://www.earningstats.com/results/AMGN" alt="" / >
          <area shape="rect" coords="0,300,75,275" href="http://www.earningstats.com/results/AXP" alt="" / >
          <area shape="rect" coords="0,325,75,300" href="http://www.earningstats.com/results/BA" alt="" / >
          <area shape="rect" coords="0,350,75,325" href="http://www.earningstats.com/results/DIS" alt="" / >
          <area shape="rect" coords="0,375,75,350" href="http://www.earningstats.com/results/GS" alt="" / >
          <area shape="rect" coords="0,400,75,375" href="http://www.earningstats.com/results/PEP" alt="" / >
          <area shape="rect" coords="0,425,75,400" href="http://www.earningstats.com/results/V" alt="" / >
          <area shape="rect" coords="0,450,75,425" href="http://www.earningstats.com/results/WYNN" alt="" / >
          <area shape="rect" coords="0,475,75,450" href="http://www.earningstats.com/results/DPZ" alt="" / >
          <area shape="rect" coords="0,500,75,475" href="http://www.earningstats.com/results/UPS" alt="" / >
          <area shape="rect" coords="0,525,75,500" href="http://www.earningstats.com/results/XLNX" alt="" / >
          <area shape="rect" coords="0,550,75,525" href="http://www.earningstats.com/results/UNH" alt="" / >
          <area shape="rect" coords="0,575,75,550" href="http://www.earningstats.com/results/AVGO" alt="" / >
          <area shape="rect" coords="0,600,75,575" href="http://www.earningstats.com/results/BIIB" alt="" / >
          <area shape="rect" coords="0,625,75,600" href="http://www.earningstats.com/results/COST" alt="" / >
          <area shape="rect" coords="0,650,75,625" href="http://www.earningstats.com/results/CRM" alt="" / >
          <area shape="rect" coords="0,675,75,650" href="http://www.earningstats.com/results/DE" alt="" / >
          <area shape="rect" coords="0,700,75,675" href="http://www.earningstats.com/results/FDX" alt="" / >
          <area shape="rect" coords="0,725,75,700" href="http://www.earningstats.com/results/SBUX" alt="" / >
          <area shape="rect" coords="0,750,75,725" href="http://www.earningstats.com/results/SQ" alt="" / >
          <area shape="rect" coords="0,775,75,750" href="http://www.earningstats.com/results/TTWO" alt="" / >
          <area shape="rect" coords="0,800,75,775" href="http://www.earningstats.com/results/WMT" alt="" / >
          <area shape="rect" coords="0,825,75,800" href="http://www.earningstats.com/results/GILD" alt="" / >
          <area shape="rect" coords="0,850,75,825" href="http://www.earningstats.com/results/TXN" alt="" / >
          <area shape="rect" coords="0,875,75,850" href="http://www.earningstats.com/results/ACN" alt="" / >
          <area shape="rect" coords="0,900,75,875" href="http://www.earningstats.com/results/ADBE" alt="" / >
          <area shape="rect" coords="0,925,75,900" href="http://www.earningstats.com/results/MA" alt="" / >
          <area shape="rect" coords="0,950,75,925" href="http://www.earningstats.com/results/NKE" alt="" / >
          <area shape="rect" coords="0,975,75,950" href="http://www.earningstats.com/results/NVDA" alt="" / >
          <area shape="rect" coords="0,1000,75,975" href="http://www.earningstats.com/results/QCOM" alt="" / >
          <area shape="rect" coords="0,1025,75,1000" href="http://www.earningstats.com/results/TGT" alt="" / >
          <area shape="rect" coords="0,1050,75,1025" href="http://www.earningstats.com/results/BABA" alt="" / >
          <area shape="rect" coords="0,1075,75,1050" href="http://www.earningstats.com/results/CAT" alt="" / >
          <area shape="rect" coords="0,1100,75,1075" href="http://www.earningstats.com/results/TSLA" alt="" / >
          <area shape="rect" coords="0,1125,75,1100" href="http://www.earningstats.com/results/NOW" alt="" / >
          <area shape="rect" coords="0,1150,75,1125" href="http://www.earningstats.com/results/AAPL" alt="" / >
          <area shape="rect" coords="0,1175,75,1150" href="http://www.earningstats.com/results/ADSK" alt="" / >
          <area shape="rect" coords="0,1200,75,1175" href="http://www.earningstats.com/results/CMG" alt="" / >
          <area shape="rect" coords="0,1225,75,1200" href="http://www.earningstats.com/results/EA" alt="" / >
          <area shape="rect" coords="0,1250,75,1225" href="http://www.earningstats.com/results/IBM" alt="" / >
          <area shape="rect" coords="0,1275,75,1250" href="http://www.earningstats.com/results/LOW" alt="" / >
          <area shape="rect" coords="0,1300,75,1275" href="http://www.earningstats.com/results/MSFT" alt="" / >
          <area shape="rect" coords="0,1325,75,1300" href="http://www.earningstats.com/results/STZ" alt="" / >
          <area shape="rect" coords="0,1350,75,1325" href="http://www.earningstats.com/results/TWLO" alt="" / >
          <area shape="rect" coords="0,1375,75,1350" href="http://www.earningstats.com/results/PYPL" alt="" / >
          <area shape="rect" coords="0,1400,75,1375" href="http://www.earningstats.com/results/BIDU" alt="" / >
          <area shape="rect" coords="0,1425,75,1400" href="http://www.earningstats.com/results/NTES" alt="" / >
          <area shape="rect" coords="0,1450,75,1425" href="http://www.earningstats.com/results/ULTA" alt="" / >
          <area shape="rect" coords="0,1475,75,1450" href="http://www.earningstats.com/results/FB" alt="" / >
          <area shape="rect" coords="0,1500,75,1475" href="http://www.earningstats.com/results/LULU" alt="" / >
          <area shape="rect" coords="0,1525,75,1500" href="http://www.earningstats.com/results/ROKU" alt="" / >
          <area shape="rect" coords="0,1550,75,1525" href="http://www.earningstats.com/results/GOOGL" alt="" / >
          <area shape="rect" coords="0,1575,75,1550" href="http://www.earningstats.com/results/ANET" alt="" / >
          <area shape="rect" coords="0,1600,75,1575" href="http://www.earningstats.com/results/AMZN" alt="" / >
          <area shape="rect" coords="0,1625,75,1600" href="http://www.earningstats.com/results/NFLX" alt="" / >
          <area shape="rect" coords="0,1650,75,1625" href="http://www.earningstats.com/results/BKNG" alt="" / >




        </map>

        <RankExp />
      </div>   
    );
  }
}
          
export default Rank;