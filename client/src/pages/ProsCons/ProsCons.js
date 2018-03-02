import React, { Component } from "react";
import API from "../../utils/API";
import "./ProsCons.css";
import { Link } from "react-router-dom";

  let prosArray = [];
  let consArray = [];

class ProsCons extends Component {
  state = {
    totalpercentup: [],
    percentInside: [],
    amOver2XemPercent: [],
    amUnder2XemPercent: [],
    amUnder175XemPercent: [],
    amUnder150XemPercent: [],
    amUnder125XemPercent: [],
    underEMPercent: [],
    amUnder75XemPercent: [],
    percentHalfEM: [],
    aboveAvgEM: [],
    belowAvgEM: [],
    q1PercentInside: [],
    q2PercentInside: [],
    q3PercentInside: [],
    q4PercentInside: [],    
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadTotalpercentup();
    this.loadPercentInside();
    this.loadAmOver2XemPercent();
    this.loadAmUnder2XemPercent();
    this.loadAmUnder175XemPercent(); 
    this.loadAmUnder150XemPercent();
    this.loadAmUnder125XemPercent();
    this.loadUnderEMPercent();
    this.loadAmUnder75XemPercent();
    this.loadPercentHalfEM();
    this.loadAboveAvgEM();
    this.loadBelowAvgEM();
    this.loadQ1PercentInside();
    this.loadQ2PercentInside();
    this.loadQ3PercentInside();
    this.loadQ4PercentInside();
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

  loadAmOver2XemPercent = () => {
    API.getAmOver2XemPercent()
    .then(res => this.setState({ amOver2XemPercent: res.data }))
    .catch(err => console.log(err));
  };

  loadAmUnder2XemPercent = () => {
    API.getAmUnder2XemPercent()
    .then(res => this.setState({ amUnder2XemPercent: res.data }))
    .catch(err => console.log(err));
  };

  loadAmUnder175XemPercent = () => {
    API.getAmUnder175XemPercent()
    .then(res => this.setState({ amUnder175XemPercent: res.data }))
    .catch(err => console.log(err));
  };

  loadAmUnder150XemPercent = () => {
    API.getAmUnder150XemPercent()
    .then(res => this.setState({ amUnder150XemPercent: res.data }))
    .catch(err => console.log(err));
  };

  loadAmUnder125XemPercent = () => {
    API.getAmUnder125XemPercent()
    .then(res => this.setState({ amUnder125XemPercent: res.data }))
    .catch(err => console.log(err));
  };

  loadUnderEMPercent = () => {
    API.getUnderEMPercent()
    .then(res => this.setState({ underEMPercent: res.data }))
    .catch(err => console.log(err));
  };

  loadAmUnder75XemPercent = () => {
    API.getAmUnder75XemPercent()
    .then(res => this.setState({ amUnder75XemPercent: res.data }))
    .catch(err => console.log(err));
  };

  loadPercentHalfEM = () => {
    API.getPercentHalfEM()
    .then(res => this.setState({ percentHalfEM: res.data }))
    .catch(err => console.log(err));
  };

  loadAboveAvgEM = () => {
    API.getAboveAvgEM()
    .then(res => this.setState({ aboveAvgEM: res.data }))
    .catch(err => console.log(err));
  };

  loadBelowAvgEM = () => {
    API.getBelowAvgEM()
    .then(res => this.setState({ belowAvgEM: res.data }))
    .catch(err => console.log(err));
  };

  loadQ1PercentInside = () => {
    API.getQ1PercentInside()
    .then(res => this.setState({ q1PercentInside: res.data }))
    .catch(err => console.log(err));
  };

  loadQ2PercentInside = () => {
    API.getQ2PercentInside()
    .then(res => this.setState({ q2PercentInside: res.data }))
    .catch(err => console.log(err));
  };

  loadQ3PercentInside = () => {
    API.getQ3PercentInside()
    .then(res => this.setState({ q3PercentInside: res.data }))
    .catch(err => console.log(err));
  };

  loadQ4PercentInside = () => {
    API.getQ4PercentInside()
    .then(res => this.setState({ q4PercentInside: res.data }))
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
        if (prosArray.indexOf(this.state.percentInside[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.percentInside[i]); 
        }
      } else if (this.state.percentInside[i].stock === this.props.match.params.stock && i > (this.state.percentInside.length - 10)) {
        if (consArray.indexOf(this.state.percentInside[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.percentInside[i]);
        }   
      }
    }
  };

  amOver2XemPercent = () => {
    for (let i = 0; i < this.state.amOver2XemPercent.length; i++) {
      if (this.state.amOver2XemPercent[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.amOver2XemPercent[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.amOver2XemPercent[i]); 
        }
      } else if (this.state.amOver2XemPercent[i].stock === this.props.match.params.stock && i > (this.state.amOver2XemPercent.length - 10)) {
        if (consArray.indexOf(this.state.amOver2XemPercent[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.amOver2XemPercent[i]);
        }   
      }
    }
  };

  amUnder2XemPercent = () => {
    for (let i = 0; i < this.state.amUnder2XemPercent.length; i++) {
      if (this.state.amUnder2XemPercent[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.amUnder2XemPercent[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.amUnder2XemPercent[i]); 
        }
      } else if (this.state.amUnder2XemPercent[i].stock === this.props.match.params.stock && i > (this.state.amUnder2XemPercent.length - 10)) {
        if (consArray.indexOf(this.state.amUnder2XemPercent[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.amUnder2XemPercent[i]);
        }   
      }
    }
  };

  amUnder175XemPercent = () => {
    for (let i = 0; i < this.state.amUnder175XemPercent.length; i++) {
      if (this.state.amUnder175XemPercent[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.amUnder175XemPercent[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.amUnder175XemPercent[i]); 
        }
      } else if (this.state.amUnder175XemPercent[i].stock === this.props.match.params.stock && i > (this.state.amUnder175XemPercent.length - 10)) {
        if (consArray.indexOf(this.state.amUnder175XemPercent[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.amUnder175XemPercent[i]);
        }   
      }
    }
  };

  amUnder150XemPercent = () => {
    for (let i = 0; i < this.state.amUnder150XemPercent.length; i++) {
      if (this.state.amUnder150XemPercent[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.amUnder150XemPercent[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.amUnder150XemPercent[i]); 
        }
      } else if (this.state.amUnder150XemPercent[i].stock === this.props.match.params.stock && i > (this.state.amUnder150XemPercent.length - 10)) {
        if (consArray.indexOf(this.state.amUnder150XemPercent[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.amUnder150XemPercent[i]);
        }   
      }
    }
  };

  amUnder125XemPercent = () => {
    for (let i = 0; i < this.state.amUnder125XemPercent.length; i++) {
      if (this.state.amUnder125XemPercent[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.amUnder125XemPercent[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.amUnder125XemPercent[i]); 
        }
      } else if (this.state.amUnder125XemPercent[i].stock === this.props.match.params.stock && i > (this.state.amUnder125XemPercent.length - 10)) {
        if (consArray.indexOf(this.state.amUnder125XemPercent[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.amUnder125XemPercent[i]);
        }   
      }
    }
  };

  underEMPercent = () => {
    for (let i = 0; i < this.state.underEMPercent.length; i++) {
      if (this.state.underEMPercent[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.underEMPercent[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.underEMPercent[i]); 
        }
      } else if (this.state.underEMPercent[i].stock === this.props.match.params.stock && i > (this.state.underEMPercent.length - 10)) {
        if (consArray.indexOf(this.state.underEMPercent[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.underEMPercent[i]);
        }   
      }
    }
  };

  amUnder75XemPercent = () => {
    for (let i = 0; i < this.state.amUnder75XemPercent.length; i++) {
      if (this.state.amUnder75XemPercent[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.amUnder75XemPercent[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.amUnder75XemPercent[i]); 
        }
      } else if (this.state.amUnder75XemPercent[i].stock === this.props.match.params.stock && i > (this.state.amUnder75XemPercent.length - 10)) {
        if (consArray.indexOf(this.state.amUnder75XemPercent[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.amUnder75XemPercent[i]);
        }   
      }
    }
  };

  percentHalfEM = () => {
    for (let i = 0; i < this.state.percentHalfEM.length; i++) {
      if (this.state.percentHalfEM[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.percentHalfEM[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.percentHalfEM[i]); 
        }
      } else if (this.state.percentHalfEM[i].stock === this.props.match.params.stock && i > (this.state.percentHalfEM.length - 10)) {
        if (consArray.indexOf(this.state.percentHalfEM[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.percentHalfEM[i]);
        }   
      }
    }
  };

  aboveAvgEM = () => {
    for (let i = 0; i < this.state.aboveAvgEM.length; i++) {
      if (this.state.aboveAvgEM[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.aboveAvgEM[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.aboveAvgEM[i]); 
        }
      } else if (this.state.aboveAvgEM[i].stock === this.props.match.params.stock && i > (this.state.aboveAvgEM.length - 10)) {
        if (consArray.indexOf(this.state.aboveAvgEM[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.aboveAvgEM[i]);
        }   
      }
    }
  };

  belowAvgEM = () => {
    for (let i = 0; i < this.state.belowAvgEM.length; i++) {
      if (this.state.belowAvgEM[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.belowAvgEM[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.belowAvgEM[i]); 
        }
      } else if (this.state.belowAvgEM[i].stock === this.props.match.params.stock && i > (this.state.belowAvgEM.length - 10)) {
        if (consArray.indexOf(this.state.belowAvgEM[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.belowAvgEM[i]);
        }   
      }
    }
  };

  q1PercentInside = () => {
    for (let i = 0; i < this.state.q1PercentInside.length; i++) {
      if (this.state.q1PercentInside[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.q1PercentInside[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.q1PercentInside[i]); 
        }
      } else if (this.state.q1PercentInside[i].stock === this.props.match.params.stock && i > (this.state.q1PercentInside.length - 10)) {
        if (consArray.indexOf(this.state.q1PercentInside[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.q1PercentInside[i]);
        }   
      }
    }
  };

  q2PercentInside = () => {
    for (let i = 0; i < this.state.q2PercentInside.length; i++) {
      if (this.state.q2PercentInside[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.q2PercentInside[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.q2PercentInside[i]); 
        }
      } else if (this.state.q2PercentInside[i].stock === this.props.match.params.stock && i > (this.state.q2PercentInside.length - 10)) {
        if (consArray.indexOf(this.state.q2PercentInside[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.q2PercentInside[i]);
        }   
      }
    }
  };

  q3PercentInside = () => {
    for (let i = 0; i < this.state.q3PercentInside.length; i++) {
      if (this.state.q3PercentInside[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.q3PercentInside[i]) > -1) {
          break;
        } else {
          // // eslint-disable-next-line
          // this.state.q3PercentInside[i]['Q3 - % Inside Expected Move'] = this.state.q3PercentInside[i].q3PercentInside;
          // delete this.state.q3PercentInside[i].q3PercentInside;
          return prosArray.push(this.state.q3PercentInside[i]); 
        }
      } else if (this.state.q3PercentInside[i].stock === this.props.match.params.stock && i > (this.state.q3PercentInside.length - 10)) {
        if (consArray.indexOf(this.state.q3PercentInside[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.q3PercentInside[i]);
        }   
      }
    }
  };

  q4PercentInside = () => {
    for (let i = 0; i < this.state.q4PercentInside.length; i++) {
      if (this.state.q4PercentInside[i].stock === this.props.match.params.stock && i < 10) {
        if (prosArray.indexOf(this.state.q4PercentInside[i]) > -1) {
          break;
        } else {
          return prosArray.push(this.state.q4PercentInside[i]); 
        }
      } else if (this.state.q4PercentInside[i].stock === this.props.match.params.stock && i > (this.state.q4PercentInside.length - 10)) {
        if (consArray.indexOf(this.state.q4PercentInside[i]) > -1) {
          break;
        } else {
          return consArray.push(this.state.q4PercentInside[i]);
        }   
      }
    }
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  renderTable(category, stat) {
    return (
      <tr key={Math.random()}>
        <td><a href={"/sorted/"+ Object.keys(category)[2]}>{Object.keys(category)[2]
          .replace('totalPercentUp', 'Total % Up')
          .replace('percentInside', 'Total % Inside Expected Move')
          .replace('amOver2XemPercent', 'Actual ≥ 2x Expected Move')
          .replace('amUnder2XemPercent', 'Actual ≤ 2x Expected Move')
          .replace('amUnder175XemPercent', 'Actual ≤ 1.75x Expected Move')
          .replace('amUnder150XemPercent', 'Actual ≤ 1.5x Expected Move')
          .replace('amUnder125XemPercent', 'Actual ≤ 1.25x Expected Move')
          .replace('underEMPercent', '≤ The Expected Move')
          .replace('amUnder75XemPercent', 'Actual ≤ .75x Expected Move')
          .replace('percentHalfEM', 'Actual ≤ .5x Expected Move')
          .replace('aboveAvgEM', 'Above Avg % Expected Move - % Inside')
          .replace('belowAvgEM', 'Below Avg % Expected Move - % Inside')
          .replace('q1PercentInside', 'Q1 - % Inside Expected Move')
          .replace('q2PercentInside', 'Q2 - % Inside Expected Move')
          .replace('q3PercentInside', 'Q3 - % Inside Expected Move')
          .replace('q4PercentInside', 'Q4 - % Inside Expected Move')
        }</a></td>
        <td>{Object.values(category)[2]}%</td>
      </tr>
    )};

  render() {
    this.totalPercentUp();
    this.percentInside();
    this.amOver2XemPercent();
    this.amUnder2XemPercent();
    this.amUnder175XemPercent(); 
    this.amUnder150XemPercent();
    this.amUnder125XemPercent();
    this.underEMPercent();
    this.amUnder75XemPercent();
    this.percentHalfEM();
    this.aboveAvgEM();
    this.belowAvgEM();
    this.q1PercentInside();
    this.q2PercentInside();
    this.q3PercentInside();
    this.q4PercentInside();

    return (
      <div className="tableContainer">
        <h3>Pros & Cons</h3>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="titleCol"><Link style={{ textDecoration: 'none', color:'black'}} to={`/results/${this.props.match.params.stock}`}>{this.props.match.params.stock} Pros - </Link> Ranked the Top 10</th>
              <th className="blankCol"></th>
            </tr>
          </thead>
          <tbody>
            {prosArray.map(this.renderTable)}
          </tbody>
        </table><br/>

        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="titleCol"><Link style={{ textDecoration: 'none', color:'black'}} to={`/results/${this.props.match.params.stock}`}>{this.props.match.params.stock} Cons - </Link> Ranked the Bottom 10</th>
              <th className="blankCol"></th>
            </tr>
          </thead>
          <tbody>
            {consArray.map(this.renderTable)}    
          </tbody>
        </table>
      </div>         
    );
  }
}
          
export default ProsCons;