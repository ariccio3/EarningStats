import React, { Component } from "react";
import "./Rank.css";
import RankExp from "../../components/RankExp";

class Rank extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="container">
        <h3>EarningStats Predictability Rank<hr /></h3>
        <img className="rankImg" src={require("./SM.JPG")} alt="EarningStats Predictability Rank" useMap="#stockmap" />
          
        <map name="stockmap">
          <area shape="rect" coords="3,38,50,27" href="http://www.earningstats.com/results/CVX" alt="" / >
          <area shape="rect" coords="3,63,50,50" href="http://www.earningstats.com/results/JNJ" alt="" / >
          <area shape="rect" coords="3,85,50,70" href="http://www.earningstats.com/results/XOM" alt="" / >
          <area shape="rect" coords="3,107,50,93" href="http://www.earningstats.com/results/JPM" alt="" / >
          <area shape="rect" coords="3,128,50,115" href="http://www.earningstats.com/results/C" alt="" / >
          <area shape="rect" coords="3,150,50,137" href="http://www.earningstats.com/results/MCD" alt="" / >
          <area shape="rect" coords="3,173,50,160" href="http://www.earningstats.com/results/HD" alt="" / >
          <area shape="rect" coords="3,195,50,182" href="http://www.earningstats.com/results/WYNN" alt="" / >
          <area shape="rect" coords="3,217,50,204" href="http://www.earningstats.com/results/PEP" alt="" / >
          <area shape="rect" coords="3,238,50,226" href="http://www.earningstats.com/results/AXP" alt="" / >
          <area shape="rect" coords="3,260,50,247" href="http://www.earningstats.com/results/GS" alt="" / >
          <area shape="rect" coords="3,283,50,267" href="http://www.earningstats.com/results/BA" alt="" / >
          <area shape="rect" coords="3,305,50,292" href="http://www.earningstats.com/results/MU" alt="" / >
          <area shape="rect" coords="3,326,50,314" href="http://www.earningstats.com/results/UPS" alt="" / >
          <area shape="rect" coords="3,349,50,335" href="http://www.earningstats.com/results/WMT" alt="" / >
          <area shape="rect" coords="3,370,50,358" href="http://www.earningstats.com/results/DIS" alt="" / >
          <area shape="rect" coords="3,392,50,380" href="http://www.earningstats.com/results/TGT" alt="" / >
          <area shape="rect" coords="3,414,50,402" href="http://www.earningstats.com/results/COST" alt="" / >
          <area shape="rect" coords="3,436,50,424" href="http://www.earningstats.com/results/CELG" alt="" / >
          <area shape="rect" coords="3,458,50,446" href="http://www.earningstats.com/results/AMGN" alt="" / >
          <area shape="rect" coords="3,481,50,468" href="http://www.earningstats.com/results/FDX" alt="" / >
          <area shape="rect" coords="3,503,50,489" href="http://www.earningstats.com/results/CRM" alt="" / >
          <area shape="rect" coords="3,525,50,512" href="http://www.earningstats.com/results/DE" alt="" / >
          <area shape="rect" coords="3,546,50,534" href="http://www.earningstats.com/results/V" alt="" / >
          <area shape="rect" coords="3,569,50,555" href="http://www.earningstats.com/results/AVGO" alt="" / >
          <area shape="rect" coords="3,590,50,577" href="http://www.earningstats.com/results/NVDA" alt="" / >
          <area shape="rect" coords="3,613,50,600" href="http://www.earningstats.com/results/GILD" alt="" / >
          <area shape="rect" coords="3,635,50,621" href="http://www.earningstats.com/results/TSLA" alt="" / >
          <area shape="rect" coords="3,656,50,644" href="http://www.earningstats.com/results/NKE" alt="" / >
          <area shape="rect" coords="3,679,50,666" href="http://www.earningstats.com/results/ADBE" alt="" / >
          <area shape="rect" coords="3,700,50,688" href="http://www.earningstats.com/results/STZ" alt="" / >
          <area shape="rect" coords="3,722,50,710" href="http://www.earningstats.com/results/BABA" alt="" / >
          <area shape="rect" coords="3,744,50,732" href="http://www.earningstats.com/results/CAT" alt="" / >
          <area shape="rect" coords="3,767,50,754" href="http://www.earningstats.com/results/ADSK" alt="" / >
          <area shape="rect" coords="3,789,50,776" href="http://www.earningstats.com/results/CMG" alt="" / >
          <area shape="rect" coords="3,810,50,798" href="http://www.earningstats.com/results/IBM" alt="" / >
          <area shape="rect" coords="3,833,50,819" href="http://www.earningstats.com/results/AAPL" alt="" / >
          <area shape="rect" coords="3,855,50,842" href="http://www.earningstats.com/results/FB" alt="" / >
          <area shape="rect" coords="3,877,50,863" href="http://www.earningstats.com/results/MSFT" alt="" / >
          <area shape="rect" coords="3,899,50,886" href="http://www.earningstats.com/results/BIDU" alt="" / >
          <area shape="rect" coords="3,921,50,907" href="http://www.earningstats.com/results/NTES" alt="" / >
          <area shape="rect" coords="3,943,50,929" href="http://www.earningstats.com/results/LULU" alt="" / >
          <area shape="rect" coords="3,964,56,952" href="http://www.earningstats.com/results/GOOGL" alt="" / >
          <area shape="rect" coords="3,988,50,974" href="http://www.earningstats.com/results/AMZN" alt="" / >
          <area shape="rect" coords="3,1009,50,995" href="http://www.earningstats.com/results/BKNG" alt="" / >
          <area shape="rect" coords="3,1031,50,1017" href="http://www.earningstats.com/results/NFLX" alt="" / >
        </map>

        <RankExp />
      </div>   
    );
  }
}
          
export default Rank;