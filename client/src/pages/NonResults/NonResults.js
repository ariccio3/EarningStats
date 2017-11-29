import React, { Component } from "react";
import API from "../../utils/API";
// import NonCard from "../../components/NonCard";
// import {Grid} from "react-bootstrap";
// import {Row} from "react-bootstrap";
// import {Col} from "react-bootstrap";
import "./cardStyle.css";
// import { Link } from "react-router-dom";

class NonResults extends Component {
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
    console.log(insideCount);
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
    console.log(insideCount);
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
    console.log(insideCount);
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
    console.log(insideCount);
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
    console.log(insideCount);
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
    console.log(insideCount);
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
    console.log(insideCount);
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
    console.log(insideCount);
    return insideCount / quarterCount *100;
  };
  //***

  render() {
      console.log(this.state.watchList);
    return (
      <div>  
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Totals</th>
              <th>{this.props.match.params.stock}</th>
              <th>Watchlist</th>
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
              <td><strong>Total % Up</strong></td>
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
              <td><strong>Total % Inside Expected Move</strong></td>
              <td><strong>{Math.floor(this.stockTotalInsideEM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListInsideEM() / this.state.watchList.length *100)}%</strong></td>
            </tr>
            <tr>
              <td># ±.5 Expected Move</td>
              <td>{this.stockNumHalfEM()}</td>
              <td>{this.watchListNumHalfEM()}</td>
            </tr>
            <tr>
              <td><strong>% ±.5 Expected Move</strong></td>
              <td><strong>{Math.floor(this.stockNumHalfEM() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListNumHalfEM() / this.state.watchList.length *100)}%</strong></td>
            </tr>                                                                      
          </tbody>
        </table><br/>

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Occurences Outside the Expected Move</th>
              <th>{this.props.match.params.stock}</th>
              <th>Watchlist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td># Double the Expected Move</td>
              <td>{this.stockDoubleEM()}</td>
              <td>{this.watchListDoubleEM()}</td>
            </tr>
            <tr>
              <td># Up</td>
              <td>{this.stockOutsideNumUp()}</td>
              <td>{this.watchListOutsideNumUp()}</td>
            </tr>            
            <tr>
              <td><strong>% Up</strong></td>
              <td><strong>{Math.floor(this.stockOutsideNumUp() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListOutsideNumUp() / this.state.watchList.length *100)}%</strong></td>
            </tr>
            <tr>
              <td># Down</td>
              <td>{this.stockOutsideNumDown()}</td>
              <td>{this.watchListOutsideNumDown()}</td>
            </tr>            
            <tr>
              <td><strong>% Down</strong></td>
              <td><strong>{Math.floor(this.stockOutsideNumDown() / this.state.stocks.length *100)}%</strong></td>
              <td><strong>{Math.floor(this.watchListOutsideNumDown() / this.state.watchList.length *100)}%</strong></td>
            </tr>            
          </tbody>
        </table><br/>                  

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Average Expected Move %</th>
              <th>{this.props.match.params.stock}</th>
              <th>Watchlist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Above Average Expected Move % Inside</td>
              <td>{this.state.stocks.length}</td>
              <td>{this.state.watchList.length}</td>
            </tr>
            <tr>
              <td>Average Expected Move</td>
              <td>{this.stockTotalUp()}</td>
              <td>{this.watchListTotalUp()}</td>
            </tr>
            <tr>
              <td>Below Average Expected Move % Inside</td>
              <td>{this.stockTotalDown()}</td>
              <td>{this.watchListTotalDown()}</td>
            </tr>
          </tbody>
        </table><br/>

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Quarterly</th>
              <th>{this.props.match.params.stock}</th>
              <th>Watchlist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1 % Inside Expected Move</td>
              <td>{Math.floor(this.stockQone())}%</td>
              <td>{Math.floor(this.watchListQone())}%</td>
            </tr>
            <tr>
              <td>Q2 % Inside Expected Move</td>
              <td>{Math.floor(this.stockQtwo())}%</td>
              <td>{Math.floor(this.watchListQtwo())}%</td>
            </tr>
            <tr>
              <td>Q3 % Inside Expected Move</td>
              <td>{Math.floor(this.stockQthree())}%</td>
              <td>{Math.floor(this.watchListQthree())}%</td>
            </tr>
            <tr>
              <td>Q4 % Inside Expected Move</td>
              <td>{Math.floor(this.stockQfour())}%</td>
              <td>{Math.floor(this.watchListQfour())}%</td>
            </tr>            
          </tbody>
        </table>
      </div>         
    );
  }
}
          
export default NonResults;