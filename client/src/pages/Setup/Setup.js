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
    em4: "",
    call1: "",
    call2: "",
    call3: "",
    call4: "",
    put1: "",
    put2: "",
    put3: "",
    put4: ""
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
      console.log(this.state.call1);
      console.log(this.state.call2);
      console.log(this.state.call3);
      console.log(this.state.call4);
      console.log(this.state.put1);
      console.log(this.state.put2);
      console.log(this.state.put3);
      console.log(this.state.put4);

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
              <td className="dataInputCol"><input type="text" name="stock1" className="form-control userInput" value={this.state.stock1} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="stock2" className="form-control userInput" value={this.state.stock2} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="stock3" className="form-control userInput" value={this.state.stock3} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="stock4" className="form-control userInput" value={this.state.stock4} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <td className="titleCol"><b>Enter Current Price &ensp; →</b></td>
              <td className="dataInputCol"><input type="text" name="price1" className="form-control userInput" value={this.state.price1} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="price2" className="form-control userInput" value={this.state.price2} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="price3" className="form-control userInput" value={this.state.price3} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="price4" className="form-control userInput" value={this.state.price4} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <td className="titleCol"><b>Enter Expected Move &nbsp; →</b></td>
              <td className="dataInputCol"><input type="text" name="em1" className="form-control userInput" value={this.state.em1} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="em2" className="form-control userInput" value={this.state.em2} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="em3" className="form-control userInput" value={this.state.em3} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="em4" className="form-control userInput" value={this.state.em4} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <td className="titleCol">Expected % Move</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em1 / this.state.price1 *100)) ? (Math.round(this.state.em1 / this.state.price1 *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em2 / this.state.price2 *100)) ? (Math.round(this.state.em2 / this.state.price2 *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em3 / this.state.price3 *100)) ? (Math.round(this.state.em3 / this.state.price3 *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.em4 / this.state.price4 *100)) ? (Math.round(this.state.em4 / this.state.price4 *10000)/100 + '%') : ""}</td>
            </tr> 
          </tbody>            
        </table>

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
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*2)*100,10)/100)+(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*2)*100,10)/100)+(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*2)*100,10)/100)+(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*2)*100,10)/100)+(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*2)*100,10)/100)+(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*2)*100,10)/100)+(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em4*2)*100,10)/100)+(parseInt(this.state.price4,10)) ? ((parseInt((this.state.em4*2)*100,10)/100)+(parseInt(this.state.price4,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">1.75x Upside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.75)*100,10)/100)+(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.75)*100,10)/100)+(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.75)*100,10)/100)+(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.75)*100,10)/100)+(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.75)*100,10)/100)+(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.75)*100,10)/100)+(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em4*1.75)*100,10)/100)+(parseInt(this.state.price4,10)) ? ((parseInt((this.state.em4*1.75)*100,10)/100)+(parseInt(this.state.price4,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">1.5x Upside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.5)*100,10)/100)+(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.5)*100,10)/100)+(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.5)*100,10)/100)+(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.5)*100,10)/100)+(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.5)*100,10)/100)+(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.5)*100,10)/100)+(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em4*1.5)*100,10)/100)+(parseInt(this.state.price4,10)) ? ((parseInt((this.state.em4*1.5)*100,10)/100)+(parseInt(this.state.price4,10))).toFixed(2) : ""}</td>
            </tr>                                                                                
            <tr>
              <td className="titleCol">1.25x Upside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.25)*100,10)/100)+(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.25)*100,10)/100)+(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.25)*100,10)/100)+(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.25)*100,10)/100)+(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.25)*100,10)/100)+(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.25)*100,10)/100)+(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em4*1.25)*100,10)/100)+(parseInt(this.state.price4,10)) ? ((parseInt((this.state.em4*1.25)*100,10)/100)+(parseInt(this.state.price4,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">Expected Move Up ↑</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1)*100,10)/100)+(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1)*100,10)/100)+(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2)*100,10)/100)+(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2)*100,10)/100)+(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3)*100,10)/100)+(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3)*100,10)/100)+(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em4)*100,10)/100)+(parseInt(this.state.price4,10)) ? ((parseInt((this.state.em4)*100,10)/100)+(parseInt(this.state.price4,10))).toFixed(2) : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">Expected Move Down ↓</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1)*100,10)/100)-(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1)*100,10)/100)-(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2)*100,10)/100)-(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2)*100,10)/100)-(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3)*100,10)/100)-(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3)*100,10)/100)-(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em4)*100,10)/100)-(parseInt(this.state.price4,10)) ? ((parseInt((this.state.em4)*100,10)/100)-(parseInt(this.state.price4,10))).toFixed(2) : ""}</td> 
            </tr>
            <tr>
              <td className="titleCol">1.25x Downside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.25)*100,10)/100)-(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.25)*100,10)/100)-(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.25)*100,10)/100)-(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.25)*100,10)/100)-(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.25)*100,10)/100)-(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.25)*100,10)/100)-(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em4*1.25)*100,10)/100)-(parseInt(this.state.price4,10)) ? ((parseInt((this.state.em4*1.25)*100,10)/100)-(parseInt(this.state.price4,10))).toFixed(2) : ""}</td> 
            </tr> 
            <tr>
              <td className="titleCol">1.5x Downside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.5)*100,10)/100)-(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.5)*100,10)/100)-(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.5)*100,10)/100)-(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.5)*100,10)/100)-(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.5)*100,10)/100)-(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.5)*100,10)/100)-(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em4*1.5)*100,10)/100)-(parseInt(this.state.price4,10)) ? ((parseInt((this.state.em4*1.5)*100,10)/100)-(parseInt(this.state.price4,10))).toFixed(2) : ""}</td> 
            </tr> 
            <tr>
              <td className="titleCol">1.75x Downside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*1.75)*100,10)/100)-(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*1.75)*100,10)/100)-(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*1.75)*100,10)/100)-(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*1.75)*100,10)/100)-(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*1.75)*100,10)/100)-(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*1.75)*100,10)/100)-(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em4*1.75)*100,10)/100)-(parseInt(this.state.price4,10)) ? ((parseInt((this.state.em4*1.75)*100,10)/100)-(parseInt(this.state.price4,10))).toFixed(2) : ""}</td> 
            </tr> 
            <tr>
              <td className="titleCol">2x Downside Move</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em1*2)*100,10)/100)-(parseInt(this.state.price1,10)) ? ((parseInt((this.state.em1*2)*100,10)/100)-(parseInt(this.state.price1,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em2*2)*100,10)/100)-(parseInt(this.state.price2,10)) ? ((parseInt((this.state.em2*2)*100,10)/100)-(parseInt(this.state.price2,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em3*2)*100,10)/100)-(parseInt(this.state.price3,10)) ? ((parseInt((this.state.em3*2)*100,10)/100)-(parseInt(this.state.price3,10))).toFixed(2) : ""}</td>
              <td className="dataCol">{!isNaN(parseInt((this.state.em4*2)*100,10)/100)-(parseInt(this.state.price4,10)) ? ((parseInt((this.state.em4*2)*100,10)/100)-(parseInt(this.state.price4,10))).toFixed(2) : ""}</td> 
            </tr> 
          </tbody>            
       </table>

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
              <td className="titleCol">Upside % of Expected Move</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price1 - this.state.call1)/this.state.em1*100)/100) ? (Math.round((this.state.call1 - this.state.price1)/this.state.em1*100)/100) + '%' : ""}</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price2 - this.state.call2)/this.state.em2*100)/100) ? (Math.round((this.state.call2 - this.state.price2)/this.state.em2*100)/100) + '%' : ""}</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price3 - this.state.call3)/this.state.em3*100)/100) ? (Math.round((this.state.call3 - this.state.price3)/this.state.em3*100)/100) + '%' : ""}</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price4 - this.state.call4)/this.state.em4*100)/100) ? (Math.round((this.state.call4 - this.state.price4)/this.state.em4*100)/100) + '%' : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">Upside % Change</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.call1 / this.state.price1 *100)) ? (Math.round(((this.state.call1 / this.state.price1)-1) *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.call2 / this.state.price2 *100)) ? (Math.round(((this.state.call2 / this.state.price2)-1) *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.call3 / this.state.price3 *100)) ? (Math.round(((this.state.call3 / this.state.price3)-1) *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.call4 / this.state.price4 *100)) ? (Math.round(((this.state.call4 / this.state.price4)-1) *10000)/100 + '%') : ""}</td>
            </tr>                                                                               
            <tr>
              <td className="titleCol"><b>Enter Call Strike &ensp; →</b></td>
              <td className="dataInputCol"><input type="text" name="call1" className="form-control userInput" value={this.state.call1} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="call2" className="form-control userInput" value={this.state.call2} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="call3" className="form-control userInput" value={this.state.call3} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="call4" className="form-control userInput" value={this.state.call4} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <td className="titleCol"><b>Enter Put Strike &ensp; →</b></td>
              <td className="dataInputCol"><input type="text" name="put1" className="form-control userInput" value={this.state.put1} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="put2" className="form-control userInput" value={this.state.put2} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="put3" className="form-control userInput" value={this.state.put3} onChange={this.handleInputChange} /></td>
              <td className="dataInputCol"><input type="text" name="put4" className="form-control userInput" value={this.state.put4} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <td className="titleCol">Downside % Change</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.put1 / this.state.price1 *100)) ? (Math.round(((this.state.put1 / this.state.price1)-1) *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.put2 / this.state.price2 *100)) ? (Math.round(((this.state.put2 / this.state.price2)-1) *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.put3 / this.state.price3 *100)) ? (Math.round(((this.state.put3 / this.state.price3)-1) *10000)/100 + '%') : ""}</td>
              <td className="dataCol">{!isNaN(Math.round(this.state.put4 / this.state.price4 *100)) ? (Math.round(((this.state.put4 / this.state.price4)-1) *10000)/100 + '%') : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">Downside % of Expected Move</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price1 - this.state.put1)/this.state.em1*100)/100) ? (Math.round((this.state.price1 - this.state.put1)/this.state.em1*100)/100) + '%' : ""}</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price2 - this.state.put2)/this.state.em2*100)/100) ? (Math.round((this.state.price2 - this.state.put2)/this.state.em2*100)/100) + '%' : ""}</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price3 - this.state.put3)/this.state.em3*100)/100) ? (Math.round((this.state.price3 - this.state.put3)/this.state.em3*100)/100) + '%' : ""}</td>
              <td className="dataCol">{!isNaN(Math.round((this.state.price4 - this.state.put4)/this.state.em4*100)/100) ? (Math.round((this.state.price4 - this.state.put4)/this.state.em4*100)/100) + '%' : ""}</td>
            </tr> 
            <tr>
              <td className="titleCol">Times Stock Has Moved This Much</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> 
          </tbody>            
       </table>

      </div>         
    );
  }
}
          
export default Setup;