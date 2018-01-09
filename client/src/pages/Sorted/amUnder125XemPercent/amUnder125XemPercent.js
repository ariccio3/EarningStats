import React, { Component } from "react";
import API from "../../../utils/API";
import "./amUnder125XemPercent.css";
import { Link } from "react-router-dom";

class AmUnder125XemPercent extends Component {
  state = {
    sorted: []
  };

  componentDidMount() {
    this.loadSorted();
  }

  loadSorted = () => {
    API.getAmUnder125XemPercent()
    .then(res => this.setState({ sorted: res.data }))
    .catch(err => console.log(err));
  };

  render() {
      console.log(this.state.sorted);
    return (
      <div className="tableContainer">  
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="titleColumn">Rank</th>
              <th className="stockNumColumn">Stock</th>
              <th className="esNumColumn">Actual ≤ 2x Expected</th>
            </tr>
          </thead>
          <tbody>
        {this.state.sorted.map((row, i) => (            
            <tr key={i}>
              <td>{i + 1}</td>
              <td><Link to={`/results/${this.state.sorted[i].stock}`}>{this.state.sorted[i].stock}</Link></td>
              <td>{this.state.sorted[i].amUnder125XemPercent}%</td>
            </tr>  
            ))}                                                                   
          </tbody>
        </table><br/>
      </div>         
    );
  }
}
          
export default AmUnder125XemPercent;