import React, { Component } from "react";
import API from "../../utils/API";
import "./results.css";
import { Link } from "react-router-dom";

class Results extends Component {
  state = {
    stocks: [],
    watchList: []
  };

  componentDidMount() {
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
    let aboveAvgEMPercentInside = Math.floor(insideCount / allCount * 100);
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
    let aboveAvgEMPercentInside = Math.floor(insideCount / allCount * 100);
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
    let aboveAvgEMPercentInside = Math.floor(insideCount / allCount * 100);
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
    let aboveAvgEMPercentInside = Math.floor(insideCount / allCount * 100);
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
      // console.log(this.state.watchList);
    return (
      <div className="tableContainer">  
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="titleCol">Totals</th>
              <th className="stockNumCol">{this.props.match.params.stock}</th>
              <th title="EarningStats Watchlist" className="esNumCol"><Link to="/annual" style={{ textDecoration: 'none', color:'black'}}>ES{this.watchListCount()} <i className="fa fa-info-circle" aria-hidden="true"></i></Link></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Earnings Reports Analyzed</td>
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
              <td><strong>{Math.floor(this.stockTotalUp() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListTotalUp() / this.state.watchList.length *100)}%</strong></td>
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
              <td><strong>{Math.floor(this.stockTotalInsideEM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListInsideEM() / this.state.watchList.length *100)}%</strong></td>
            </tr>
          </tbody>
        </table><br/>

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="titleCol">Actual vs. Expected Move Frequencies</th>
              <th className="stockNumCol">{this.props.match.params.stock}</th>
              <th title="EarningStats Watchlist" className="esNumCol"><Link to="/annual" style={{ textDecoration: 'none', color:'black'}}>ES{this.watchListCount()} <i className="fa fa-info-circle" aria-hidden="true"></i></Link></th>
            </tr>
          </thead>
          <tbody>        
            <tr>
              <td><strong><Link to="/sorted/amover2xempercent" style={{ textDecoration: 'none' }}>Actual ≥ 2x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.floor(this.stockDoubleEM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListDoubleEM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/amunder2xempercent" style={{ textDecoration: 'none' }}>Actual ≤ 2x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.floor(this.stockUnder2EM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListUnder2EM() / this.state.watchList.length *100)}%</strong></td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/amunder175xempercent" style={{ textDecoration: 'none' }}>Actual ≤ 1.75x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.floor(this.stockUnder175EM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListUnder175EM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/amunder150xempercent" style={{ textDecoration: 'none' }}>Actual ≤ 1.5x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.floor(this.stockUnder15EM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListUnder15EM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/amunder125xempercent" style={{ textDecoration: 'none' }}>Actual ≤ 1.25x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.floor(this.stockUnder125EM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListUnder125EM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/underempercent" style={{ textDecoration: 'none' }}>≤ The Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.floor(this.stockUnderEM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListUnderEM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/amunder75xempercent" style={{ textDecoration: 'none' }}>Actual ≤ .75x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.floor(this.stockUnder75EM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListUnder75EM() / this.state.watchList.length *100)}%</strong></td>
            </tr> 
            <tr>
              <td><strong><Link to="/sorted/percenthalfem" style={{ textDecoration: 'none' }}>Actual ≤ .5x Expected &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.floor(this.stockNumHalfEM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListNumHalfEM() / this.state.watchList.length *100)}%</strong></td>
            </tr>                                                                                                                                                 
          </tbody>
        </table><br/>

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="titleCol">Occurences Outside the Expected Move</th>
              <th className="stockNumCol">{this.props.match.params.stock}</th>
              <th title="EarningStats Watchlist" className="esNumCol"><Link to="/annual" style={{ textDecoration: 'none', color:'black'}}>ES{this.watchListCount()} <i className="fa fa-info-circle" aria-hidden="true"></i></Link></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong><Link to="/sorted/doubleem" style={{ textDecoration: 'none' }}># Double the Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{this.stockDoubleEM()}</td>
              <td>{this.watchListDoubleEM()}</td>
            </tr>
            <tr>
              <td># Up</td>
              <td>{this.stockOutsideNumUp()}</td>
              <td>{this.watchListOutsideNumUp()}</td>
            </tr>            
            <tr>
              <td><strong><Link to="/sorted/outsidepercentup" style={{ textDecoration: 'none' }}>% Up &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.floor(this.stockOutsideNumUp() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListOutsideNumUp() / this.state.watchList.length *100)}%</strong></td>
            </tr>
            <tr>
              <td># Down</td>
              <td>{this.stockOutsideNumDown()}</td>
              <td>{this.watchListOutsideNumDown()}</td>
            </tr>            
            <tr>
              <td><strong><Link to="/sorted/outsidepercentdown" style={{ textDecoration: 'none' }}>% Down &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td><strong>{Math.floor(this.stockOutsideNumDown() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListOutsideNumDown() / this.state.watchList.length *100)}%</strong></td>
            </tr>            
          </tbody>
        </table><br/>                  

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="titleCol">Average Expected vs. Actual Move %</th>
              <th className="stockNumCol">{this.props.match.params.stock}</th>
              <th title="EarningStats Watchlist" className="esNumCol"><Link to="/annual" style={{ textDecoration: 'none', color:'black'}}>ES{this.watchListCount()} <i className="fa fa-info-circle" aria-hidden="true"></i></Link></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Above Average % Expected Move % Inside</td>
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
              <td>Below Average % Expected Move % Inside</td>
              <td>{this.stockBelowAvgExpectedMove()}%</td>
              <td>{this.watchListBelowAvgExpectedMove()}%</td>
            </tr>
          </tbody>
        </table><br/>

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="titleCol">Quarterly</th>
              <th className="stockNumCol">{this.props.match.params.stock}</th>
              <th title="EarningStats Watchlist" className="esNumCol"><Link to="/annual" style={{ textDecoration: 'none', color:'black'}}>ES{this.watchListCount()} <i className="fa fa-info-circle" aria-hidden="true"></i></Link></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong><Link to="/sorted/q1percentinside" style={{ textDecoration: 'none' }}>Q1 - % Inside Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{Math.floor(this.stockQone())}%</td>
              <td>{Math.floor(this.watchListQone())}%</td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/q2percentinside" style={{ textDecoration: 'none' }}>Q2 - % Inside Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{Math.floor(this.stockQtwo())}%</td>
              <td>{Math.floor(this.watchListQtwo())}%</td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/q3percentinside" style={{ textDecoration: 'none' }}>Q3 - % Inside Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{Math.floor(this.stockQthree())}%</td>
              <td>{Math.floor(this.watchListQthree())}%</td>
            </tr>
            <tr>
              <td><strong><Link to="/sorted/q4percentinside" style={{ textDecoration: 'none' }}>Q4 - % Inside Expected Move &nbsp;<i className="fa fa-sort" aria-hidden="true"></i></Link></strong></td>
              <td>{Math.floor(this.stockQfour())}%</td>
              <td>{Math.floor(this.watchListQfour())}%</td>
            </tr>            
          </tbody>
        </table>
      </div>         
    );
  }
}
          
export default Results;