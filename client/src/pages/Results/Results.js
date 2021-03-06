import React, { Component } from "react";
import API from "../../utils/API";
import "./results.css";
import { Link } from "react-router-dom";

class Results extends Component {
  state = {
    stocks: [],
    watchList: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadResults();
    this.loadWatchList();
  }

  loadResults = () => {
    API.getStats(this.props.match.params.stock)
    .then(res => this.setState({ stocks: res.data }))
    .catch(err => console.log(err));
  };

  loadWatchList = () => {
    API.getWatchList()
    .then(res => this.setState({ watchList: res.data }))
    .catch(err => console.log(err));
  };

  //***
  stockTotalUp = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualMove >= 0) {
        count++;
      } 
    } 
    return count;
  };

  watchListTotalUp = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualMove >= 0) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockTotalDown = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualMove < 0) {
        count++;
      } 
    } 
    return count;
  };
  
  watchListTotalDown = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualMove < 0) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockTotalInsideEM = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].insideOutside === 'INSIDE') {
        count++;
      } 
    } 
    return count;
  };

  watchListInsideEM = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].insideOutside === 'INSIDE') {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockTotalOutsideEM = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].insideOutside === 'OUTSIDE') {
        count++;
      } 
    } 
    return count;
  };

  watchListOutsideEM = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].insideOutside === 'OUTSIDE') {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockDoubleEM = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualPercentOfExpectedMove >= 2) {
        count++;
      } 
    } 
    return count;
  };

  watchListDoubleEM = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualPercentOfExpectedMove >= 2) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockBackToBack = () => {
    let count = 0;
    let total = this.state.stocks.length;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].helper === 'OUTSIDEOUTSIDE') {
        count++;
      }
    } 
    let percent = count/total*100;
    return Math.round(percent*10)/10;
  };

  watchListBackToBack = () => {
    let count = 0;
    let total = this.state.watchList.length;

    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].helper === 'OUTSIDEOUTSIDE') {
        count++;
      } 
    } 
    let percent = count/total*100;
    return Math.round(percent*10)/10;
  };
  //***  
  stockUnder2EM = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualPercentOfExpectedMove <= 2) {
        count++;
      } 
    } 
    return count;
  };

  watchListUnder2EM = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualPercentOfExpectedMove <= 2) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockUnder175EM = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualPercentOfExpectedMove <= 1.75) {
        count++;
      } 
    } 
    return count;
  };

  watchListUnder175EM = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualPercentOfExpectedMove <= 1.75) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockUnder15EM = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualPercentOfExpectedMove <= 1.5) {
        count++;
      } 
    } 
    return count;
  };

  watchListUnder15EM = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualPercentOfExpectedMove <= 1.5) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockUnder125EM = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualPercentOfExpectedMove <= 1.25) {
        count++;
      } 
    } 
    return count;
  };

  watchListUnder125EM = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualPercentOfExpectedMove <= 1.25) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockUnderEM = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualPercentOfExpectedMove <= 1) {
        count++;
      } 
    } 
    return count;
  };

  watchListUnderEM = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualPercentOfExpectedMove <= 1) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockUnder75EM = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualPercentOfExpectedMove <= .75) {
        count++;
      } 
    } 
    return count;
  };

  watchListUnder75EM = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualPercentOfExpectedMove <= .75) {
        count++;
      } 
    } 
    return count;
  };      
  //***
  stockNumHalfEM = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualPercentOfExpectedMove <= .5) {
        count++;
      } 
    } 
    return count;
  };

  watchListNumHalfEM = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualPercentOfExpectedMove <= .5) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockOutsideNumUp = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].insideOutside === 'OUTSIDE' && this.state.stocks[i].actualMove >= 0) {
        count++;
      } 
    } 
    return count;
  };

  watchListOutsideNumUp = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].insideOutside === 'OUTSIDE' && this.state.watchList[i].actualMove >= 0) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockOutsideNumDown = () => {
    let count = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].insideOutside === 'OUTSIDE' && this.state.stocks[i].actualMove < 0) {
        count++;
      } 
    } 
    return count;
  };

  watchListOutsideNumDown = () => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].insideOutside === 'OUTSIDE' && this.state.watchList[i].actualMove < 0) {
        count++;
      } 
    } 
    return count;
  };
  //***
  stockQone = () => {
    let insideCount = 0;
    let quarterCount = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].insideOutside === 'INSIDE' && this.state.stocks[i].quarter === 'Q1') {
        insideCount++;
      }
      if (this.state.stocks[i].quarter === 'Q1') {
        quarterCount++;
      } 
    } 
    return insideCount / quarterCount *100;
  };

  watchListQone = () => {
    let insideCount = 0;
    let quarterCount = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].insideOutside === 'INSIDE' && this.state.watchList[i].quarter === 'Q1') {
        insideCount++;
      }
      if (this.state.watchList[i].quarter === 'Q1') {
        quarterCount++;
      } 
    } 
    return insideCount / quarterCount *100;
  };
  //***
  stockQtwo = () => {
    let insideCount = 0;
    let quarterCount = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].insideOutside === 'INSIDE' && this.state.stocks[i].quarter === 'Q2') {
        insideCount++;
      }
      if (this.state.stocks[i].quarter === 'Q2') {
        quarterCount++;
      } 
    } 
    return insideCount / quarterCount *100;
  };

  watchListQtwo = () => {
    let insideCount = 0;
    let quarterCount = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].insideOutside === 'INSIDE' && this.state.watchList[i].quarter === 'Q2') {
        insideCount++;
      }
      if (this.state.watchList[i].quarter === 'Q2') {
        quarterCount++;
      } 
    } 
    return insideCount / quarterCount *100;
  };
  //***
  stockQthree = () => {
    let insideCount = 0;
    let quarterCount = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].insideOutside === 'INSIDE' && this.state.stocks[i].quarter === 'Q3') {
        insideCount++;
      }
      if (this.state.stocks[i].quarter === 'Q3') {
        quarterCount++;
      } 
    } 
    return insideCount / quarterCount *100;
  };

  watchListQthree = () => {
    let insideCount = 0;
    let quarterCount = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].insideOutside === 'INSIDE' && this.state.watchList[i].quarter === 'Q3') {
        insideCount++;
      }
      if (this.state.watchList[i].quarter === 'Q3') {
        quarterCount++;
      } 
    } 
    return insideCount / quarterCount *100;
  };
  //***
  stockQfour = () => {
    let insideCount = 0;
    let quarterCount = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].insideOutside === 'INSIDE' && this.state.stocks[i].quarter === 'Q4') {
        insideCount++;
      }
      if (this.state.stocks[i].quarter === 'Q4') {
        quarterCount++;
      } 
    } 
    return insideCount / quarterCount *100;
  };

  watchListQfour = () => {
    let insideCount = 0;
    let quarterCount = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].insideOutside === 'INSIDE' && this.state.watchList[i].quarter === 'Q4') {
        insideCount++;
      }
      if (this.state.watchList[i].quarter === 'Q4') {
        quarterCount++;
      } 
    } 
    return insideCount / quarterCount *100;
  };
  //***
  stockAvgExpectedMove = () => {
    let sum = 0;    
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].expectedPercentMove) {
        sum += this.state.stocks[i].expectedPercentMove;
      } 
    }
    let average = sum / this.state.stocks.length;
    return average.toFixed(2);
  };

  watchListAvgExpectedMove = () => {
    let sum = 0;    
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].expectedPercentMove) {
        sum += this.state.watchList[i].expectedPercentMove;
      } 
    }
    let average = sum / this.state.watchList.length;
    return average.toFixed(2);
  };
  //***
  stockAvgActualMove = () => {
    let sum = 0;    
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].actualPercentMove) {
        sum += Math.abs(this.state.stocks[i].actualPercentMove);
      } 
    }
    let average = sum / this.state.stocks.length;
    return average.toFixed(2);
  };

  watchListAvgActualMove = () => {
    let sum = 0;    
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].actualPercentMove) {
        sum += Math.abs(this.state.watchList[i].actualPercentMove);
      } 
    }
    let average = sum / this.state.watchList.length;
    return average.toFixed(2);
  };

  stockAboveAvgExpectedMove = () => {
    let avgEM = this.stockAvgExpectedMove();
    let allCount = 0;
    let insideCount = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].expectedPercentMove > avgEM) {
        allCount++;
      }
    }
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].expectedPercentMove > avgEM && this.state.stocks[i].insideOutside === 'INSIDE') {
        insideCount++;
      }
    }
    let aboveAvgEMPercentInside = Math.round(insideCount / allCount * 100);
    return aboveAvgEMPercentInside;
  };

  watchListAboveAvgExpectedMove = () => {
    let avgEM = this.watchListAvgExpectedMove();
    let allCount = 0;
    let insideCount = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].expectedPercentMove > avgEM) {
        allCount++;
      }
    }
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].expectedPercentMove > avgEM && this.state.watchList[i].insideOutside === 'INSIDE') {
        insideCount++;
      }
    }
    let aboveAvgEMPercentInside = Math.round(insideCount / allCount * 100);
    return aboveAvgEMPercentInside;
  };
  // //***
  stockBelowAvgExpectedMove = () => {
    let avgEM = this.stockAvgExpectedMove();
    let allCount = 0;
    let insideCount = 0;
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].expectedPercentMove < avgEM) {
        allCount++;
      }
    }
    for (let i = 0; i < this.state.stocks.length; i++) {
      if (this.state.stocks[i].expectedPercentMove < avgEM && this.state.stocks[i].insideOutside === 'INSIDE') {
        insideCount++;
      }
    }
    let aboveAvgEMPercentInside = Math.round(insideCount / allCount * 100);
    return aboveAvgEMPercentInside;
  };

  watchListBelowAvgExpectedMove = () => {
    let avgEM = this.watchListAvgExpectedMove();
    let allCount = 0;
    let insideCount = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].expectedPercentMove < avgEM) {
        allCount++;
      }
    }
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].expectedPercentMove < avgEM && this.state.watchList[i].insideOutside === 'INSIDE') {
        insideCount++;
      }
    }
    let aboveAvgEMPercentInside = Math.round(insideCount / allCount * 100);
    return aboveAvgEMPercentInside;
  };
  //***
  watchListCount = () => {
    let counts = {};
    for (let i = 0; i < this.state.watchList.length; i++) {
      counts[this.state.watchList[i].stock] = 1 + (counts[this.state.watchList[i].stock] || 0);
    }
    return Object.keys(counts).length;
    };

  render() {
      // console.log(this.state.stocks);
    return (
      <div className="tableContainer">  
        <h3><Link to="/dashboard">EarningStats Dashboard</Link></h3>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="col-xs-8">Totals &emsp;</th>
              <th className="col-xs-2"><Link style={{ textDecoration: 'none', color:'black'}} to={`/proscons/${this.props.match.params.stock}`}>{this.props.match.params.stock}</Link></th>
              <th title="EarningStats Watchlist" className="col-xs-2"><Link to="/annual" style={{ textDecoration: 'none', color:'black'}}>ES{this.watchListCount()}</Link></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Earnings Events Analyzed</td>
              <td>{this.state.stocks.length}</td>
              <td>{this.state.watchList.length}</td>
            </tr>
            <tr>
              <td>Total # Up</td>
              <td>{this.stockTotalUp()}</td>
              <td>{this.watchListTotalUp()}</td>
            </tr>
            <tr>
              <td>Total # Down</td>
              <td>{this.stockTotalDown()}</td>
              <td>{this.watchListTotalDown()}</td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/totalpercentup" style={{ textDecoration: 'none' }}>Total % Up &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockTotalUp() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListTotalUp() / this.state.watchList.length *100)}%</strong></td>
            </tr>
            <tr>
              <td>Total # Inside Expected Move</td>
              <td>{this.stockTotalInsideEM()}</td>
              <td>{this.watchListInsideEM()}</td>
            </tr>
            <tr>
              <td>Total # Outside Expected Move</td>
              <td>{this.stockTotalOutsideEM()}</td>
              <td>{this.watchListOutsideEM()}</td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/percentinside" style={{ textDecoration: 'none' }}>Total % Inside Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockTotalInsideEM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListInsideEM() / this.state.watchList.length *100)}%</strong></td>
            </tr>
          </tbody>
        </table>

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="col-xs-8">Actual vs. Expected Move Frequency</th>
              <th className="col-xs-2"><Link style={{ textDecoration: 'none', color:'black'}} to={`/proscons/${this.props.match.params.stock}`}>{this.props.match.params.stock}</Link></th>
              <th title="EarningStats Watchlist" className="col-xs-2"><Link to="/annual" style={{ textDecoration: 'none', color:'black'}}>ES{this.watchListCount()}</Link></th>
            </tr>
          </thead>
          <tbody>        
            <tr>
              <td><strong><Link to="/sorted/amover2xempercent" style={{ textDecoration: 'none' }}>Actual ≥ 2x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockDoubleEM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListDoubleEM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/amunder2xempercent" style={{ textDecoration: 'none' }}>Actual ≤ 2x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockUnder2EM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListUnder2EM() / this.state.watchList.length *100)}%</strong></td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/amunder175xempercent" style={{ textDecoration: 'none' }}>Actual ≤ 1.75x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockUnder175EM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListUnder175EM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/amunder150xempercent" style={{ textDecoration: 'none' }}>Actual ≤ 1.5x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockUnder15EM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListUnder15EM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/amunder125xempercent" style={{ textDecoration: 'none' }}>Actual ≤ 1.25x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockUnder125EM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListUnder125EM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/underempercent" style={{ textDecoration: 'none' }}>≤ The Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockUnderEM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListUnderEM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/amunder75xempercent" style={{ textDecoration: 'none' }}>Actual ≤ .75x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockUnder75EM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListUnder75EM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/percenthalfem" style={{ textDecoration: 'none' }}>Actual ≤ .5x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockNumHalfEM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListNumHalfEM() / this.state.watchList.length *100)}%</strong></td>
            </tr>                                                                                                                                                 
          </tbody>
        </table>

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="col-xs-8">Outside the Expected Move Stats</th>
              <th className="col-xs-2"><Link style={{ textDecoration: 'none', color:'black'}} to={`/proscons/${this.props.match.params.stock}`}>{this.props.match.params.stock}</Link></th>
              <th title="EarningStats Watchlist" className="col-xs-2"><Link to="/annual" style={{ textDecoration: 'none', color:'black'}}>ES{this.watchListCount()}</Link></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong><Link to="/sorted/doubleem" style={{ textDecoration: 'none' }}># Double the Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{this.stockDoubleEM()}</td>
              <td>{this.watchListDoubleEM()}</td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/backToBack" style={{ textDecoration: 'none' }}>% of Back-to-Back Outside Moves &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{this.stockBackToBack()}%</strong></td>
              <td><strong>{this.watchListBackToBack()}%</strong></td>
            </tr>
            <tr>
              <td># Up</td>
              <td>{this.stockOutsideNumUp()}</td>
              <td>{this.watchListOutsideNumUp()}</td>
            </tr>            
            <tr>
              <td><strong><Link to="/sorted/outsidepercentup" style={{ textDecoration: 'none' }}>% Up &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockOutsideNumUp() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListOutsideNumUp() / this.state.watchList.length *100)}%</strong></td>
            </tr>
            <tr>
              <td># Down</td>
              <td>{this.stockOutsideNumDown()}</td>
              <td>{this.watchListOutsideNumDown()}</td>
            </tr>            
            <tr>
              <td><strong><Link to="/sorted/outsidepercentdown" style={{ textDecoration: 'none' }}>% Down &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.round(this.stockOutsideNumDown() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.round(this.watchListOutsideNumDown() / this.state.watchList.length *100)}%</strong></td>
            </tr>            
          </tbody>
        </table>                 

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="col-xs-8">Average Expected vs. Actual Move %</th>
              <th className="col-xs-2"><Link style={{ textDecoration: 'none', color:'black'}} to={`/proscons/${this.props.match.params.stock}`}>{this.props.match.params.stock}</Link></th>
              <th title="EarningStats Watchlist" className="col-xs-2"><Link to="/annual" style={{ textDecoration: 'none', color:'black'}}>ES{this.watchListCount()}</Link></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong><Link to="/sorted/aboveavgem" style={{ textDecoration: 'none' }}>Above Avg % Expected Move % Inside &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{this.stockAboveAvgExpectedMove()}%</td>
              <td>{this.watchListAboveAvgExpectedMove()}%</td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/avgpercentem" style={{ textDecoration: 'none' }}>Average % Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{this.stockAvgExpectedMove()}%</td>
              <td>{this.watchListAvgExpectedMove()}%</td>
            </tr>
            <tr>
              <td>Average % Actual Move</td>
              <td>{this.stockAvgActualMove()}%</td>
              <td>{this.watchListAvgActualMove()}%</td>
            </tr>        
            <tr>
              <td>Avg Actual Move vs. Expected Move Ratio</td>
              <td>{Math.round((this.stockAvgActualMove() / this.stockAvgExpectedMove()) *100)}%</td>
              <td>{Math.round((this.watchListAvgActualMove() / this.watchListAvgExpectedMove()) *100)}%</td>
            </tr>         
            <tr>
              <td><strong><Link to="/sorted/belowavgem" style={{ textDecoration: 'none' }}>Below Avg % Expected Move % Inside &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{this.stockBelowAvgExpectedMove()}%</td>
              <td>{this.watchListBelowAvgExpectedMove()}%</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="col-xs-8">Quarterly</th>
              <th className="col-xs-2"><Link style={{ textDecoration: 'none', color:'black'}} to={`/proscons/${this.props.match.params.stock}`}>{this.props.match.params.stock}</Link></th>
              <th title="EarningStats Watchlist" className="col-xs-2"><Link to="/annual" style={{ textDecoration: 'none', color:'black'}}>ES{this.watchListCount()}</Link></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong><Link to="/sorted/q1percentinside" style={{ textDecoration: 'none' }}>Q1 - % Inside Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{Math.round(this.stockQone())}%</td>
              <td>{Math.round(this.watchListQone())}%</td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/q2percentinside" style={{ textDecoration: 'none' }}>Q2 - % Inside Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{Math.round(this.stockQtwo())}%</td>
              <td>{Math.round(this.watchListQtwo())}%</td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/q3percentinside" style={{ textDecoration: 'none' }}>Q3 - % Inside Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{Math.round(this.stockQthree())}%</td>
              <td>{Math.round(this.watchListQthree())}%</td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/q4percentinside" style={{ textDecoration: 'none' }}>Q4 - % Inside Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{Math.round(this.stockQfour())}%</td>
              <td>{Math.round(this.watchListQfour())}%</td>
            </tr>            
          </tbody>
        </table>
      <table>
        <tr align="center"><a href={require('./Charts/' + this.props.match.params.stock + '.JPG')}><img src={require('./Charts/' + this.props.match.params.stock + '.JPG')} alt="" className="responsive"/></a></tr>
      </table>  
    </div>
    );
  }
}
          
export default Results;