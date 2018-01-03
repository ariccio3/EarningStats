import React, { Component } from "react";
import API from "../../../utils/API";
import "./doubleEM.css";

class DoubleEM extends Component {
  state = {
    sorted: []
  };

  componentDidMount() {
    this.loadSorted();
  }

  loadSorted = () => {
    API.getDoubleEM()
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
              <th className="esNumColumn"># Double the Expected Move</th>
            </tr>
          </thead>
          <tbody>
        {this.state.sorted.map((row, i) => (            
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{this.state.sorted[i].stock}</td>
              <td>{this.state.sorted[i].doubleEM}</td>
            </tr>  
            ))}                                                                   
          </tbody>
        </table><br/>
      </div>         
    );
  }
}
          
export default DoubleEM;