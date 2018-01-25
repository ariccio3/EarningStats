import React, { Component } from "react";
import API from "../../../utils/API";
import "./q1PercentInside.css";
import { Link } from "react-router-dom";

class Q1PercentInside extends Component {
  state = {
    sorted: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadSorted();
  }

  loadSorted = () => {
    API.getQ1PercentInside()
    .then(res => this.setState({ sorted: res.data }))
    .catch(err => console.log(err));
  };

  render() {
      // console.log(this.state.sorted);
    return (
      <div className="tableContainer">  
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="titleColumn">Rank</th>
              <th className="stockNumColumn">Stock</th>
              <th className="esNumColumn">Q1 - % Inside Expected Move</th>
            </tr>
          </thead>
          <tbody>
        {this.state.sorted.map((row, i) => (            
            <tr key={i}>
              <td>{i + 1}</td>
              <td><Link to={`/results/${this.state.sorted[i].stock}`}>{this.state.sorted[i].stock}</Link></td>
              <td>{this.state.sorted[i].q1PercentInside}%</td>
            </tr>  
            ))}                                                                   
          </tbody>
        </table><br/>
      </div>         
    );
  }
}
          
export default Q1PercentInside;