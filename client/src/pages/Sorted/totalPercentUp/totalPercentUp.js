import React, { Component } from "react";
import API from "../../../utils/API";
import "./totalPercentUp.css";

class TotalPercentUp extends Component {
  state = {
    sorted: []
  };

  componentDidMount() {
    this.loadSorted();
  }

  loadSorted = () => {
    API.getSorted()
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
              <th className="esNumColumn">Total % Up</th>
            </tr>
          </thead>
          <tbody>
        {this.state.sorted.map((row, i) => (            
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{this.state.sorted[i].stock}</td>
              <td>{this.state.sorted[i].totalPercentUp}%</td>
            </tr>  
            ))}                                                                   
          </tbody>
        </table><br/>
      </div>         
    );
  }
}
          
export default TotalPercentUp;