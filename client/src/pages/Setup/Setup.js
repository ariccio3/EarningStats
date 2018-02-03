import React, { Component } from "react";
// import API from "../../utils/API";
import "./Setup.css";

class Setup extends Component {
  state = {
    watchList: [],
    stock1: "",
    stock2: "",
    stock3: "",
    stock4: "",
    price1: "",
    price2: "",
    price3: "",
    price4: "",
    em1: "",
    em2: "",
    em3: "",
    em4: ""
  };

  componentDidMount() {
    window.scrollTo(0, 0);    
    // this.loadWatchList();
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
      // console.log(this.state.watchList);
      console.log(this.state.stock1);
      console.log(this.state.stock2);
      console.log(this.state.stock3);
      console.log(this.state.stock4);
      console.log(this.state.price1);
      console.log(this.state.price2);
      console.log(this.state.price3);
      console.log(this.state.price4);
      console.log(this.state.em1);
      console.log(this.state.em2);
      console.log(this.state.em3);
      console.log(this.state.em4);

    return (
      <div className="tableContainer"> 
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="header"></th> 
              <th className="header">#1</th> 
              <th className="header">#2</th> 
              <th className="header">#3</th> 
              <th className="header">#4</th> 
            </tr>
           </thead> 
          <tbody>
            <tr>
              <td className="titleCol"><b>Enter Stock Ticker &ensp; →</b></td>
              <td className="dataCol"><input type="text" name="stock1" className="form-control userInput" value={this.state.stock1} onChange={this.handleInputChange} /></td>
              <td className="dataCol"><input type="text" name="stock2" className="form-control userInput" value={this.state.stock2} onChange={this.handleInputChange} /></td>
              <td className="dataCol"><input type="text" name="stock3" className="form-control userInput" value={this.state.stock3} onChange={this.handleInputChange} /></td>
              <td className="dataCol"><input type="text" name="stock4" className="form-control userInput" value={this.state.stock4} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <td className="titleCol"><b>Enter Current Price &ensp; →</b></td>
              <td className="dataCol"><input type="text" name="price1" className="form-control userInput" value={this.state.price1} onChange={this.handleInputChange} /></td>
              <td className="dataCol"><input type="text" name="price2" className="form-control userInput" value={this.state.price2} onChange={this.handleInputChange} /></td>
              <td className="dataCol"><input type="text" name="price3" className="form-control userInput" value={this.state.price3} onChange={this.handleInputChange} /></td>
              <td className="dataCol"><input type="text" name="price4" className="form-control userInput" value={this.state.price4} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <td className="titleCol"><b>Enter Expected Move &ensp; →</b></td>
              <td className="dataCol"><input type="text" name="em1" className="form-control userInput" value={this.state.em1} onChange={this.handleInputChange} /></td>
              <td className="dataCol"><input type="text" name="em2" className="form-control userInput" value={this.state.em2} onChange={this.handleInputChange} /></td>
              <td className="dataCol"><input type="text" name="em3" className="form-control userInput" value={this.state.em3} onChange={this.handleInputChange} /></td>
              <td className="dataCol"><input type="text" name="em4" className="form-control userInput" value={this.state.em4} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <td className="titleCol">Expected % Move</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em1 / this.state.price1 *100)) ? (Math.round(this.state.em1 / this.state.price1 *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em2 / this.state.price2 *100)) ? (Math.round(this.state.em2 / this.state.price2 *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em3 / this.state.price3 *100)) ? (Math.round(this.state.em3 / this.state.price3 *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em4 / this.state.price4 *100)) ? (Math.round(this.state.em4 / this.state.price4 *10000)/100 + '%') : ""}</td>
            </tr> 
          </tbody>            
        </table><br/>

        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="header"></th> 
              <th className="header">#1</th> 
              <th className="header">#2</th> 
              <th className="header">#3</th> 
              <th className="header">#4</th> 
            </tr>
           </thead> 
          <tbody>            
            <tr>
              <td className="titleCol">Times Stock Has Moved This Much</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">Short Call % of Expected Move</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">Call % Change</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>                                                                                
            <tr>
              <td className="titleCol"><b>Enter Call Strike &ensp; →</b></td>
              <td className="dataCol"><input type="text" className="form-control userInput" /></td>
              <td className="dataCol"><input type="text" className="form-control userInput" /></td>
              <td className="dataCol"><input type="text" className="form-control userInput" /></td>
              <td className="dataCol"><input type="text" className="form-control userInput" /></td>
            </tr>
            <tr>
              <td className="titleCol"><b>Enter Put Strike &ensp; →</b></td>
              <td className="dataCol"><input type="text" className="form-control userInput" /></td>
              <td className="dataCol"><input type="text" className="form-control userInput" /></td>
              <td className="dataCol"><input type="text" className="form-control userInput" /></td>
              <td className="dataCol"><input type="text" className="form-control userInput" /></td>
            </tr>
            <tr>
              <td className="titleCol">Put % Change</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">Short Put % of Expected Move</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">Times Stock Has Moved This Much</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
          </tbody>            
       </table><br/>

        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="header"></th> 
              <th className="header">#1</th> 
              <th className="header">#2</th> 
              <th className="header">#3</th> 
              <th className="header">#4</th> 
            </tr>
           </thead> 
          <tbody>            
            <tr>
              <td className="titleCol">2x Upside Move</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">1.75x Upside Move</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">1.5x Upside Move</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>                                                                                
            <tr>
              <td className="titleCol">1.25x Upside Move</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">Expected Move Up ↑</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">Expected Move Down ↓</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">1.25x Downside Move</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">1.5x Downside Move</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">1.75x Downside Move</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
            <tr>
              <td className="titleCol">2x Downside Move</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
          </tbody>            
       </table><br/>       
      </div>         
    );
  }
}
          
export default Setup;