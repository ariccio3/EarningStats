import React, { Component } from "react";
import API from "../../../utils/API";
import "./totalPercentUp.css";
import { Link } from "react-router-dom";

class TotalPercentUp extends Component {
  state = {
    sorted: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);    
    this.loadSorted();
  }

  loadSorted = () => {
    API.getTotalpercentup()
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
              <th className="col-xs-2">Rank</th>
              <th className="col-xs-4">Stock</th>
              <th className="col-xs-6">Total % Up</th>
            </tr>
          </thead>
          <tbody>
        {this.state.sorted.map((row, i) => (            
            <tr key={i}>
              <td>{i + 1}</td>
              <td><Link to={`/results/${this.state.sorted[i].stock}`}>{this.state.sorted[i].stock}</Link></td>
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