import React, { Component } from "react";
import API from "../../utils/API";
import "./Annual.css";

class Annual extends Component {
  state = {
    watchList: []
  };

  componentDidMount() {
    this.loadWatchList();
  }

  loadWatchList = () => {
    API.getWatchList()
    .then(res => this.setState({ watchList: res.data }))
    .catch(err => console.log(err));
  };

  inside = (year) => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].date.endsWith(year) === true && this.state.watchList[i].insideOutside === "INSIDE") {
        count++;
      } 
    } 
    return count;
  };

  outside = (year) => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].date.endsWith(year) === true && this.state.watchList[i].insideOutside === "OUTSIDE") {
        count++;
      } 
    } 
    return count;
  };

  total = (year) => {
    let count = 0;
    for (let i = 0; i < this.state.watchList.length; i++) {
      if (this.state.watchList[i].date.endsWith(year) === true) {
        count++;
      } 
    } 
    return count;
  };

  render() {
      // console.log(this.state.watchList);
    return (
      <div className="tableContainer"> 
        <h3>EarningStats Watchlist</h3> 
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="yearCol">Year</th>
              <th className="insideCol"># Inside the Expected Move</th>
              <th className="outsideCol"># Outside the Expected Move</th>
              <th className="percentInsideCol">% Inside the Expected Move</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2018</td>
              <td>{this.inside('18')}</td>
              <td>{this.outside('18')}</td>
              <td>{Math.floor(this.inside('18') / this.total('18') *100)}%</td>
            </tr>
            <tr>
              <td>2017</td>
              <td>{this.inside('17')}</td>
              <td>{this.outside('17')}</td>
              <td>{Math.floor(this.inside('17') / this.total('17') *100)}%</td>
            </tr>
            <tr>
              <td>2016</td>
              <td>{this.inside('16')}</td>
              <td>{this.outside('16')}</td>
              <td>{Math.floor(this.inside('16') / this.total('16') *100)}%</td>
            </tr>
            <tr>
              <td>2015</td>
              <td>{this.inside('15')}</td>
              <td>{this.outside('15')}</td>
              <td>{Math.floor(this.inside('15') / this.total('15') *100)}%</td>
            </tr>
            <tr>
              <td>2014</td>
              <td>{this.inside('14')}</td>
              <td>{this.outside('14')}</td>
              <td>{Math.floor(this.inside('14') / this.total('14') *100)}%</td>
            </tr>
            <tr>
              <td>2013</td>
              <td>{this.inside('13')}</td>
              <td>{this.outside('13')}</td>
              <td>{Math.floor(this.inside('13') / this.total('13') *100)}%</td>
            </tr>
            <tr>
              <td>2012</td>
              <td>{this.inside('12')}</td>
              <td>{this.outside('12')}</td>
              <td>{Math.floor(this.inside('12') / this.total('12') *100)}%</td>
            </tr>
            <tr>
              <td>2011</td>
              <td>{this.inside('11')}</td>
              <td>{this.outside('11')}</td>
              <td>{Math.floor(this.inside('11') / this.total('11') *100)}%</td>
            </tr>
            <tr>
              <td>2010</td>
              <td>{this.inside('10')}</td>
              <td>{this.outside('10')}</td>
              <td>{Math.floor(this.inside('10') / this.total('10') *100)}%</td>
            </tr>
            <tr>
              <td>2009</td>
              <td>{this.inside('09')}</td>
              <td>{this.outside('09')}</td>
              <td>{Math.floor(this.inside('09') / this.total('09') *100)}%</td>
            </tr>
            <tr>
              <td>2008</td>
              <td>{this.inside('08')}</td>
              <td>{this.outside('08')}</td>
              <td>{Math.floor(this.inside('08') / this.total('08') *100)}%</td>
            </tr>
            <tr>
              <td>2007</td>
              <td>{this.inside('07')}</td>
              <td>{this.outside('07')}</td>
              <td>{Math.floor(this.inside('07') / this.total('07') *100)}%</td>
            </tr>
            <tr>
              <td>2006</td>
              <td>{this.inside('06')}</td>
              <td>{this.outside('06')}</td>
              <td>{Math.floor(this.inside('06') / this.total('06') *100)}%</td>
            </tr>
            <tr>
              <td>2005</td>
              <td>{this.inside('05')}</td>
              <td>{this.outside('05')}</td>
              <td>{Math.floor(this.inside('05') / this.total('05') *100)}%</td>
            </tr>
            <tr>
              <td>2004</td>
              <td>{this.inside('04')}</td>
              <td>{this.outside('04')}</td>
              <td>{Math.floor(this.inside('04') / this.total('04') *100)}%</td>
            </tr>
            <tr>
              <td>2003</td>
              <td>{this.inside('03')}</td>
              <td>{this.outside('03')}</td>
              <td>{Math.floor(this.inside('03') / this.total('03') *100)}%</td>
            </tr>                                                                                    
          </tbody>            
       </table><br/>
      </div>         
    );
  }
}
          
export default Annual;