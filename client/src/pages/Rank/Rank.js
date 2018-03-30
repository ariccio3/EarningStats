import React, { Component } from "react";
import "./Rank.css";
import RankExp from "../../components/RankExp";
// import { Link } from "react-router-dom";

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
          <area shape="rect" coords="3,38,32,27" href="http://www.earningstats.com/results/CVX" alt="null" / >
          <area shape="rect" coords="" href="" / >
        
        </map>

        <RankExp />
      </div>         
    );
  }
}
          
export default Rank;