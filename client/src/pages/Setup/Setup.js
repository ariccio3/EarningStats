import React, { Component } from "react";
import API from "../../utils/API";
import "./Setup.css";

class Setup extends Component {
  state = {
    setupList: [],
    stock1: "",
    stock2: "",
    stock3: "",
    price1: "",
    price2: "",
    price3: "",
    em1: "",
    em2: "",
    em3: "",
    call1: "",
    call2: "",
    call3: "",
    put1: "",
    put2: "",
    put3: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);    
    this.loadActualPercentOfExpected();
  }

  loadActualPercentOfExpected = () => {
    API.getActualPercentOfExpected()
    .then(res => this.setState({ setupList: res.data }))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
      this.stockCall1();
      this.stockCall2();
      this.stockCall3();
      this.stockPut1();
      this.stockPut2();
      this.stockPut3();

    this.setState({
      [name]: value
    });

  };

  stockCall1 = () => {
    let count = 0;
    let dataCol1 = Math.round((this.state.call1 - this.state.price1)/this.state.em1*100)/100;
    for (let i = 0; i < this.state.setupList.length; i++) {
      if (this.state.setupList[i].stock === this.state.stock1.toUpperCase() && this.state.setupList[i].actualPercentOfExpectedMove >= dataCol1) {
        count++;
      } 
    } 
    return document.getElementById("timesCall1").innerHTML = count;
  };

  stockCall2 = () => {
    let count = 0;
    let dataCol2 = Math.round((this.state.call2 - this.state.price2)/this.state.em2*100)/100;
    for (let i = 0; i < this.state.setupList.length; i++) {
      if (this.state.setupList[i].stock === this.state.stock2.toUpperCase() && this.state.setupList[i].actualPercentOfExpectedMove >= dataCol2) {
        count++;
      } 
    } 
    return document.getElementById("timesCall2").innerHTML = count;
  };  

  stockCall3 = () => {
    let count = 0;
    let dataCol3 = Math.round((this.state.call3 - this.state.price3)/this.state.em3*100)/100;
    for (let i = 0; i < this.state.setupList.length; i++) {
      if (this.state.setupList[i].stock === this.state.stock3.toUpperCase() && this.state.setupList[i].actualPercentOfExpectedMove >= dataCol3) {
        count++;
      } 
    } 
    return document.getElementById("timesCall3").innerHTML = count;
  };  

  stockPut1 = () => {
    let count = 0;
    let dataCol1 = Math.round((this.state.price1 - this.state.put1)/this.state.em1*100)/100;
    for (let i = 0; i < this.state.setupList.length; i++) {
      if (this.state.setupList[i].stock === this.state.stock1.toUpperCase() && this.state.setupList[i].actualPercentOfExpectedMove >= dataCol1) {
        count++;
      } 
    } 
    return document.getElementById("timesPut1").innerHTML = count;
  };

  stockPut2 = () => {
    let count = 0;
    let dataCol2 = Math.round((this.state.price2 - this.state.put2)/this.state.em2*100)/100;
    for (let i = 0; i < this.state.setupList.length; i++) {
      if (this.state.setupList[i].stock === this.state.stock2.toUpperCase() && this.state.setupList[i].actualPercentOfExpectedMove >= dataCol2) {
        count++;
      } 
    }
    return document.getElementById("timesPut2").innerHTML = count;
  };  

  stockPut3 = () => {
    let count = 0;
    let dataCol3 = Math.round((this.state.price3 - this.state.put3)/this.state.em3*100)/100;
    for (let i = 0; i < this.state.setupList.length; i++) {
      if (this.state.setupList[i].stock === this.state.stock3.toUpperCase() && this.state.setupList[i].actualPercentOfExpectedMove >= dataCol3) {
        count++;
      } 
    } 
    return document.getElementById("timesPut3").innerHTML = count;
  };  

  render() {
console.log(this.state.em1);
console.log(this.state.price1);

    return (
      <div className="tableContainer"> 
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="headerTitle col-md-auto"></th> 
              <th className="header">#1</th> 
              <th className="header">#2</th> 
              <th className="header">#3</th> 
            </tr>
           </thead> 
          <tbody>
            <tr>
              <td className="titleCol"><b>Enter Stock Ticker &ensp; →</b></td>
              <td className="dataInputCol"><input type="text" name="stock1" className="form-control userInput" value={this.state.stock1} onChange={this.handleInputChange} tabIndex="1" /></td>
              <td className="dataInputCol"><input type="text" name="stock2" className="form-control userInput" value={this.state.stock2} onChange={this.handleInputChange} tabIndex="6" /></td>
              <td className="dataInputCol"><input type="text" name="stock3" className="form-control userInput" value={this.state.stock3} onChange={this.handleInputChange} tabIndex="11" /></td>
            </tr>
            <tr>
              <td className="titleCol"><b>Enter Current Price &ensp; →</b></td>
              <td className="dataInputCol"><input type="text" name="price1" className="form-control userInput" value={this.state.price1} onChange={this.handleInputChange} tabIndex="2" /></td>
              <td className="dataInputCol"><input type="text" name="price2" className="form-control userInput" value={this.state.price2} onChange={this.handleInputChange} tabIndex="7" /></td>
              <td className="dataInputCol"><input type="text" name="price3" className="form-control userInput" value={this.state.price3} onChange={this.handleInputChange} tabIndex="12" /></td>
            </tr>
            <tr>
              <td className="titleCol"><b>Enter Expected Move &nbsp; →</b></td>
              <td className="dataInputCol"><input type="text" name="em1" className="form-control userInput" value={this.state.em1} onChange={this.handleInputChange} tabIndex="3" /></td>
              <td className="dataInputCol"><input type="text" name="em2" className="form-control userInput" value={this.state.em2} onChange={this.handleInputChange} tabIndex="8" /></td>
              <td className="dataInputCol"><input type="text" name="em3" className="form-control userInput" value={this.state.em3} onChange={this.handleInputChange} tabIndex="13" /></td>
            </tr>
            <tr>
              <td className="titleCol">Expected % Move</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em1 / this.state.price1 *100)) ? (Math.round(this.state.em1 / this.state.price1 *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em2 / this.state.price2 *100)) ? (Math.round(this.state.em2 / this.state.price2 *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em3 / this.state.price3 *100)) ? (Math.round(this.state.em3 / this.state.price3 *10000)/100 + '%') : ""}</td>
            </tr> 
          </tbody>            
        </table>

        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="headerTitle"></th> 
              <th className="header">#1</th> 
              <th className="header">#2</th> 
              <th className="header">#3</th> 
            </tr>
           </thead> 
          <tbody>            
            <tr>
              <td className="titleCol">2x Upside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*2)*100,10)/100)+(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*2)*100,10)/100)+(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*2)*100,10)/100)+(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*2)*100,10)/100)+(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*2)*100,10)/100)+(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*2)*100,10)/100)+(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">1.75x Upside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.75)*100,10)/100)+(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.75)*100,10)/100)+(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.75)*100,10)/100)+(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.75)*100,10)/100)+(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.75)*100,10)/100)+(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.75)*100,10)/100)+(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">1.5x Upside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.5)*100,10)/100)+(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.5)*100,10)/100)+(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.5)*100,10)/100)+(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.5)*100,10)/100)+(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.5)*100,10)/100)+(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.5)*100,10)/100)+(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
            </tr>                                                                                
            <tr>
              <td className="titleCol">1.25x Upside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.25)*100,10)/100)+(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.25)*100,10)/100)+(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.25)*100,10)/100)+(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.25)*100,10)/100)+(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.25)*100,10)/100)+(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.25)*100,10)/100)+(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">Expected Move Up ↑</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1)*100,10)/100)+(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1)*100,10)/100)+(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2)*100,10)/100)+(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2)*100,10)/100)+(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3)*100,10)/100)+(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3)*100,10)/100)+(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">Expected Move Down ↓</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1)*100,10)/100)-(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1)*100,10)/100)-(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2)*100,10)/100)-(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2)*100,10)/100)-(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3)*100,10)/100)-(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3)*100,10)/100)-(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
            </tr>
            <tr>
              <td className="titleCol">1.25x Downside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.25)*100,10)/100)-(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.25)*100,10)/100)-(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.25)*100,10)/100)-(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.25)*100,10)/100)-(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.25)*100,10)/100)-(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.25)*100,10)/100)-(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">1.5x Downside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.5)*100,10)/100)-(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.5)*100,10)/100)-(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.5)*100,10)/100)-(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.5)*100,10)/100)-(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.5)*100,10)/100)-(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.5)*100,10)/100)-(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">1.75x Downside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.75)*100,10)/100)-(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.75)*100,10)/100)-(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.75)*100,10)/100)-(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.75)*100,10)/100)-(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.75)*100,10)/100)-(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.75)*100,10)/100)-(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">2x Downside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*2)*100,10)/100)-(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*2)*100,10)/100)-(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*2)*100,10)/100)-(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*2)*100,10)/100)-(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*2)*100,10)/100)-(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*2)*100,10)/100)-(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
            </tr> 
          </tbody>            
       </table>

        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th className="headerTitle"></th> 
              <th className="header">#1</th> 
              <th className="header">#2</th> 
              <th className="header">#3</th>  
            </tr>
           </thead> 
          <tbody>
            <tr>
              <td className="titleCol">Times Stock Moved This Much</td>
              <td className="dataCol" id="timesCall1"></td>
              <td className="dataCol" id="timesCall2"></td>
              <td className="dataCol" id="timesCall3"></td>
            </tr> 
            <tr>
              <td className="titleCol">Spread ÷ Expected Move</td>
              <td className="dataCol" name="dataCol1">{!isNaN(Math.round((this.state.price1 - this.state.call1)/this.state.em2*100)/100) ? (Math.round((this.state.call1 - this.state.price1)/this.state.em1*100)/100) + 'x' : ""}</td>
              <td className="dataCol" name="dataCol2">{!isNaN(Math.round((this.state.price2 - this.state.call2)/this.state.em2*100)/100) ? (Math.round((this.state.call2 - this.state.price2)/this.state.em2*100)/100) + 'x' : ""}</td>
              <td className="dataCol" name="dataCol3">{!isNaN(Math.round((this.state.price3 - this.state.call3)/this.state.em3*100)/100) ? (Math.round((this.state.call3 - this.state.price3)/this.state.em3*100)/100) + 'x' : ""}</td>
            </tr>
            <tr>
              <td className="titleCol">Upside % Change</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.call1 / this.state.price1 *100)) ? (Math.round(((this.state.call1 / this.state.price1)-1) *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.call2 / this.state.price2 *100)) ? (Math.round(((this.state.call2 / this.state.price2)-1) *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.call3 / this.state.price3 *100)) ? (Math.round(((this.state.call3 / this.state.price3)-1) *10000)/100 + '%') : ""}</td>
            </tr>                                                                               
            <tr>
              <td className="titleCol"><b>Enter Call Strike &ensp; →</b></td>
              <td className="dataInputCol"><input type='text' name="call1" placeholder="0.00" className="form-control userInput" value={this.state.call1} onChange={this.handleInputChange} tabIndex="4" /></td>
              <td className="dataInputCol"><input type="text" name="call2" placeholder="0.00" className="form-control userInput" value={this.state.call2} onChange={this.handleInputChange} tabIndex="9" /></td>
              <td className="dataInputCol"><input type="text" name="call3" placeholder="0.00" className="form-control userInput" value={this.state.call3} onChange={this.handleInputChange} tabIndex="14" /></td>
            </tr>
            <tr>
              <td className="titleCol"><b>Enter Put Strike &ensp; →</b></td>
              <td className="dataInputCol"><input type="text" name="put1" placeholder="0.00" className="form-control userInput" value={this.state.put1} onChange={this.handleInputChange} tabIndex="5" /></td>
              <td className="dataInputCol"><input type="text" name="put2" placeholder="0.00" className="form-control userInput" value={this.state.put2} onChange={this.handleInputChange} tabIndex="10" /></td>
              <td className="dataInputCol"><input type="text" name="put3" placeholder="0.00" className="form-control userInput" value={this.state.put3} onChange={this.handleInputChange} tabIndex="15" /></td>
            </tr>
            <tr>
              <td className="titleCol">Downside % Change</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.put1 / this.state.price1 *100)) ? (Math.round(((this.state.put1 / this.state.price1)-1) *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.put2 / this.state.price2 *100)) ? (Math.round(((this.state.put2 / this.state.price2)-1) *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.put3 / this.state.price3 *100)) ? (Math.round(((this.state.put3 / this.state.price3)-1) *10000)/100 + '%') : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">Spread ÷ Expected Move</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price1 - this.state.put1)/this.state.em1*100)/100) ? (Math.round((this.state.price1 - this.state.put1)/this.state.em1*100)/100) + 'x' : ""}</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price2 - this.state.put2)/this.state.em2*100)/100) ? (Math.round((this.state.price2 - this.state.put2)/this.state.em2*100)/100) + 'x' : ""}</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price3 - this.state.put3)/this.state.em3*100)/100) ? (Math.round((this.state.price3 - this.state.put3)/this.state.em3*100)/100) + 'x' : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">Times Stock Moved This Much</td>
              <td className="dataCol" id="timesPut1"></td>
              <td className="dataCol" id="timesPut2"></td>
              <td className="dataCol" id="timesPut3"></td>
            </tr> 
          </tbody>            
       </table>

      </div>         
    );
  }
}
          
export default Setup;