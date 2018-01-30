import React, { Component } from "react";
import API from "../../utils/API";
import "./ProsCons.css";
import Table from "../../components/Table";
// import { Link } from "react-router-dom";

  let prosArray = [];
  let consArray = [];

class ProsCons extends Component {
  state = {
    totalpercentup: [],
    percentInside: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadTotalpercentup();
    this.loadPercentInside();   
  }

  loadTotalpercentup = () => {
    API.getTotalpercentup()
    .then(res => this.setState({ totalpercentup: res.data }))
    .catch(err => console.log(err));
  };

  loadPercentInside = () => {
    API.getPercentInside()
    .then(res => this.setState({ percentInside: res.data }))
    .catch(err => console.log(err));
  };

  totalPercentUp = () => {
    for (let i = 0; i < this.state.totalpercentup.length; i++) {
      if (this.state.totalpercentup[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.totalpercentup[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.totalpercentup[i]);          
        } 
      } else if (this.state.totalpercentup[i].stock === this.props.match.params.stock && i > (this.state.totalpercentup.length - 10)) {
        if (consArray.indexOf(this.state.totalpercentup[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.totalpercentup[i]);   
        }
      }
    }
  };

  percentInside = () => {
    for (let i = 0; i < this.state.percentInside.length; i++) {
      if (this.state.percentInside[i].stock === this.props.match.params.stock && i < 10) {
        return prosArray.push(this.state.percentInside[i]); 
      } else if (this.state.percentInside[i].stock === this.props.match.params.stock && i > (this.state.percentInside.length - 10)) {
        return consArray.push(this.state.percentInside[i]);   
      }
    }
  };

  render() {
this.totalPercentUp();
this.percentInside();
      // console.log(this.state.percentInside);
      // console.log(this.state.percentInside);
      // console.log(this.props.match.params.stock);
      console.log(prosArray);
      console.log(consArray);

      // let uniqueStocks = this.watchList();
    let proList = prosArray.map((result) => 
      <Table key={result.toString()} stock={result} />
    ); 

          // let uniqueStocks = this.watchList();
    let conList = consArray.map((result) => 
      <Table key={result.toString()} stock={result} />
    ); 

    return (
      <div className="tableContainer">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="titleCol">{this.props.match.params.stock} EarningStats Pros</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {proList}
              <td></td>
            </tr>
          </tbody>
        </table><br/>

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="titleCol">{this.props.match.params.stock} EarningStats Cons</th>
              <th></th>
            </tr>
          </thead>
          <tbody>        
            <tr>
              {conList}
              <td></td>
            </tr>         
          </tbody>
        </table>
      </div>         
    );
  }
}
          
export default ProsCons;