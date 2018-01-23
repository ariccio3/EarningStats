import React, { Component } from "react";
import API from "../../../utils/API";
import "./backToBack.css";
import { Link } from "react-router-dom";

class BackToBack extends Component {
  state = {
    sorted: []
  };

  componentDidMount() {
    this.loadSorted();
  }

  loadSorted = () => {
    API.getBackToBack()
    .then(res => this.setState({ sorted: res.data }))
    .catch(err => console.log(err));
  };

  render() {
      // console.log(this.state.sorted);
    return (
      <div className="tableContainer">
        <h4>% of Back-to-Back Outside Moves</h4> 
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="rankCol">Rank</th>
              <th className="stockCol">Stock</th>
              <th className="esNumCol">% Back-to-Back</th>
              <th className="lastEarnCol">Last Earnings</th>
            </tr>
          </thead>
          <tbody>
        {this.state.sorted.map((row, i) => (            
            <tr key={i}>
              <td>{i + 1}</td>
              <td><Link to={`/results/${this.state.sorted[i].stock}`}>{this.state.sorted[i].stock}</Link></td>
              <td>{this.state.sorted[i].btbPercent}%</td>
              <td>{this.state.sorted[i].insideOutside}</td>
            </tr>  
            ))}                                                                   
          </tbody>
        </table><br/>
      </div>         
    );
  }
}
          
export default BackToBack;