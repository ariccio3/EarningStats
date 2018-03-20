import React, { Component } from "react";
import "./Rank.css";
// import "./LG.JPG";
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
        <img className="rankImg" src={require("./LG.JPG")} alt="EarningStats Predictability Rank" />
        <RankExp />
      </div>         
    );
  }
}
          
export default Rank;