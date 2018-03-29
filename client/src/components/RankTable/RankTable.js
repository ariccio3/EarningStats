import React, { Component } from "react";
import "./RankTable.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class RankTable extends Component {
  state = {
    AboveAvgEM: [],
    AmOver2XemPercent: [],
    AmUnder125XemPercent: [],
    AmUnder150XemPercent: [],
    AmUnder175XemPercent: [],
    AmUnder2XemPercent: [],
    AmUnder75XemPercent: [],
    AvgPercentEM: [],
	BackToBack: [],
    BelowAvgEM: [],
    PercentHalfEM: [],
    UnderEMPercent: [],
    : [],
    : []
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadAboveAvgEM();
    this.AmUnder125XemPercent();
    this.AmUnder150XemPercent();
    this.AmUnder175XemPercent();
    this.AmUnder2XemPercent();
    this.AmUnder75XemPercent();
    this.AvgPercentEM();
    this.BackToBack();
    this.BelowAvgEM();
    this.PercentHalfEM();
    this.UnderEMPercent();
    this.();
    this.();
    this.();
  }

  loadAmOver2XemPercent = () => {
    API.getAmOver2XemPercent()
    .then(res => this.setState({ AmOver2XemPercent: res.data }))
    .catch(err => console.log(err));
  };
  loadAmUnder2XemPercent = () => {
    API.getAmUnder2XemPercent()
    .then(res => this.setState({ AmUnder2XemPercent: res.data }))
    .catch(err => console.log(err));
  };
  loadAmUnder175XemPercent = () => {
    API.getAmUnder175XemPercent()
    .then(res => this.setState({ AmUnder175XemPercent: res.data }))
    .catch(err => console.log(err));
  };  
  loadAmUnder150XemPercent = () => {
    API.getAmUnder150XemPercent()
    .then(res => this.setState({ AmUnder150XemPercent: res.data }))
    .catch(err => console.log(err));
  };  
   loadAmUnder125XemPercent = () => {
    API.getAmUnder125XemPercent()
    .then(res => this.setState({ AmUnder125XemPercent: res.data }))
    .catch(err => console.log(err));
  }; 
  loadUnderEMPercent = () => {
    API.getUnderEMPercent()
    .then(res => this.setState({ UnderEMPercent: res.data }))
    .catch(err => console.log(err));
  };
  loadAmUnder75XemPercent = () => {
    API.getAmUnder75XemPercent()
    .then(res => this.setState({ AmUnder75XemPercent: res.data }))
    .catch(err => console.log(err));
  };
  loadPercentHalfEM = () => {
    API.getPercentHalfEM()
    .then(res => this.setState({ PercentHalfEM: res.data }))
    .catch(err => console.log(err));
  }; 
  loadBackToBack = () => {
    API.getBackToBack()
    .then(res => this.setState({ BackToBack: res.data }))
    .catch(err => console.log(err));
  };
  loadAboveAvgEM = () => {
    API.getAboveAvgEM()
    .then(res => this.setState({ AboveAvgEM: res.data }))
    .catch(err => console.log(err));
  };  
  loadBelowAvgEM = () => {
    API.getBelowAvgEM()
    .then(res => this.setState({ BelowAvgEM: res.data }))
    .catch(err => console.log(err));
  };  
  loadAvgPercentEM = () => {
    API.getAvgPercentEM()
    .then(res => this.setState({ AvgPercentEM: res.data }))
    .catch(err => console.log(err));
  };

  











  render() {
    return (


	);
  }
};

export default RankTable;